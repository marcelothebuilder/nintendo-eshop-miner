import { expect } from "chai";
import { describe, it, afterEach } from "mocha";
import sinon from "sinon";
import { SearchIndex } from "algoliasearch";
import { NorthAmericaDumper } from "./NorthAmericaDumper";

describe("NorthAmericaDumper tests", () => {
  afterEach(() => sinon.restore());

  it("NorthAmericaDumper should be created successfully", () => {
    // eslint-disable-next-line no-new
    const indexStub = {} as SearchIndex;
    const instance = new NorthAmericaDumper({ platform: "", algoliaIndex: indexStub });
    expect(instance).to.be.instanceOf(NorthAmericaDumper);
  });
});
