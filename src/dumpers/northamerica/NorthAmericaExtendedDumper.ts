import { NorthAmericaDumper } from "./NorthAmericaDumper";
import { NorthAmericaGame } from "./NorthAmericaGame";

export class NorthAmericaExtendedDumper extends NorthAmericaDumper {
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

  async getCategories() {
    return Object.keys(this.getGamesPerCategory());
  }

  async getGamesPerPublisher() {
    return this.getFacetSearch("publishers");
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

  /**
   * Cannot be used  reliably to find distinct games because Nintendo stores duplicates (considering objectID as key)
   */
  protected async getObjectsCount(): Promise<number> {
    return this.index
      .search("", {
        facetFilters: [this.getPlatformFacetFilter()],
        hitsPerPage: 0,
      })
      .then((r) => r.nbHits); // just a note to those who are reading... NEVER abbreviate number to nb.
  }
}
