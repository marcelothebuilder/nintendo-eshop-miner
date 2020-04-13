/* eslint-disable no-unused-expressions */
import { expect } from "chai";
import { describe, it, afterEach, before, after, beforeEach } from "mocha";
import sinon from "sinon";

import { GenericContainer, StartedTestContainer } from "testcontainers";

import { Mongoose } from "mongoose";
import humanReadableRandomString from "human-readable-random-string";
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
      nsuids: [{ nsuid: 21311, region: "America" }],
      name: "Zeldinha",
      slug: "zelda-switch",
      sortingName: "Zeldinha",
      prices: [],
    }).save();

    await Game.saveDocument({
      nsuids: [{ nsuid: 13131, region: "America" }],
      name: "Zeldinha2",
      slug: "zelda2",
      sortingName: "Zeldinha2",
      prices: [],
    });

    const games = await Game.find().lean().exec();

    expect(games.shift()?.nsuids.shift()?.nsuid).to.eq(21311);
    expect(games.shift()?.nsuids.shift()?.nsuid).to.eq(13131);
  });

  it("should retrieve game by nsuid", async () => {
    await new Game({
      nsuids: [{ nsuid: 21311, region: "America" }],
      name: "Zeldinha",
      slug: "zelda-switch",
      sortingName: "Zeldinha",
      prices: [],
    }).save();

    const game = await Game.findByNsuid(21311).lean().exec();

    expect(game?.nsuids.shift()?.nsuid).to.eq(21311);
  });

  it("should return null for non existing", async () => {
    const game = await Game.findBySlug("anyslug").exec();

    expect(game).to.eq(null);
  });

  it("should return false for non existing", async () => {
    const game = await Game.exists({ slug: "anyslug" });

    expect(game).to.eq(false);
  });

  it("should save the creation date", async () => {
    const g = await new Game({
      nsuids: [{ nsuid: 21311, region: "America" }],
      name: "Zeldinha",
      slug: "zelda-switch",
      sortingName: "Zeldinha",
      prices: [],
    }).save();

    expect(g.nsuids.pop()?.nsuid).to.eq(21311);
    expect(g.createdAt).to.not.be.null;
  });

  it("should update the update date when anything is changed", async () => {
    const g = await new Game({
      nsuids: [{ nsuid: 21311, region: "America" }],
      name: "Zeldinha",
      slug: "zelda-switch",
      sortingName: "Zeldinha",
      prices: [],
    }).save();

    const updateDateBefore = g.updatedAt;

    g.name = humanReadableRandomString(30);

    await g.save();

    const updateDateAfter = g.updatedAt;

    expect(updateDateAfter).to.not.be.eq(updateDateBefore);
  });

  it("should not update the creation date when anything is changed", async () => {
    const g = await new Game({
      nsuids: [{ nsuid: 21311, region: "America" }],
      name: "Zeldinha",
      slug: "zelda-switch",
      sortingName: "Zeldinha",
      prices: [],
    }).save();

    const createDateBefore = g.createdAt;

    g.name = humanReadableRandomString(30);

    await g.save();

    const createDateAfter = g.createdAt;

    expect(createDateAfter).to.be.eq(createDateBefore);
  });

  it("should not update the update date when nothing is changed", async () => {
    const g = await new Game({
      nsuids: [{ nsuid: 21311, region: "America" }],
      name: "Zeldinha",
      slug: "zelda-switch",
      sortingName: "Zeldinha",
      prices: [],
    }).save();

    const updateDateBefore = g.updatedAt;

    await g.save();

    const updateDateAfter = g.updatedAt;

    expect(updateDateAfter).to.be.eq(updateDateBefore);
  });

  it("should save game at db with alternative title", async () => {
    await new Game({
      nsuids: [{ nsuid: 21311, region: "America" }],
      name: "Zeldinha",
      slug: "zelda-switch",
      sortingName: "Zeldinha",
      titles: [{ location: "IT", content: "Zeldie" }],
    }).save();

    const games = await Game.find().lean().exec();

    expect(games.shift()?.nsuids.pop()?.nsuid).to.eq(21311);
  });

  it("should not save game at db with alternative title without location", async () => {
    const g = new Game({
      nsuids: [{ nsuid: 21311, region: "America" }],
      name: "Zeldinha",
      slug: "zelda-switch",
      sortingName: "Zeldinha",
      titles: [{ content: "Zeldie" }],
    }).save();

    await expect(g).to.eventually.be.rejected;
  });

  it("should saveAndFind", async () => {
    const g = await new Game({
      nsuids: [{ nsuid: 21311, region: "America" }],
      name: "Zeldinha",
      slug: "zelda-switch",
      sortingName: "Zeldinha",
      prices: [],
    }).saveAndFind();

    expect(g).to.be.instanceOf(Game);
  });

  it("should allow two games with same name", async () => {
    await new Game({
      nsuids: [{ nsuid: 21311, region: "America" }],
      name: "Zeldinha",
      slug: "zelda-switch",
      sortingName: "Zeldinha",
    }).save();

    await new Game({
      nsuids: [{ nsuid: 13131, region: "America" }],
      name: "Zeldinha",
      slug: "zelda-switchx",
      sortingName: "Zeldinha",
    }).save();

    const games = await Game.find().lean().exec();

    expect(games.shift()?.nsuids.pop()?.nsuid).to.eq(21311);
    expect(games.shift()?.nsuids.pop()?.nsuid).to.eq(13131);
  });

  it("should not allow two games with same nsuid", async () => {
    await new Game({
      nsuids: [{ nsuid: 21311, region: "America" }],
      name: "Zeldinha",
      slug: "zelda-switch",
      sortingName: "Zeldinha",
    }).save();

    const saveGameWithSameId = new Game({
      nsuids: [{ nsuid: 21311, region: "America" }],
      name: "Zeldinha2",
      slug: "zelda2",
      sortingName: "Zeldinha2",
    }).save();

    await expect(saveGameWithSameId).to.be.eventually.rejected;
  });

  it("should not allow game with two entries of the same nsuid", async () => {
    const saveGameWithSameId = new Game({
      nsuids: [
        { nsuid: 21311, region: "America" },
        { nsuid: 21311, region: "Europe" },
      ],
      name: "Zeldinha2",
      slug: "zelda2",
      sortingName: "Zeldinha2",
    }).save();

    await expect(saveGameWithSameId).to.be.eventually.rejected;
  });

  it("should not allow game with more than one nsuid for the same region", async () => {
    const saveGameWithSameId = new Game({
      nsuids: [
        { nsuid: 21311, region: "America" },
        { nsuid: 21312, region: "America" },
      ],
      name: "Zeldinha2",
      slug: "zelda2",
      sortingName: "Zeldinha2",
    }).save();

    await expect(saveGameWithSameId).to.be.eventually.rejected;
  });

  it("should not allow game with unknown nsuid region", async () => {
    const saveGameWithSameId = new Game({
      nsuids: [{ nsuid: 21311, region: "Americx" }],
      name: "Zeldinha2",
      slug: "zelda2",
      sortingName: "Zeldinha2",
    }).save();

    await expect(saveGameWithSameId).to.be.eventually.rejected;
  });

  it("should not allow two games with same slug", async () => {
    await new Game({
      nsuids: [{ nsuid: 21311, region: "America" }],
      name: "Zeldinha",
      slug: "zelda-switch",
      sortingName: "Zeldinha",
    }).save();

    const saveGameWithSameSlug = new Game({
      nsuid: 213112,
      name: "Zeldinha2",
      slug: "zelda-switch",
      sortingName: "Zeldinha2",
    }).save();

    await expect(saveGameWithSameSlug).to.be.eventually.rejected;
  });

  it("should save price information", async () => {
    const g = await new Game({
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
          goldPoints: 123,
          discount: 0.5,
          status: "available",
          hasDiscount: true,
        },
        {
          location: "AU",
          currency: "AUD",
          originalPrice: 24,
          price: 2.4,
          discount: 0.9,
          status: "available",
          hasDiscount: true,
        },
      ],
    }).save();

    expect(g.prices.filter((p) => p.currency === "BRL")).to.exist;
    expect(g.prices.filter((p) => p.currency === "AUD")).to.exist;
    expect(g.prices.length).to.eq(2);
  });

  it("should not save incomplete price information", async () => {
    const g = new Game({
      nsuids: [{ nsuid: 21311, region: "America" }],
      name: "Zeldinha",
      slug: "zelda-switch",
      sortingName: "Zeldinha",
      prices: [{}],
    }).save();

    await expect(g).to.eventually.be.rejected;
  });

  it("should save price information without optional fields", async () => {
    const g = await new Game({
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
      ],
    }).save();

    expect(g.prices.filter((p) => p.currency === "BRL")).to.exist;
    expect(g.prices.length).to.eq(1);
  });

  it("should not save price with non-unique location-currency", async () => {
    const g = new Game({
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
    }).save();

    await expect(g).to.be.eventually.rejected;
  });

  it("should not update price with non-unique location-currency", async () => {
    const g = await new Game({
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
      ],
    }).saveAndFind();

    g.prices.push({
      location: "BR",
      currency: "BRL",
      originalPrice: 14 * 2,
      price: 7 * 2,
      discount: 0.5,
      status: "available",
      hasDiscount: true,
    });

    const updatePromise = g.save();

    await expect(updatePromise).to.be.eventually.rejected;
  });

  it("should search for BRL prices lower than specified", async () => {
    await new Game({
      nsuids: [{ nsuid: 999, region: "America" }],
      name: "Zeldinha",
      slug: "zelda-switch3",
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
          location: "AU",
          currency: "AUD",
          originalPrice: 24,
          price: 2.4,
          discount: 0.9,
          status: "available",
          hasDiscount: true,
        },
      ],
    }).save();

    await new Game({
      nsuids: [{ nsuid: 2, region: "America" }],
      name: "Zeldinha2",
      slug: "zelda2",
      sortingName: "Zeldinha2",
      prices: [
        {
          location: "BR",
          currency: "BRL",
          originalPrice: 900,
          price: 450,
          discount: 0.5,
          status: "available",
          hasDiscount: true,
        },
      ],
    }).save();

    await new Game({
      nsuids: [{ nsuid: 3, region: "America" }],
      name: "Zeldinha",
      slug: "zelda-switc1h",
      sortingName: "Zeldinha",
      prices: [
        {
          location: "AU",
          currency: "AUD",
          originalPrice: 1,
          price: 0.5,
          discount: 0.5,
          status: "available",
          hasDiscount: true,
        },
      ],
    }).save();

    const games = await Game.find({
      "prices.currency": "BRL",
      "prices.price": {
        $lt: 8,
      },
    })
      .lean()
      .exec();

    expect(games.length).to.eq(1);
    expect(games.pop()?.nsuids.pop()?.nsuid).to.eq(999);
  });
});
