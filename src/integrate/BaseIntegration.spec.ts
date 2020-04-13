/* eslint-disable func-style */
/* eslint-disable no-restricted-syntax */
import { expect } from "chai";
import { describe, it, afterEach } from "mocha";
import sinon from "sinon";
import humanReadableRandomString from "human-readable-random-string";
import { BaseIntegration } from "./BaseIntegration";
import { IntegrationGame, IntegrationSource } from "./IntegrationSource";
import { Game, Region } from "../data/mongo/Game";

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
  };
}

async function* getGameStreamFromArray(streamArray: IntegrationGame[][]): IntegrationSource {
  for (let index = 0; index < streamArray.length; index += 1) {
    const batch = streamArray[index];
    yield Promise.resolve(batch);
  }
}

describe("BaseIntegration", () => {
  afterEach(() => sinon.restore());

  it("should request from one and save to local", async () => {
    const game1 = getGame();
    const source = getGameStreamFromArray([[game1]]);
    const i = new BaseIntegration(source);
    const ofStub = sinon.stub(Game, "findOneAndUpdate").resolves({} as any);
    await i.integrate();
    const game = ofStub.firstCall.args[1];
    expect(game.nsuids.pop()).to.be.deep.eq({ nsuid: game1.nsuid, region: game1.region });
    expect(game.name).to.be.eq(game1.title);
    expect(game.sortingName).to.be.eq(game1.sortingName);
    expect(game.releaseDates.pop()).to.be.deep.eq({ location: game1.location, date: game1.releaseDate });
    expect(game.remoteLastModified).to.be.eq(game1.remoteLastModified);
  });
});
