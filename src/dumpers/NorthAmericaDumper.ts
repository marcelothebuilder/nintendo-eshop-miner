import { SearchIndex } from "algoliasearch/lite";
import { flatten, groupBy, max, min } from "lodash";
import { logger } from "../logging/logger";
import { NorthAmericaGame } from "./NorthAmericaGame";

export const NintendoOfAmericaPlatforms = {
  SWITCH: "Nintendo Switch",
};

export interface NintendoDumper {
  searchAll(): Promise<DumperResult>;
}

export interface DumperResult {
  games: NorthAmericaGame[];
  firstModified?: Date | undefined;
  lastModified?: Date | undefined;
}

/**
 * @tutorial https://www.algolia.com/doc/api-client/getting-started/what-is-the-api-client/javascript/?language=javascript
 * Nintendo limits search to only 1000 hits.
 *
 * NintendoOfAmericaDumper says: plz revok come back to refactor i love you
 * Revok says: Ok NintendoOfAmericaDumper *leaves to buy a pack of cigarettes*
 */
export class NorthAmericaDumper implements NintendoDumper {
  protected index: SearchIndex;

  protected maxRequestLength: number;

  protected platform: string;

  protected gamesPerPriceRange?: any[];

  protected gamesPerCategory?: any[];

  constructor({
    platform,
    algoliaIndex,
    maxRequestLength,
  }: {
    platform?: string;
    algoliaIndex: SearchIndex;
    maxRequestLength?: number;
  }) {
    this.platform = platform || NintendoOfAmericaPlatforms.SWITCH;
    this.index = algoliaIndex;
    this.maxRequestLength = maxRequestLength || 1000;
  }

  /**
   * loop through algolia index fetching until we have no more records
   */
  async searchAll(): Promise<DumperResult> {
    logger.info(`${this.index.indexName}:searchAll`);

    const gamesPerCategory = await this.getGamesPerCategory();

    const categories = Object.entries(gamesPerCategory).map((e) => ({ name: e[0], count: e[1] }));

    await this.getPriceRanges();

    const games = flatten(
      await Promise.all(
        categories.map(async (category) => {
          const gamesInCategory = await this.searchAllByCategory(category.name, category.count);

          return gamesInCategory;
        }),
      ),
    );

    const uniqe = Object.values(groupBy(games, (game) => game.objectID)).map((group: NorthAmericaGame[]) => {
      if (group.length === 1) {
        return group[0];
      }

      return group.sort((a, b) => {
        return b.lastModified - a.lastModified;
      })[0];
    });

    return {
      ...NorthAmericaDumper.getModificationTimes(uniqe),
      games: uniqe,
    };
  }

  async getPriceRanges() {
    const gamesPerPriceRange = await this.getGamesPerPriceRange();
    return Object.keys(gamesPerPriceRange);
  }

  async getGamesPerCategory() {
    if (this.gamesPerCategory) {
      return this.gamesPerCategory;
    }

    this.gamesPerCategory = (await this.getFacetSearch("categories")) as any[];
    return this.gamesPerCategory;
  }

  async getGamesPerPriceRange() {
    return this.getFacetSearch("priceRange");
  }

  async getGamesWithoutPriceRangeByCategory(category: string) {
    const ranges = await this.getPriceRanges();
    const rangesFilter = ranges
      .map((range) => `"${range}"`) // TODO: is it needed when it does not have spaces?
      .map((range) => `NOT priceRange:${range}`)
      .join(" AND ");

    return this.index
      .search("", {
        length: this.maxRequestLength,
        filters: rangesFilter,
        facetFilters: [this.getPlatformFacetFilter(), NorthAmericaDumper.getCategoryFilter(category)],
        offset: 0,
      })
      .then((result) => {
        return result.hits as NorthAmericaGame[];
      });
  }

  protected async getFacetSearch(attribute: keyof NorthAmericaGame) {
    const facet = attribute;
    return this.index
      .search("", {
        facets: [facet],
        facetFilters: [this.getPlatformFacetFilter()],
        hitsPerPage: 0,
      })
      .then((result) => {
        if (!result.facets) return [];
        return result.facets[facet];
      });
  }

  /**
   * // TODO:  at each category crawl we can ask for angolia to NOT return games in categories already fetched previously
   * @param category
   * @param gamesInCategory
   */
  protected async searchAllByCategory(category: string, gamesInCategory: number): Promise<NorthAmericaGame[]> {
    if (gamesInCategory > this.maxRequestLength) {
      const priceRanges = await this.getPriceRanges();
      // search by price range
      if (!priceRanges || !priceRanges.length) {
        throw Error("No price range, at this point it is required");
      }

      const rangesPromises = priceRanges.map(async (priceRange) => {
        return this.index
          .search("", {
            length: this.maxRequestLength,
            filters: NorthAmericaDumper.getPriceRangeFilter(priceRange),
            facetFilters: [this.getPlatformFacetFilter(), NorthAmericaDumper.getCategoryFilter(category)],
            offset: 0,
          })
          .then((result) => result.hits as NorthAmericaGame[]);
      });

      const rangr = await Promise.all(rangesPromises);

      let games: any[] = [];

      // eslint-disable-next-line no-return-assign
      rangr.forEach((gamesInRange) => (games = games.concat(gamesInRange)));

      const gamesWithoutPriceRange = await this.getGamesWithoutPriceRangeByCategory(category);

      games = games.concat(gamesWithoutPriceRange);

      return games;
    }

    const requestOptions = {
      length: this.maxRequestLength,
      facetFilters: [this.getPlatformFacetFilter(), NorthAmericaDumper.getCategoryFilter(category)],
      offset: 0,
    };

    return this.index.search("", requestOptions).then((result) => {
      const games = result.hits as NorthAmericaGame[];

      if (games.length !== gamesInCategory)
        throw Error(`Search for category ${category} must return ${gamesInCategory} entries, returned ${games.length}`);

      return games;
    });
  }

  protected getPlatformFacetFilter() {
    return `platform:${this.platform}`;
  }

  protected static getPriceRangeFilter(priceRange: string): string {
    return `priceRange:"${priceRange}"`;
  }

  protected static getCategoryFilter(category: string): string {
    return `categories:${category}`;
  }

  protected static getModificationTimes(
    games: NorthAmericaGame[],
  ): Partial<Pick<DumperResult, "firstModified" | "lastModified">> {
    const modificationEntries: number[] = games.map((game) => game.lastModified);

    if (!modificationEntries || !modificationEntries.length) return {};

    return {
      // FUCK YOU TYPESCRIPT
      firstModified: new Date(min(modificationEntries) as any),
      lastModified: new Date(max(modificationEntries) as any),
    };
  }
}
