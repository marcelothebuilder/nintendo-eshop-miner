import { SearchIndex } from "algoliasearch/lite";
import _, { groupBy, max, min, flatten } from "lodash";
import { SearchResponse, SearchOptions } from "@algolia/client-search";
import { RequestOptions } from "@algolia/transporter";
import { promiseSerial } from "../../promises/promiseSerial";
import { logger } from "../../logging/logger";
import { NorthAmericaGame } from "./NorthAmericaGame";

export const NintendoOfAmericaPlatforms = {
  SWITCH: "Nintendo Switch",
  NINTENDO_3DS: "Nintendo 3DS",
};

export interface NintendoDumper {
  searchAll(): Promise<DumperResult>;
}

export interface DumperResult {
  games: NorthAmericaGame[];
  firstModified?: Date | undefined;
  lastModified?: Date | undefined;
}

export interface CategoryInfo {
  name: string;
  gamesCount: number;
}

export interface NorthAmericaDumperConstructor {
  platform?: string;
  algoliaIndex: SearchIndex;
  maxRequestLength?: number;
  allowSimultaneousRequests?: boolean;
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

  protected gamesPerPriceRange?: Record<string, any>;

  protected gamesPerCategory?: Record<string, any>;

  protected allowSimultaneousRequests: boolean;

  private facetSearchCache: Record<string, Readonly<Promise<SearchResponse<object>>>> = {};

  constructor({ platform, algoliaIndex, maxRequestLength, allowSimultaneousRequests }: NorthAmericaDumperConstructor) {
    this.platform = platform || NintendoOfAmericaPlatforms.SWITCH;
    this.index = algoliaIndex;
    this.maxRequestLength = maxRequestLength || 1000;
    this.allowSimultaneousRequests = allowSimultaneousRequests || false;
  }

