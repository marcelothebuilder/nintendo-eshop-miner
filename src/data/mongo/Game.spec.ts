/* eslint-disable no-unused-expressions */
import { describe, it, afterEach } from "mocha";
import sinon from "sinon";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import humanReadableRandomString from "human-readable-random-string";
import { Game, GameAttributes } from "./Game";
import { Region } from "./Region";

chai.should();
chai.use(chaiAsPromised);

const getGameDocument = (): GameAttributes => {
  return {
    name: "Zeldinha",
    slug: humanReadableRandomString(10),
    sortingName: "Zeldinha",
    categories: [humanReadableRandomString(5)],
    description: [{ location: humanReadableRandomString(2), content: humanReadableRandomString(10) }],
    nsuids: [{ region: Region.America, nsuid: 1231312414 }],
    publishers: [humanReadableRandomString(10)],
    releaseDates: [{ location: humanReadableRandomString(2), date: new Date() }],
    remoteLastModified: new Date(),
    titles: [{ location: humanReadableRandomString(2), content: humanReadableRandomString(50) }],
    uniqueIds: [humanReadableRandomString(50)],
    prices: [],
  };
};

describe("Game", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should be created successfully", () => {
    const instance = new Game();
    expect(instance).to.be.instanceOf(Game);
  });

  it("should error if title is not defined", (done) => {
    const doc = getGameDocument();
    delete doc.name;
    const instance = new Game(doc);

    instance.validate().should.be.rejected.notify(done);
  });

  it("should error if theres no nsuid", (done) => {
    const doc = getGameDocument();
    delete doc.nsuids;
    const instance = new Game(doc);

    instance.validate().should.be.rejected.notify(done);
  });

  it("should error if theres nsuid duplication", (done) => {
    const doc = getGameDocument();
    doc.nsuids = doc.nsuids.concat(doc.nsuids);
    const instance = new Game(doc);

    instance.validate().should.be.rejected.notify(done);
  });

  it("should error if theres more than one usuid for the same region", (done) => {
    const doc = getGameDocument();
    doc.nsuids.push({ region: doc.nsuids[0].region, nsuid: 12311251241 });
    const instance = new Game(doc);

    instance.validate().should.be.rejected.notify(done);
  });

  it("should error if theres an unknown region", (done) => {
    const doc = getGameDocument();
    doc.nsuids.push({ region: "kb23kjblel" as any, nsuid: 12311251241 });
    const instance = new Game(doc);

    instance.validate().should.be.rejected.notify(done);
  });

  it("should not error if all required fields are provided", (done) => {
    const instance = new Game(getGameDocument());

    instance.validate().should.be.fulfilled.notify(done);
  });

  it("should not save price with non-unique location-currency", (done) => {
    const instance = new Game({
      nsuids: [{ nsuid: 21311, region: "America" }],
      name: "Zeldinha",
      slug: "zelda-switch",
      sortingName: "Zeldinha",
      prices: [
        {
          location: "BR",
          currency: "BRL",
          originalPrice: 14,
          price: 7,
          discount: 0.5,
          status: "available",
          hasDiscount: true,
        },
        {
          location: "BR",
          currency: "BRL",
          originalPrice: 24,
          price: 2.4,
          discount: 0.9,
          status: "available",
          hasDiscount: true,
        },
      ],
    });

    instance.validate().should.be.rejected.notify(done);
  });
});
