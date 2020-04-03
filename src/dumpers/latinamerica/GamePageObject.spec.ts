import { expect } from "chai";
import { describe, it, afterEach, beforeEach } from "mocha";
import sinon from "sinon";
import fs from "fs";
import { GamePageObject } from "./GamePageObject";

describe("GamePageObject", () => {
  let page = "";
  let page2 = "";

  afterEach(() => sinon.restore());

  beforeEach(async () => {
    await fs.promises.readFile("dumps/latin-america-brazil-1-2-switch.html", "utf8").then((pageContent) => {
      page = pageContent;
    });
    await fs.promises
      .readFile("dumps/latin-america-brazil-animal-crossing-new-horizons.html", "utf8")
      .then((pageContent) => {
        page2 = pageContent;
      });
  });

  it("GamePageObject should be created successfully", () => {
    // eslint-disable-next-line no-new
    const instance = new GamePageObject(page);
    expect(instance).to.be.instanceOf(GamePageObject);
  });

  describe("getGame", () => {
    it("should return 1-2-Switch information", () => {
      const game = new GamePageObject(page).getGame();

      expect(game).to.be.deep.eq({
        title: "1-2-Switch",
        price: 208.99,
        priceCurrency: "BRL",
        priceType: "finalPrice",
      });
    });

    it("should return Animal Crossing: New Horizons information", () => {
      const game = new GamePageObject(page2).getGame();

      expect(game).to.be.deep.eq({
        title: "Animal Crossing: New Horizons",
        price: 250.79,
        priceCurrency: "BRL",
        priceType: "finalPrice",
      });
    });
  });
});
