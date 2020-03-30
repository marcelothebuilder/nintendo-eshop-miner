import { uniq, uniqBy, sum } from 'lodash';
import algolia, { SearchIndex } from 'algoliasearch';
import { Game } from './game';

const log = (data: any) => console.log(data);
const error = (data: any) => console.error(data);

/**
 * @tutorial https://www.algolia.com/doc/api-client/getting-started/what-is-the-api-client/javascript/?language=javascript
 * Nintendo limits search to only 1000 hits.
 */
class NintendoOfAmericaDumper {
    index: SearchIndex;
    maxRequestLength = 1000;
    offset: number;
    platform: string;
    priceRanges?: string[];
    gamesPerCategory?: any[];

    constructor(platform = 'Nintendo Switch') {
        this.platform = platform;
        this.offset = 0;
        this.index = algolia('U3B6GR4UA3', '9a20c93440cf63cf1a7008d75f7438bf')
            .initIndex('noa_aem_game_en_us_title_asc')
    }

    /**
     * used internally for validation
     */
    private async getObjectsCount(): Promise<number> {
        return this.index.search('', {
            facetFilters: [this.getPlatformFacetFilter()],
            hitsPerPage: 0
        }).then(r => r.nbHits); // just a note to those who are reading... NEVER abbreviate number to nb.
    }

    async getGamesInAnyCategoryCount() {
        const anyCategoryFilter = (await this.getCategories()).map(category => this.getCategoryFilter(category));
        return this.index.search('', {
            length: this.maxRequestLength,
            facetFilters: [this.getPlatformFacetFilter() as any, anyCategoryFilter],
            offset: 0,
            hitsPerPage: 0
        }).then(result => {
            return result.nbHits;
        });
    }

    /**
     * loop through algolia index fetching until we have no more records
     */
    async searchAll(): Promise<Game[]> {

        const gamesTotal =  await this.getObjectsCount();

        const gamesPerCategory = await this.getGamesPerCategory();

        const categories = Object.entries(gamesPerCategory)
            .map(e => ({ name: e[0], count: e[1] }));

        await this.fetchPriceRanges();

        const categoriesPromsie = await Promise.all(categories.map(async category => {
            const gamesInCategory = await this.searchAllByCategory(category.name, category.count);

            return gamesInCategory;
        }));

        const notCategorized = await this.getGamesWithoutCategory();
        const join = categoriesPromsie.reduce((acc, games) => acc.concat(games), []).concat(notCategorized);
        const uniqe =  uniqBy(join, (game: Game) => game.objectID)
        console.assert(gamesTotal === uniqe.length, `There are ${gamesTotal} objects reported by algolia, but we could only fetch ${uniqe.length}`);
        return uniqe;
    }

    private async fetchPriceRanges() {
        if (this.priceRanges) {
            return this.priceRanges;
        }

        this.priceRanges = await this.getPriceRanges();
        return this.priceRanges;

    }

    private getPriceRangeFilter(priceRange: string): string {
        return `priceRange:"${priceRange}"`;
    }

    /**
     * // TODO:  at each category crawl we can ask for angolia to NOT return games in categories already fetched previously
     * @param category 
     * @param gamesInCategory 
     */
    private async searchAllByCategory(category: string, gamesInCategory: number): Promise<Game[]> {
        console.log([this.getPlatformFacetFilter(), this.getCategoryFilter(category)]);
        if (gamesInCategory > this.maxRequestLength) {
            // search by price range
            if (!this.priceRanges || !this.priceRanges.length) {
                throw Error('No price range, at this point it is required');
            }

            const rangesPromises = this.priceRanges.map(async priceRange => {
                console.log(this.getPriceRangeFilter(priceRange));
                return this.index.search('', {
                    length: this.maxRequestLength,
                    filters: this.getPriceRangeFilter(priceRange),
                    facetFilters: [this.getPlatformFacetFilter(), this.getCategoryFilter(category)],
                    offset: 0
                }).then(result => result.hits as Game[]);
            });

            const rangr = await Promise.all(rangesPromises);


            let games: any[] = [];

            rangr.forEach(gamesInRange => games = games.concat(gamesInRange));

            const gamesWithoutPriceRange = await this.getGamesWithoutPriceRangeByCategory(category);

            games = games.concat(gamesWithoutPriceRange);

            console.assert(games.length === gamesInCategory, `Search for category ${category} must return ${gamesInCategory} entries, returned ${games.length}`);

            return games;

        }
        return this.index.search('', {
            length: this.maxRequestLength,
            facetFilters: [this.getPlatformFacetFilter(), this.getCategoryFilter(category)],
            offset: 0
        }).then(result => {
            const games = result.hits as Game[];
            console.assert(games.length === gamesInCategory, `Search for category ${category} must return ${gamesInCategory} entries, returned ${games.length}`);
            return games;
        });
    }

