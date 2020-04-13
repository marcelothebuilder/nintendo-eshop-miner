/* eslint-disable func-style */
/* eslint-disable no-restricted-syntax */
import { expect, assert } from "chai";
import { describe, it, afterEach } from "mocha";
import sinon from "sinon";
import humanReadableRandomString from "human-readable-random-string";
import { IntegrationGame, IntegrationSource } from "./IntegrationSource";
import { Game, Region } from "../data/mongo/Game";
import { AdditionalIntegration } from "./AdditionalIntegration";

function getGame(): IntegrationGame {
  return {
    imageUrl: humanReadableRandomString(10),
    slug: humanReadableRandomString(10),
    categories: [humanReadableRandomString(10), humanReadableRandomString(8)],
    location: humanReadableRandomString(2).toUpperCase(),
    nsuid: Math.floor(Number.MAX_SAFE_INTEGER * Math.random()),
    publishers: [humanReadableRandomString(5)],
    releaseDate: new Date(),
    description: humanReadableRandomString(100),
    remoteLastModified: new Date(),
    sortingName: humanReadableRandomString(12),
    title: humanReadableRandomString(12),
    region: Region.Europe,
    uniqueIds: [],
  };
}

async function* getGameStreamFromArray(streamArray: IntegrationGame[][]): IntegrationSource {
  for (let index = 0; index < streamArray.length; index += 1) {
    const batch = streamArray[index];
    yield Promise.resolve(batch);
  }
}

describe("AdditionalIntegration", () => {
  afterEach(() => sinon.restore());

  it("should request from one and save to local if slug is not present yet", async () => {
    const game1 = getGame();
    const source = getGameStreamFromArray([[game1]]);
    const i = new AdditionalIntegration(source);
    sinon.stub(Game, "findByUniqueIds").resolves(null);
    const saveDocumentStub = sinon.stub(Game, "saveDocument").resolves({} as any);
    await i.integrate();
    const savedDoc = saveDocumentStub.firstCall.args.pop();
    expect(savedDoc.nsuids.pop()).to.be.deep.eq({ nsuid: game1.nsuid, region: game1.region });
  });

  it("should request and update categories", async () => {
    const existingGamePrototype = getGame();

    const game1 = {
      ...existingGamePrototype,
      categories: ["Cat2"],
    };

    const saveSpy = sinon.spy();

    const existingGame = {
      nsuids: [{ region: Region.Europe, nsuid: 131313 }],
      categories: ["Cat1"],
      save: saveSpy,
    };

    const source = getGameStreamFromArray([[game1]]);
    const i = new AdditionalIntegration(source);
    sinon.stub(Game, "findByUniqueIds").resolves(existingGame as any);
    await i.integrate();

    expect(saveSpy.callCount).to.eq(1);
    assert.sameMembers(existingGame.categories, ["Cat1", "Cat2"]);
  });

  it("should request and update nsuids", async () => {
    const game1 = getGame();

    const saveSpy = sinon.spy();

    const existingGame = {
      nsuids: [{ region: Region.America, nsuid: 131313 }],
      save: saveSpy,
    };

    const source = getGameStreamFromArray([[game1]]);
    const i = new AdditionalIntegration(source);
    sinon.stub(Game, "findByUniqueIds").resolves(existingGame as any);
    await i.integrate();

    expect(saveSpy.callCount).to.eq(1);
    assert.sameDeepMembers(existingGame.nsuids, [
      { region: Region.America, nsuid: 131313 },
      { region: game1.region, nsuid: game1.nsuid },
    ]);
  });

  it("should request and update titles", async () => {
    const game1 = getGame();

    const saveSpy = sinon.spy();

    const existingGame = {
      nsuids: [{ region: Region.Europe, nsuid: 131313 }],
      titles: [{ location: "fr", content: "The Legendi of zeldi" }],
      save: saveSpy,
    };

    const source = getGameStreamFromArray([[game1]]);
    const i = new AdditionalIntegration(source);
    sinon.stub(Game, "findByUniqueIds").resolves(existingGame as any);
    await i.integrate();

    expect(saveSpy.callCount).to.eq(1);
    assert.sameDeepMembers(existingGame.titles, [
      { location: "fr", content: "The Legendi of zeldi" },
      { location: game1.location, content: game1.title },
    ]);
  });

  it("should update descriptions", async () => {
    const game1 = getGame();

    const saveSpy = sinon.spy();

    const existingGame = {
      nsuids: [{ region: Region.Europe, nsuid: 131313 }],
      description: [{ location: "fr", content: "The Legendi of zeldi" }],
      save: saveSpy,
    };

    const source = getGameStreamFromArray([[game1]]);
    const i = new AdditionalIntegration(source);
    sinon.stub(Game, "findByUniqueIds").resolves(existingGame as any);
    await i.integrate();

    expect(saveSpy.callCount).to.eq(1);
    assert.sameDeepMembers(existingGame.description, [
      { location: "fr", content: "The Legendi of zeldi" },
      { location: game1.location, content: game1.description },
    ]);
  });

  it("should add releaseDates", async () => {
    const game1 = getGame();

    const saveSpy = sinon.spy();

    const existingGame = {
      nsuids: [{ region: Region.Europe, nsuid: 131313 }],
      releaseDates: [{ location: "fr", date: new Date(Date.UTC(2020, 1, 1)) }],
      save: saveSpy,
    };

    const source = getGameStreamFromArray([[game1]]);
    const i = new AdditionalIntegration(source);
    sinon.stub(Game, "findByUniqueIds").resolves(existingGame as any);
    await i.integrate();

    expect(saveSpy.callCount).to.eq(1);
    assert.sameDeepMembers(existingGame.releaseDates, [
      { location: "fr", date: new Date(Date.UTC(2020, 1, 1)) },
      { location: game1.location, date: game1.releaseDate },
    ]);
  });

  it("should update releaseDates", async () => {
    const game1 = getGame();

    const saveSpy = sinon.spy();

    const existingGame = {
      nsuids: [{ region: Region.Europe, nsuid: 131313 }],
      releaseDates: [{ location: game1.location, date: new Date(Date.UTC(2020, 1, 1)) }],
      save: saveSpy,
    };

    const source = getGameStreamFromArray([[game1]]);
    const i = new AdditionalIntegration(source);
    sinon.stub(Game, "findByUniqueIds").resolves(existingGame as any);
    await i.integrate();

    expect(saveSpy.callCount).to.eq(1);
    assert.sameDeepMembers(existingGame.releaseDates, [{ location: game1.location, date: game1.releaseDate }]);
  });
});
