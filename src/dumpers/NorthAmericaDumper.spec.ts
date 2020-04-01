/* eslint-disable no-unused-expressions */
import { SearchIndex } from "algoliasearch";
import chai, { assert, expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import randomString from "human-readable-random-string";
import { afterEach, describe, it } from "mocha";
import sinon from "sinon";
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from "uuid";
import { NintendoOfAmericaPlatforms, NorthAmericaDumper } from "./NorthAmericaDumper";

chai.should();
chai.use(chaiAsPromised);

function randomDateBetween(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomDate(): Date {
  return randomDateBetween(new Date(0), new Date());
}

function getFakeNSuid(): number {
  return Math.floor(Math.random() * (70010000009564 - 70010000000000)) + 70010000000000;
}
function makeGame(categories: string[], overrides = {}) {
  const nsuid = getFakeNSuid();
  const title = randomString(30);
  return {
    type: "game",
    locale: "en_US",
    url: "/games/detail/fitness-boxing-switch",
    title,
    description:
      "Get off the couch and get moving with fun, boxing-based rhythmic exercises set to the instrumental beats of songs by popular artists. You can personalize your workouts by selecting from different fitness goals. Train your way, whether you’re on your own, with a friend, at home, or on the go! Now you can work out anytime, anywhere on the Nintendo Switch system!\nGet down your boxing basics while getting down to instrumental versions of 20 unlockable hit songs. Punch and squat while gripping the Joy-Con controllers to get your whole body moving—no additional gym equipment required!\nDaily training ranges from 10-40 minutes and offers both Normal and Fast mode. The game software estimates your approximate BMI and daily calories burned so you can track your progress. Choose from a diverse group of trainers and customize their look with unlockable trainer outfits. As you progress, you can earn more songs and more challenging training circuits. If you prefer to work out with a buddy, you can use two sets of Joy-Con controllers or share a pair to enjoy working out cooperatively or test your skills by facing off against each other in a virtual ring!",
    lastModified: randomDate().valueOf(),
    id: "bluBm8p_g8HowCpH3r7VpIJLPIwMtmjN",
    nsuid: String(nsuid),
    slug: "fitness-boxing-switch",
    boxArt: "/content/dam/noa/en_US/games/switch/f/fitness-boxing-switch/Switch_FitnessBoxing_box.png",
    gallery: "lwN215ZzE6MREAiX-OKN0UVV9eYb-QZ1",
    platform: "Nintendo Switch",
    releaseDateMask: "2019-01-03T00:00:00.000-08:00",
    characters: [],
    categories,
    msrp: 49.99,
    esrb: "Teen",
    esrbDescriptors: ["Mild Violence", "Suggestive Themes"],
    virtualConsole: "na",
    generalFilters: ["Nintendo Switch Game Voucher", "Demo available", "Online Play via Nintendo Switch Online"],
    filterShops: ["At retail"],
    filterPlayers: ["1+"],
    publishers: ["Nintendo"],
    players: "up to 2 players",
    featured: true,
    freeToStart: false,
    priceRange: "$40+",
    salePrice: null,
    availability: ["Available now"],
    objectID: uuidv4(),
    _highlightResult: {
      title: {
        value: title,
        matchLevel: "none",
        matchedWords: [],
      },
      id: {
        value: "bluBm8p_g8HowCpH3r7VpIJLPIwMtmjN",
        matchLevel: "none",
        matchedWords: [],
      },
      nsuid: {
        value: nsuid,
        matchLevel: "none",
        matchedWords: [],
      },
      publishers: [
        {
          value: "Nintendo",
          matchLevel: "none",
          matchedWords: [],
        },
      ],
    },
    ...overrides,
  };
}

function testNorthAmericaDumper(allowSimultaneousRequests: boolean) {
  function getDumperWithIndex(indexStub: Partial<SearchIndex>, extraOpts?: object) {
    return new NorthAmericaDumper({
      algoliaIndex: indexStub as SearchIndex,
      ...extraOpts,
      allowSimultaneousRequests,
    });
  }
  describe(`NorthAmericaDumper ${allowSimultaneousRequests ? "with" : "without"} simultaneous requests`, () => {
    afterEach(() => sinon.restore());

    it("should be created successfully!", () => {
      // eslint-disable-next-line no-new
      const instance = getDumperWithIndex({});
      expect(instance).to.be.instanceOf(NorthAmericaDumper);
    });

    it("should only fetch categories once", async () => {
      const searchStub = sinon.stub();

      searchStub
        .withArgs("", { facets: ["categories"], facetFilters: ["platform:Nintendo Switch"], hitsPerPage: 0 })
        .resolves({
          hits: [],
          nbHits: 3,
          page: 0,
          nbPages: 0,
          hitsPerPage: 0,
          facets: {
            categories: {},
          },
          exhaustiveFacetsCount: true,
          exhaustiveNbHits: true,
          query: "",
          params: "facets=%5B%22categories%22%5D&facetFilters=%5B%22platform%3ANintendo+Switch%22%5D&hitsPerPage=0",
          processingTimeMS: 1,
        });

      const instance = getDumperWithIndex({
        search: searchStub,
      });

      await instance.searchAll();
      await instance.searchAll();

      expect(searchStub.calledOnce).to.be.true;
    });

    describe("searchAll", () => {
      it("should default to switch when platform is not specified", async () => {
        const searchStub = sinon.stub();

        const switchRequest = searchStub
          .withArgs("", { facets: ["categories"], facetFilters: ["platform:Nintendo Switch"], hitsPerPage: 0 })
          .resolves({
            hits: [],
            nbHits: 3,
            page: 0,
            nbPages: 0,
            hitsPerPage: 0,
            facets: {
              categories: {},
            },
            exhaustiveFacetsCount: true,
            exhaustiveNbHits: true,
            query: "",
            params: "facets=%5B%22categories%22%5D&facetFilters=%5B%22platform%3ANintendo+Switch%22%5D&hitsPerPage=0",
            processingTimeMS: 1,
          });

        const fallbackRequest = searchStub
          .withArgs("", { facets: ["categories"], facetFilters: ["platform:Nintendo 3DS"], hitsPerPage: 0 })
          .resolves({
            hits: [],
            nbHits: 3,
            page: 0,
            nbPages: 0,
            hitsPerPage: 0,
            facets: {
              categories: {},
            },
            exhaustiveFacetsCount: true,
            exhaustiveNbHits: true,
            query: "",
            params: "facets=%5B%22categories%22%5D&facetFilters=%5B%22platform%3ANintendo+Switch%22%5D&hitsPerPage=0",
            processingTimeMS: 1,
          });

        const instance = getDumperWithIndex({
          search: searchStub,
        });

        assert.deepEqual(await instance.searchAll(), { games: [] });

        expect(switchRequest.calledOnce).to.be.true;

        expect(fallbackRequest.callCount).to.be.eq(0);
      });

      it("should query 3ds when platform is 3ds", async () => {
        const searchStub = sinon.stub();

        const switchRequest = searchStub
          .withArgs("", { facets: ["categories"], facetFilters: ["platform:Nintendo Switch"], hitsPerPage: 0 })
          .resolves({
            hits: [],
            nbHits: 3,
            page: 0,
            nbPages: 0,
            hitsPerPage: 0,
            facets: {
              categories: {},
            },
            exhaustiveFacetsCount: true,
            exhaustiveNbHits: true,
            query: "",
            params: "facets=%5B%22categories%22%5D&facetFilters=%5B%22platform%3ANintendo+Switch%22%5D&hitsPerPage=0",
            processingTimeMS: 1,
          });

        const n3dsRequest = searchStub
          .withArgs("", { facets: ["categories"], facetFilters: ["platform:Nintendo 3DS"], hitsPerPage: 0 })
          .resolves({
            hits: [],
            nbHits: 3,
            page: 0,
            nbPages: 0,
            hitsPerPage: 0,
            facets: {
              categories: {},
            },
            exhaustiveFacetsCount: true,
            exhaustiveNbHits: true,
            query: "",
            params: "facets=%5B%22categories%22%5D&facetFilters=%5B%22platform%3ANintendo+Switch%22%5D&hitsPerPage=0",
            processingTimeMS: 1,
          });

        const instance = getDumperWithIndex(
          {
            search: searchStub,
          },
          { platform: NintendoOfAmericaPlatforms.NINTENDO_3DS },
        );

        assert.deepEqual(await instance.searchAll(), { games: [] });

        expect(switchRequest.callCount).to.be.eq(0);

        expect(n3dsRequest.callCount).to.be.eq(1);
      });

      describe("when algolia game list is empty", () => {
        it("should return empty game list  result ", async () => {
          const index = {
            search: sinon.stub().resolves({
              result: {
                facets: [],
              },
            } as any),
          };

          const instance = getDumperWithIndex(index);

          assert.deepEqual(await instance.searchAll(), { games: [] });
        });
      });

      describe("when algolia has games", () => {
        it("should fetch all games", async () => {
          sinon.restore();

          const searchStub = sinon.stub();

          searchStub
            .withArgs("", { facets: ["categories"], facetFilters: ["platform:Nintendo Switch"], hitsPerPage: 0 })
            .resolves({
              hits: [],
              nbHits: 3,
              page: 0,
              nbPages: 0,
              hitsPerPage: 0,
              facets: {
                categories: {
                  "Shitty-Games": 1,
                  Adventure: 2,
                },
              },
              exhaustiveFacetsCount: true,
              exhaustiveNbHits: true,
              query: "",
              params: "facets=%5B%22categories%22%5D&facetFilters=%5B%22platform%3ANintendo+Switch%22%5D&hitsPerPage=0",
              processingTimeMS: 1,
            });

          searchStub
            .withArgs("", { facets: ["priceRange"], facetFilters: ["platform:Nintendo Switch"], hitsPerPage: 0 })
            .resolves({
              hits: [],
              nbHits: 3,
              page: 0,
              nbPages: 0,
              hitsPerPage: 0,
              facets: {
                priceRange: {
                  "$5 - $9.99": 1,
                  "$10 - $19.99": 2,
                },
              },
              exhaustiveFacetsCount: true,
              exhaustiveNbHits: true,
              query: "",
              params: "facets=%5B%22priceRange%22%5D&facetFilters=%5B%22platform%3ANintendo+Switch%22%5D&hitsPerPage=0",
              processingTimeMS: 1,
            });

          searchStub
            .withArgs("", {
              length: 1000,
              facetFilters: ["platform:Nintendo Switch", "categories:Shitty-Games"],
              offset: 0,
            })
            .resolves({
              hits: [makeGame(["Shitty-Games"])],
              nbHits: 1,
              offset: 0,
              length: 1000,
              exhaustiveNbHits: true,
              query: "",
              params:
                "length=1000&facetFilters=%5B%22platform%3ANintendo+Switch%22%2C%22categories%3AFitness%22%5D&offset=0",
              processingTimeMS: 1,
            });

          searchStub
            .withArgs("", {
              length: 1000,
              facetFilters: ["platform:Nintendo Switch", "categories:Adventure"],
              offset: 0,
            })
            .resolves({
              hits: [makeGame(["Adventure"]), makeGame(["Adventure"])],
              nbHits: 2,
              offset: 0,
              length: 1000,
              exhaustiveNbHits: true,
              query: "",
              params:
                "length=1000&facetFilters=%5B%22platform%3ANintendo+Switch%22%2C%22categories%3AFitness%22%5D&offset=0",
              processingTimeMS: 1,
            });

          const instance = getDumperWithIndex({
            search: searchStub,
          });

          expect((await instance.searchAll()).games.length).to.be.eq(3);
        });

        it("should return non duplicates", async () => {
          const searchStub = sinon.stub();

          searchStub
            .withArgs("", { facets: ["categories"], facetFilters: ["platform:Nintendo Switch"], hitsPerPage: 0 })
            .resolves({
              hits: [],
              nbHits: 3,
              page: 0,
              nbPages: 0,
              hitsPerPage: 0,
              facets: {
                categories: {
                  "Shitty-Games": 1,
                  Adventure: 2,
                },
              },
              exhaustiveFacetsCount: true,
              exhaustiveNbHits: true,
              query: "",
              params: "facets=%5B%22categories%22%5D&facetFilters=%5B%22platform%3ANintendo+Switch%22%5D&hitsPerPage=0",
              processingTimeMS: 1,
            });

          searchStub
            .withArgs("", { facets: ["priceRange"], facetFilters: ["platform:Nintendo Switch"], hitsPerPage: 0 })
            .resolves({
              hits: [],
              nbHits: 3,
              page: 0,
              nbPages: 0,
              hitsPerPage: 0,
              facets: {
                priceRange: {
                  "$5 - $9.99": 1,
                  "$10 - $19.99": 2,
                },
              },
              exhaustiveFacetsCount: true,
              exhaustiveNbHits: true,
              query: "",
              params: "facets=%5B%22priceRange%22%5D&facetFilters=%5B%22platform%3ANintendo+Switch%22%5D&hitsPerPage=0",
              processingTimeMS: 1,
            });

          searchStub
            .withArgs("", {
              length: 1000,
              facetFilters: ["platform:Nintendo Switch", "categories:Shitty-Games"],
              offset: 0,
            })
            .resolves({
              hits: [makeGame(["Shitty-Games"])],
              nbHits: 1,
              offset: 0,
              length: 1000,
              exhaustiveNbHits: true,
              query: "",
              params:
                "length=1000&facetFilters=%5B%22platform%3ANintendo+Switch%22%2C%22categories%3AFitness%22%5D&offset=0",
              processingTimeMS: 1,
            });

          const sameUUID = uuidv4();

          searchStub
            .withArgs("", {
              length: 1000,
              facetFilters: ["platform:Nintendo Switch", "categories:Adventure"],
              offset: 0,
            })
            .resolves({
              hits: [makeGame(["Adventure"], { objectID: sameUUID }), makeGame(["Adventure"], { objectID: sameUUID })],
              nbHits: 2,
              offset: 0,
              length: 1000,
              exhaustiveNbHits: true,
              query: "",
              params:
                "length=1000&facetFilters=%5B%22platform%3ANintendo+Switch%22%2C%22categories%3AFitness%22%5D&offset=0",
              processingTimeMS: 1,
            });

          const instance = getDumperWithIndex({
            search: searchStub,
          });

          const result = await instance.searchAll();

          expect(result.games.length).to.be.eq(2);
        });
      });

      describe("when games in a single category exceeds request limit", () => {
        it("should make requests based on prices ranges", async () => {
          const searchStub = sinon.stub();

          searchStub
            .withArgs("", { facets: ["categories"], facetFilters: ["platform:Nintendo Switch"], hitsPerPage: 0 })
            .resolves({
              hits: [],
              nbHits: 2,
              page: 0,
              nbPages: 0,
              hitsPerPage: 0,
              facets: {
                categories: {
                  Adventure: 2,
                },
              },
              exhaustiveFacetsCount: true,
              exhaustiveNbHits: true,
              query: "",
              params: "facets=%5B%22categories%22%5D&facetFilters=%5B%22platform%3ANintendo+Switch%22%5D&hitsPerPage=0",
              processingTimeMS: 1,
            });

          const princeRangeRequest = searchStub
            .withArgs("", { facets: ["priceRange"], facetFilters: ["platform:Nintendo Switch"], hitsPerPage: 0 })
            .resolves({
              hits: [],
              nbHits: 2,
              page: 0,
              nbPages: 0,
              hitsPerPage: 0,
              facets: {
                priceRange: {
                  "$5 - $9.99": 1,
                  "$10 - $19.99": 1,
                },
              },
              exhaustiveFacetsCount: true,
              exhaustiveNbHits: true,
              query: "",
              params: "facets=%5B%22priceRange%22%5D&facetFilters=%5B%22platform%3ANintendo+Switch%22%5D&hitsPerPage=0",
              processingTimeMS: 1,
            });

          const request1 = searchStub
            .withArgs("", {
              length: 1,
              filters: `priceRange:"$5 - $9.99"`,
              facetFilters: ["platform:Nintendo Switch", "categories:Adventure"],
              offset: 0,
            })
            .resolves({
              hits: [makeGame(["Adventure"])],
              nbHits: 1,
              offset: 0,
              length: 1000,
              exhaustiveNbHits: true,
              query: "",
              params:
                "length=1000&facetFilters=%5B%22platform%3ANintendo+Switch%22%2C%22categories%3AFitness%22%5D&offset=0",
              processingTimeMS: 1,
            });

          const request2 = searchStub
            .withArgs("", {
              length: 1,
              filters: `priceRange:"$10 - $19.99"`,
              facetFilters: ["platform:Nintendo Switch", "categories:Adventure"],
              offset: 0,
            })
            .resolves({
              hits: [makeGame(["Adventure"])],
              nbHits: 1,
              offset: 0,
              length: 1000,
              exhaustiveNbHits: true,
              query: "",
              params:
                "length=1000&facetFilters=%5B%22platform%3ANintendo+Switch%22%2C%22categories%3AFitness%22%5D&offset=0",
              processingTimeMS: 1,
            });

          const request3 = searchStub
            .withArgs("", {
              length: 1,
              filters: `NOT priceRange:"$5 - $9.99" AND NOT priceRange:"$10 - $19.99"`,
              facetFilters: ["platform:Nintendo Switch", "categories:Adventure"],
              offset: 0,
            })
            .resolves({
              hits: [],
              nbHits: 0,
              offset: 0,
              length: 1000,
              exhaustiveNbHits: true,
              query: "",
              params:
                "length=1000&facetFilters=%5B%22platform%3ANintendo+Switch%22%2C%22categories%3AFitness%22%5D&offset=0",
              processingTimeMS: 1,
            });

          const instance = getDumperWithIndex(
            {
              search: searchStub,
            },
            { maxRequestLength: 1 },
          );

          const result = await instance.searchAll();

          expect(result.games.length).to.be.eq(2);

          expect(request1.calledOnce).to.be.true;
          expect(request2.calledOnce).to.be.true;
          expect(request3.calledOnce).to.be.true;
          expect(princeRangeRequest.callCount).to.eq(1);
        });
      });

      describe("when games in a category differ from aggregation search", () => {
        it("should throw", async () => {
          const searchStub = sinon.stub();

          searchStub
            .withArgs("", { facets: ["categories"], facetFilters: ["platform:Nintendo Switch"], hitsPerPage: 0 })
            .resolves({
              hits: [],
              nbHits: 2,
              page: 0,
              nbPages: 0,
              hitsPerPage: 0,
              facets: {
                categories: {
                  Adventure: 2,
                },
              },
              exhaustiveFacetsCount: true,
              exhaustiveNbHits: true,
              query: "",
              params: "facets=%5B%22categories%22%5D&facetFilters=%5B%22platform%3ANintendo+Switch%22%5D&hitsPerPage=0",
              processingTimeMS: 1,
            });

          searchStub
            .withArgs("", { facets: ["priceRange"], facetFilters: ["platform:Nintendo Switch"], hitsPerPage: 0 })
            .resolves({
              hits: [],
              nbHits: 2,
              page: 0,
              nbPages: 0,
              hitsPerPage: 0,
              facets: {
                priceRange: {
                  "$5 - $9.99": 1,
                  "$10 - $19.99": 1,
                },
              },
              exhaustiveFacetsCount: true,
              exhaustiveNbHits: true,
              query: "",
              params: "facets=%5B%22priceRange%22%5D&facetFilters=%5B%22platform%3ANintendo+Switch%22%5D&hitsPerPage=0",
              processingTimeMS: 1,
            });

          searchStub
            .withArgs("", {
              length: 200,
              facetFilters: ["platform:Nintendo Switch", "categories:Adventure"],
              offset: 0,
            })
            .resolves({
              hits: [makeGame(["Adventure"])],
              nbHits: 1,
              offset: 0,
              length: 1000,
              exhaustiveNbHits: true,
              query: "",
              params:
                "length=1000&facetFilters=%5B%22platform%3ANintendo+Switch%22%2C%22categories%3AFitness%22%5D&offset=0",
              processingTimeMS: 1,
            });

          const instance = getDumperWithIndex(
            {
              search: searchStub,
            },
            { maxRequestLength: 200 },
          );

          return instance.searchAll().should.be.rejectedWith(/Search for category/);
        });
      });
    });
  });
}

testNorthAmericaDumper(false);
testNorthAmericaDumper(true);
