import algolia, { SearchIndex } from 'algoliasearch';
import { groupBy } from 'lodash';
import { NintendoOfAmericaGame } from './game';


/**
 * @tutorial https://www.algolia.com/doc/api-client/getting-started/what-is-the-api-client/javascript/?language=javascript
 * Nintendo limits search to only 1000 hits.
 */
export class NintendoOfAmericaDumper {
    private index: SearchIndex;
    private maxRequestLength = 1000;
    private platform: string;
    private gamesPerPriceRange?: any[];
    private gamesPerCategory?: any[];

    constructor(platform = 'Nintendo Switch') {
        this.platform = platform;
        this.index = algolia('U3B6GR4UA3', '9a20c93440cf63cf1a7008d75f7438bf')
            .initIndex('noa_aem_game_en_us_title_asc')
    }

    /**
     * Cannot be used  reliably to find distinct games because Nintendo stores duplicates (considering objectID as key)
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
    async searchAll(): Promise<NintendoOfAmericaGame[]> {

        const gamesPerCategory = await this.getGamesPerCategory();

        const categories = Object.entries(gamesPerCategory)
            .map(e => ({ name: e[0], count: e[1] }));

        await this.getPriceRanges();

        const games = (await Promise.all(categories.map(async category => {
            const gamesInCategory = await this.searchAllByCategory(category.name, category.count);

            return gamesInCategory;
        }))).reduce((acc, games) => acc.concat(games), []);

        const uniqe = Object.values(groupBy(games, game => game.objectID))
            .map((group: NintendoOfAmericaGame[]) => {
                if (group.length === 1) {
                    return group[0];
                }

                return group.sort((a, b) => {
                    return b.lastModified - a.lastModified;
                })[0];
            });
        // console.assert(gamesTotal === uniqe.length, `There are ${gamesTotal} objects reported by algolia, but we could only fetch ${uniqe.length}`);
        return uniqe;
    }

    private getPriceRangeFilter(priceRange: string): string {
        return `priceRange:"${priceRange}"`;
    }

    /**
     * // TODO:  at each category crawl we can ask for angolia to NOT return games in categories already fetched previously
     * @param category 
     * @param gamesInCategory 
     */
    private async searchAllByCategory(category: string, gamesInCategory: number): Promise<NintendoOfAmericaGame[]> {
        console.log([this.getPlatformFacetFilter(), this.getCategoryFilter(category)]);
        if (gamesInCategory > this.maxRequestLength) {

            const priceRanges = await this.getPriceRanges();
            // search by price range
            if (!priceRanges || !priceRanges.length) {
                throw Error('No price range, at this point it is required');
            }

            const rangesPromises = priceRanges.map(async priceRange => {
                console.log(this.getPriceRangeFilter(priceRange));
                return this.index.search('', {
                    length: this.maxRequestLength,
                    filters: this.getPriceRangeFilter(priceRange),
                    facetFilters: [this.getPlatformFacetFilter(), this.getCategoryFilter(category)],
                    offset: 0
                }).then(result => result.hits as NintendoOfAmericaGame[]);
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
            const games = result.hits as NintendoOfAmericaGame[];
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

    async getGamesByPriceRange(priceRange: NintendoOfAmericaGame['priceRange']) {
        if (this.gamesPerPriceRange) {
            return this.gamesPerPriceRange;
        }

        this.gamesPerPriceRange = (await this.index.search('', {
            length: this.maxRequestLength,
            filters: `priceRange: "${priceRange}"`,
            facetFilters: [this.getPlatformFacetFilter()],
            offset: 0
        })).hits as any[];

        return this.gamesPerPriceRange;
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
            return result.hits as NintendoOfAmericaGame[];
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

    public async getFacetSearch(attribute: keyof NintendoOfAmericaGame) {
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
            const games = result.hits as NintendoOfAmericaGame[];
            return games;
        });

    }

    private getPlatformFacetFilter() {
        return `platform:${this.platform}`
    }
}
