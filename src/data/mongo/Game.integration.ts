import { expect } from "chai";
import { describe, it, afterEach, before, after, beforeEach } from "mocha";
import sinon from "sinon";

import { GenericContainer, StartedTestContainer } from "testcontainers";

import { Mongoose } from "mongoose";
import { connect } from "./connect";
import { Game } from "./Game";

const getMongoContainer = async (): Promise<StartedTestContainer> =>
  new GenericContainer("mongo", "4.2-bionic")
    .withEnv("MONGO_INITDB_ROOT_USERNAME", "root")
    .withEnv("MONGO_INITDB_ROOT_PASSWORD", "nintendo")
    .withExposedPorts(27017)
    .start();

describe("Game", () => {
  let container: StartedTestContainer;
  let db: Mongoose;

  before(async () => {
    container = await getMongoContainer();
    db = await connect({
      user: "root",
      pass: "nintendo",
      authSource: "admin",
      database: "nintendo",
      ipAddress: container.getContainerIpAddress(),
      port: container.getMappedPort(27017),
    });
    // db.set("debug", true);
  });

  after(async () => {
    await db?.disconnect();
    await container?.stop();
  });

  beforeEach(async () => {
    await Game.createIndexes();
  });

  afterEach(async () => {
    sinon.restore();
    try {
      await Game.collection.drop();
      // eslint-disable-next-line no-empty
    } catch (e) {}
  });

  it("should save game at db", async () => {
    await new Game({
      nsuid: 21311,
      name: "Zeldinha",
    }).save();

    await new Game({
      nsuid: 13131,
      name: "Zeldinha2",
    }).save();

    const games = await Game.find().lean().exec();

    expect(games.shift()?.nsuid).to.eq(21311);
    expect(games.shift()?.nsuid).to.eq(13131);
  });

  it("should allow two games with same name", async () => {
    await new Game({
      nsuid: 21311,
      name: "Zeldinha",
    }).save();

    await new Game({
      nsuid: 13131,
      name: "Zeldinha",
    }).save();

    const games = await Game.find().lean().exec();

    expect(games.shift()?.nsuid).to.eq(21311);
    expect(games.shift()?.nsuid).to.eq(13131);
  });

  it("should not allow two games with same nsuid", async () => {
    await new Game({
      nsuid: 21311,
      name: "Zeldinha",
    }).save();

    const saveGameWithSameId = new Game({
      nsuid: 21311,
      name: "Zeldinha2",
    }).save();

    await expect(saveGameWithSameId).to.be.eventually.rejected;
  });
});
