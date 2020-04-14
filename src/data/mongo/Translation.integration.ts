/* eslint-disable no-unused-expressions */
import { describe, afterEach, before, after, beforeEach, it } from "mocha";
import sinon from "sinon";

import { GenericContainer, StartedTestContainer } from "testcontainers";

import { Mongoose } from "mongoose";
import { expect } from "chai";
import { connect } from "./connect";
import { Translation } from "./Translation";

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
    await Translation.createIndexes();
  });

  afterEach(async () => {
    sinon.restore();
    try {
      await Translation.collection.drop();
      // eslint-disable-next-line no-empty
    } catch (e) {}
  });

  it("shall save Translation correctly", async () => {
    await new Translation({
      request: {
        text: "ＮＡＲＵＴＯ－ナルト－ 疾風伝　ナルティメットストーム４ ROAD TO BORUTO",
        options: {
          to: "en",
          from: "auto",
        },
      },
      response: {
        text: "NARUTO Shippuden Ultimate Storm 4 ROAD TO BORUTO",
        from: {
          language: { didYouMean: false, iso: "ja" },
          text: { autoCorrected: false, value: "", didYouMean: false },
        },
        raw: "",
      },
    }).save();
  });

  it("shall save and fetch back correctly", async () => {
    const docOne = await new Translation({
      request: {
        text: "ＮＡＲＵＴＯ－ナルト－ 疾風伝　ナルティメットストーム４ ROAD TO BORUTO",
        options: {
          to: "en",
          from: "auto",
        },
      },
      response: {
        text: "NARUTO Shippuden Ultimate Storm 4 ROAD TO BORUTO",
        from: {
          language: { didYouMean: false, iso: "ja" },
          text: { autoCorrected: false, value: "", didYouMean: false },
        },
        raw: "",
      },
    }).save();

    const docTwo = await Translation.findBy("ＮＡＲＵＴＯ－ナルト－ 疾風伝　ナルティメットストーム４ ROAD TO BORUTO", {
      to: "en",
      from: "auto",
    }).exec();

    expect(docOne.id).to.be.eq(docTwo?.id);
  });
});
