import { expect } from "chai";
import { describe, it, afterEach, setup, teardown } from "mocha";
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

  setup(async () => {
    container = await getMongoContainer();
    db = await connect({
      user: "root",
      pass: "nintendo",
      authSource: "admin",
      database: "nintendo",
      ipAddress: container.getContainerIpAddress(),
      port: container.getMappedPort(27017),
    });
  });

  teardown(async () => {
    await db?.disconnect();
    await container?.stop();
  });

  afterEach(() => sinon.restore());

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
});
