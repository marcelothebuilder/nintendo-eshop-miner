/* eslint-disable no-unused-expressions */
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
      sortingName: "Zeldinha",
      prices: [],
    }).save();

    await new Game({
      nsuid: 13131,
      name: "Zeldinha2",
      sortingName: "Zeldinha2",
      prices: [],
    }).save();

    const games = await Game.find().lean().exec();

    expect(games.shift()?.nsuid).to.eq(21311);
    expect(games.shift()?.nsuid).to.eq(13131);
  });

  it("should save game at db with alternative title", async () => {
    await new Game({
      nsuid: 21311,
      name: "Zeldinha",
      sortingName: "Zeldinha",
      titles: [{ location: "IT", content: "Zeldie" }],
    }).save();

    const games = await Game.find().lean().exec();

    expect(games.shift()?.nsuid).to.eq(21311);
  });

  it("should not save game at db with alternative title without location", async () => {
    const g = new Game({
      nsuid: 21311,
      name: "Zeldinha",
      sortingName: "Zeldinha",
      titles: [{ content: "Zeldie" }],
    }).save();

    await expect(g).to.eventually.be.rejected;
  });

  it("should saveAndFind", async () => {
    const g = await new Game({
      nsuid: 21311,
      name: "Zeldinha",
      sortingName: "Zeldinha",
      prices: [],
    }).saveAndFind();

    expect(g).to.be.instanceOf(Game);
  });

  it("should allow two games with same name", async () => {
    await new Game({
      nsuid: 21311,
      name: "Zeldinha",
      sortingName: "Zeldinha",
    }).save();

    await new Game({
      nsuid: 13131,
      name: "Zeldinha",
      sortingName: "Zeldinha",
    }).save();

    const games = await Game.find().lean().exec();

    expect(games.shift()?.nsuid).to.eq(21311);
    expect(games.shift()?.nsuid).to.eq(13131);
  });

  it("should not allow two games with same nsuid", async () => {
    await new Game({
      nsuid: 21311,
      name: "Zeldinha",
      sortingName: "Zeldinha",
    }).save();

    const saveGameWithSameId = new Game({
      nsuid: 21311,
      name: "Zeldinha2",
      sortingName: "Zeldinha2",
    }).save();

    await expect(saveGameWithSameId).to.be.eventually.rejected;
  });

  it("should save price information", async () => {
    const g = await new Game({
      nsuid: 21311,
      name: "Zeldinha",
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
      nsuid: 21311,
      name: "Zeldinha",
      sortingName: "Zeldinha",
      prices: [{}],
    }).save();

    await expect(g).to.eventually.be.rejected;
  });

  it("should save price information without optional fields", async () => {
    const g = await new Game({
      nsuid: 21311,
      name: "Zeldinha",
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
      nsuid: 21311,
      name: "Zeldinha",
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
      nsuid: 21311,
      name: "Zeldinha",
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
      nsuid: 999,
      name: "Zeldinha",
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
      nsuid: 2,
      name: "Zeldinha2",
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
      nsuid: 3,
      name: "Zeldinha",
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
    expect(games.pop()?.nsuid).to.eq(999);
  });
});