    private getCategoryFilter(category: string) {
        return `categories:${category}`;
    }

    async getPriceRanges() {
        const gamesPerPriceRange = await this.getGamesPerPriceRange();
        return Object.keys(gamesPerPriceRange);
    }

    async getGamesByPriceRange(priceRange: Game['priceRange']) {
        return this.index.search('', {
            length: this.maxRequestLength,
            filters: `priceRange: "${priceRange}"`,
            facetFilters: [this.getPlatformFacetFilter()],
            offset: 0
        }).then(result => {
            return result.hits as Game[];
        });
    }

    async getGamesWithoutPriceRangeByCategory(category: string) {
        const ranges = await this.getPriceRanges();
        const rangesFilter = ranges
            .map(range => `"${range}"`) // TODO: is it needed when it does not have spaces?
            .map(range => `NOT priceRange:${range}`)
            .join(' AND ');

        console.log(rangesFilter);

        return this.index.search('', {
            length: this.maxRequestLength,
            filters: rangesFilter,
            facetFilters: [this.getPlatformFacetFilter(), this.getCategoryFilter(category)],
            offset: 0
        }).then(result => {
            return result.hits as Game[];
        });

    }

    async getCategories() {
        return Object.keys(this.getGamesPerCategory());
    }

    async getGamesPerCategory() {
        if (this.gamesPerCategory) {
            return this.gamesPerCategory;
        }

        this.gamesPerCategory = await this.getFacetSearch('categories') as any[];
        return this.gamesPerCategory;
    }


    async getGamesPerPublisher() {
        return this.getFacetSearch('publishers');
    }

    async getGamesPerPriceRange() {
        return this.getFacetSearch('priceRange');
    }

    async getGamesPerPlatform() {
        return this.index.search('', {
            facets: ['platform'],
            hitsPerPage: 0
        })
            .then(result => {
                if (!result.facets) return [];
                return result.facets.platform;
            });
    }

    public async getFacetSearch(attribute: keyof Game) {
        const facet = attribute;
        return this.index.search('', {
            facets: [facet],
            facetFilters: [this.getPlatformFacetFilter()],
            hitsPerPage: 0
        })
            .then(result => {
                if (!result.facets) return [];
                return result.facets[facet];
            });
    }

    /**
     * This method is useless. Nintendo does not store games without an category.
     */
    public async getGamesWithoutCategory() {
        const categories = Object.keys(await this.getGamesPerCategory());
        const categoriesNegationFilter = categories.map(category => `category:~${category}`);

        return this.index.search('', {
            length: this.maxRequestLength,
            facetFilters: [this.getPlatformFacetFilter()].concat(categoriesNegationFilter),
            offset: 0
        }).then(result => {
            const games = result.hits as Game[];
            return games;
        });

    }

    private getPlatformFacetFilter() {
        return `platform:${this.platform}`
    }
}
// new NintendoAmericaSearch()
//     .searchAll()
//     .then((games) => {
//         log(games);
//         return games as any;
//     })
//     .then((games: Game[]) => {
//         return games.map(game => game.title);
//     })
//     .then((g) => {
//         console.log(g.length);
//         console.log(uniq(g).length);
//     })
//     .catch(error);

async function main() {
    try {
        // 3531
        const games = await new NintendoOfAmericaDumper()
            // .getFacetSearch('categories');
            .searchAll()

        console.log(games);
        // const rlsdate = games.map(game => game.releaseDateMask);
        // console.log(rlsdate);
    } catch (e) {
        console.error(e);
    }


}

main().then(() => console.log('Done execution'));

