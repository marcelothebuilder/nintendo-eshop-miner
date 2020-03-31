import { SearchIndex } from "algoliasearch/lite";
import { flatten, groupBy, max, min } from "lodash";
import { assert } from "../logging/assert";
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
  private index: SearchIndex;

  private maxRequestLength = 1000;

  private platform: string;

  private gamesPerPriceRange?: any[];

  private gamesPerCategory?: any[];

  constructor({ platform, algoliaIndex }: { platform: string; algoliaIndex: SearchIndex }) {
    this.platform = platform;
    this.index = algoliaIndex;
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

  async getGamesInAnyCategoryCount() {
    const anyCategoryFilter = (await this.getCategories()).map((category) =>
      NorthAmericaDumper.getCategoryFilter(category),
    );
    return this.index
      .search("", {
        length: this.maxRequestLength,
        facetFilters: [this.getPlatformFacetFilter() as any, anyCategoryFilter],
        offset: 0,
        hitsPerPage: 0,
      })
      .then((result) => {
        return result.nbHits;
      });
  }

  async getPriceRanges() {
    const gamesPerPriceRange = await this.getGamesPerPriceRange();
    return Object.keys(gamesPerPriceRange);
  }

  async getGamesByPriceRange(priceRange: NorthAmericaGame["priceRange"]) {
    if (this.gamesPerPriceRange) {
      return this.gamesPerPriceRange;
    }

    this.gamesPerPriceRange = (
      await this.index.search("", {
        length: this.maxRequestLength,
        filters: `priceRange: "${priceRange}"`,
        facetFilters: [this.getPlatformFacetFilter()],
        offset: 0,
      })
    ).hits as any[];

    return this.gamesPerPriceRange;
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

  async getCategories() {
    return Object.keys(this.getGamesPerCategory());
  }

  async getGamesPerCategory() {
    if (this.gamesPerCategory) {
      return this.gamesPerCategory;
    }

    this.gamesPerCategory = (await this.getFacetSearch("categories")) as any[];
    return this.gamesPerCategory;
  }

  async getGamesPerPublisher() {
    return this.getFacetSearch("publishers");
  }

  async getGamesPerPriceRange() {
    return this.getFacetSearch("priceRange");
  }

  async getGamesPerPlatform() {
    return this.index
      .search("", {
        facets: ["platform"],
        hitsPerPage: 0,
      })
      .then((result) => {
        if (!result.facets) return [];
        return result.facets.platform;
      });
  }

  /**
   * This method is useless. Nintendo does not store games without an category.
   */
  async getGamesWithoutCategory() {
    const categories = Object.keys(await this.getGamesPerCategory());
    const categoriesNegationFilter = categories.map((category) => `category:~${category}`);

    return this.index
      .search("", {
        length: this.maxRequestLength,
        facetFilters: [this.getPlatformFacetFilter()].concat(categoriesNegationFilter),
        offset: 0,
      })
      .then((result) => {
        const games = result.hits as NorthAmericaGame[];
        return games;
      });
  }

  private async getFacetSearch(attribute: keyof NorthAmericaGame) {
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
  private async searchAllByCategory(category: string, gamesInCategory: number): Promise<NorthAmericaGame[]> {
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
    return this.index
      .search("", {
        length: this.maxRequestLength,
        facetFilters: [this.getPlatformFacetFilter(), NorthAmericaDumper.getCategoryFilter(category)],
        offset: 0,
      })
      .then((result) => {
        const games = result.hits as NorthAmericaGame[];

        assert(
          () => games.length === gamesInCategory,
          () => `Search for category ${category} must return ${gamesInCategory} entries, returned ${games.length}`,
        );
        return games;
      });
  }

  /**
   * Cannot be used  reliably to find distinct games because Nintendo stores duplicates (considering objectID as key)
   */
  private async getObjectsCount(): Promise<number> {
    return this.index
      .search("", {
        facetFilters: [this.getPlatformFacetFilter()],
        hitsPerPage: 0,
      })
      .then((r) => r.nbHits); // just a note to those who are reading... NEVER abbreviate number to nb.
  }

  private getPlatformFacetFilter() {
    return `platform:${this.platform}`;
  }

  private static getPriceRangeFilter(priceRange: string): string {
    return `priceRange:"${priceRange}"`;
  }

  private static getCategoryFilter(category: string): string {
    return `categories:${category}`;
  }

  private static getModificationTimes(
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