  /**
   * loop through algolia index fetching until we have no more records
   */
  async searchAll(): Promise<DumperResult> {
    logger.info(`NorthAmericaDumper: ${this.index.indexName}:searchAll`);

    const categories = await this.getCategoriesAndGamesCount();

    if (_.isEmpty(categories)) {
      return NorthAmericaDumper.getEmptyResponse();
    }

    const uniqueGames = NorthAmericaDumper.unique(await this.searchGamesByCategories(categories));

    const games: NorthAmericaGame[] = NorthAmericaDumper.addBaseUrlToRelativeUrls(uniqueGames);

    return {
      ...NorthAmericaDumper.getModificationTimes(games),
      games,
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

    this.gamesPerCategory = await this.getFacetSearch("categories");
    return this.gamesPerCategory;
  }

  async getGamesPerPriceRange() {
    return this.getFacetSearch("priceRange");
  }

  async getGamesWithoutPriceRangeByCategory(category: string) {
    const ranges = await this.getPriceRanges();

    return this.indexSearch({
      length: this.maxRequestLength,
      filters: NorthAmericaDumper.getNoPriceRangeFilter(ranges),
      facetFilters: [this.getPlatformFacetFilter(), NorthAmericaDumper.getCategoryFilter(category)],
      offset: 0,
    }).then((result) => {
      return result.hits as NorthAmericaGame[];
    });
  }

  protected async getFacetSearch(facet: keyof NorthAmericaGame) {
    if (this.facetSearchCache[facet]) {
      return this.facetSearchCache[facet];
    }

    this.facetSearchCache[facet] = this.indexSearch({
      facets: [facet],
      facetFilters: [this.getPlatformFacetFilter()],
      hitsPerPage: 0,
    }).then((result) => {
      if (!result.facets) return {};
      return result.facets[facet] || {};
    }) as any;

    return this.facetSearchCache[facet];
  }

  /**
   * // TODO:  at each category crawl we can ask for angolia to NOT return games in categories already fetched previously
   * @param category
   * @param gamesInCategory
   */
  protected async searchAllByCategory(category: string, gamesInCategory: number): Promise<NorthAmericaGame[]> {
    if (this.isGreaterThanSearchLimit(gamesInCategory)) {
      return this.searchAllByCategoryPagedByPriceRanges(category);
    }

    const requestOptions = {
      length: this.maxRequestLength,
      facetFilters: [this.getPlatformFacetFilter(), NorthAmericaDumper.getCategoryFilter(category)],
      offset: 0,
    };

    return this.indexSearch(requestOptions).then((result) => {
      const games = result.hits as NorthAmericaGame[];

      if (games.length !== gamesInCategory)
        throw Error(`Search for category ${category} must return ${gamesInCategory} entries, returned ${games.length}`);

      return games;
    });
  }

  protected getPlatformFacetFilter() {
    return `platform:${this.platform}`;
  }

  protected indexSearch(searchOptions: RequestOptions & SearchOptions) {
    return this.index.search("", searchOptions);
  }

  private isGreaterThanSearchLimit(gamesInCategory: number): boolean {
    return gamesInCategory > this.maxRequestLength;
  }

  private async searchGamesByCategories(categories: CategoryInfo[]): Promise<NorthAmericaGame[]> {
    if (this.allowSimultaneousRequests) {
      return this.searchGamesByCategoriesInParallel(categories);
    }

    return this.searchGamesByCategoriesInSequence(categories);
  }

  private async searchGamesByCategoriesInSequence(categories: CategoryInfo[]): Promise<NorthAmericaGame[]> {
    return promiseSerial(
      categories.map((category) => () => this.searchAllByCategory(category.name, category.gamesCount)),
    );
  }

  private async searchGamesByCategoriesInParallel(categories: CategoryInfo[]): Promise<NorthAmericaGame[]> {
    const games = flatten(
      await Promise.all(categories.map((category) => this.searchAllByCategory(category.name, category.gamesCount))),
    );

    return games;
  }

  private async getCategoriesAndGamesCount(): Promise<CategoryInfo[]> {
    const gamesPerCategory = await this.getGamesPerCategory();
    const categories: CategoryInfo[] = Object.entries(gamesPerCategory).map((categoryAndGamesCount) => ({
      name: categoryAndGamesCount[0],
      gamesCount: categoryAndGamesCount[1],
    }));
    return categories;
  }

  private async searchAllByCategoryPagedByPriceRanges(category: string): Promise<NorthAmericaGame[]> {
    if (this.allowSimultaneousRequests) return this.searchAllByCategoryPagedByPriceRangesInParallel(category);

    return this.searchAllByCategoryPagedByPriceRangesInSequence(category);
  }

  private async searchAllByCategoryPagedByPriceRangesInParallel(category: string) {
    const rangesPromises = (await this.getPriceRanges())
      .map(async (priceRange) => {
        return this.indexSearch({
          length: this.maxRequestLength,
          filters: NorthAmericaDumper.getPriceRangeFilter(priceRange),
          facetFilters: [this.getPlatformFacetFilter(), NorthAmericaDumper.getCategoryFilter(category)],
          offset: 0,
        }).then((result) => result.hits as NorthAmericaGame[]);
      })
      .concat([this.getGamesWithoutPriceRangeByCategory(category)]);

    return flatten(await Promise.all(rangesPromises));
  }

  private async searchAllByCategoryPagedByPriceRangesInSequence(category: string): Promise<NorthAmericaGame[]> {
    const gamesWithoutPrices = await this.getGamesWithoutPriceRangeByCategory(category);

    const priceRanges = await this.getPriceRanges();

    const searchByPriceRange = (priceRange: string) => this.searchAllByCategoryAndPriceRange(category, priceRange);

    const gamesWithPriceRange = await promiseSerial(
      priceRanges.map((priceRange) => () => searchByPriceRange(priceRange)),
    );

    return gamesWithPriceRange.concat(gamesWithoutPrices);
  }

  private async searchAllByCategoryAndPriceRange(category: string, priceRange: string) {
    return this.indexSearch({
      length: this.maxRequestLength,
      filters: NorthAmericaDumper.getPriceRangeFilter(priceRange),
      facetFilters: [this.getPlatformFacetFilter(), NorthAmericaDumper.getCategoryFilter(category)],
      offset: 0,
    }).then((result) => result.hits as NorthAmericaGame[]);
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

  private static unique(games: NorthAmericaGame[]): NorthAmericaGame[] {
    return Object.values(groupBy(games, (game) => game.objectID)).map((group: NorthAmericaGame[]) => {
      if (group.length === 1) {
        return group[0];
      }

      return group.sort((a, b) => {
        return b.lastModified - a.lastModified;
      })[0];
    });
  }

  private static getNoPriceRangeFilter(priceRanges: string[]) {
    return priceRanges
      .map((range) => `"${range}"`) // TODO: is it needed when it does not have spaces?
      .map((range) => `NOT priceRange:${range}`)
      .join(" AND ");
  }

  private static getEmptyResponse() {
    return { games: [] };
  }

  private static addBaseUrlToRelativeUrls(arg0: NorthAmericaGame[]): NorthAmericaGame[] {
    return arg0.map((g) => ({
      ...g,
      boxArt: `https://www.nintendo.com/${g.boxArt}`,
    }));
  }
}
