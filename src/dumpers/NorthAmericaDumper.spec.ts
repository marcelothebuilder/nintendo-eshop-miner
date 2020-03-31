/* eslint-disable no-unused-expressions */
import { expect, assert } from "chai";
import { describe, it, afterEach } from "mocha";
import sinon from "sinon";
import { SearchIndex } from "algoliasearch";
import { NorthAmericaDumper } from "./NorthAmericaDumper";

describe("NorthAmericaDumper tests", () => {
  afterEach(() => sinon.restore());

  function getDumperWithIndex(indexStub: Partial<SearchIndex>) {
    return new NorthAmericaDumper({ platform: "", algoliaIndex: indexStub as SearchIndex });
  }

  it("should be created successfully", () => {
    // eslint-disable-next-line no-new
    const instance = getDumperWithIndex({});
    expect(instance).to.be.instanceOf(NorthAmericaDumper);
  });

  describe("searchAll", () => {
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

      it.skip("should call index only once", async () => {
        const fakeSearch = sinon.fake.resolves({
          result: {
            facets: [],
          },
        } as any);

        const instance = getDumperWithIndex({
          search: fakeSearch,
        });

        await instance.searchAll();

        expect(fakeSearch.callCount).to.be.eq(1);
      });
    });
  });
});
