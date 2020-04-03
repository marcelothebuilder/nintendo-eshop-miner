import { expect } from "chai";
import { describe, it, afterEach, beforeEach } from "mocha";
import fs from "fs";
import sinon from "sinon";
import { NintendoStorePageObject } from "./NintendoStorePageObject";

describe("NintendoStorePageObject", () => {
  let brazilianPage = "";
  let argentineanPage = "";

  afterEach(() => sinon.restore());

  beforeEach(async () => {
    await fs.promises.readFile("dumps/latin-america-brazil-store.html", "utf8").then((pageContent) => {
      brazilianPage = pageContent;
    });

    await fs.promises.readFile("dumps/latin-america-argentina-store.html", "utf8").then((pageContent) => {
      argentineanPage = pageContent;
    });
  });

  it("NintendoStorePageObject should be created successfully", () => {
    // eslint-disable-next-line no-new
    const instance = new NintendoStorePageObject("");
    expect(instance).to.be.instanceOf(NintendoStorePageObject);
  });

  describe("getItemCount", () => {
    it("should return games count", () => {
      expect(new NintendoStorePageObject(brazilianPage).getGamesCount()).to.be.eq(103);
    });
  });

  describe("getGames", () => {
    it("should return every game for brazil", () => {
      const games = new NintendoStorePageObject(brazilianPage).getGames();
      const clubhouse = games[1 - 1];
      const pokemonMystery = games[8 - 1];
      const runeFactory = games[10 - 1];
      const dragonQuest = games[13 * 4 - 1]; // row 13
      expect(clubhouse).to.be.deep.eq({
        title: "Clubhouse Games™: 51 Worldwide Classics",
        detailsUrl: "https://store.nintendo.com.br/clubhouse-gamestm-51-worldwide-classics",
        imageUrl:
          "https://store.nintendo.com.br/media/catalog/product/cache/ee0bfdff899e549bedae78026e71571d/1/9/1920x1080_magento_eshop_banner_games_pt.jpg",
        price: 167.19,
        priceType: "finalPrice",
        releaseDate: new Date(Date.UTC(2020, 6 - 1, 5)),
        storeId: 323,
        isPreOrder: true,
        isDemoAvailable: false,
        isDlcAvailable: false,
      });
      expect(pokemonMystery).to.be.deep.eq({
        title: "Pokémon Mystery Dungeon: Rescue Team DX",
        detailsUrl: "https://store.nintendo.com.br/pokemon-mystery-dungeon-rescue-team-dx",
        imageUrl:
          "https://store.nintendo.com.br/media/catalog/product/cache/ee0bfdff899e549bedae78026e71571d/1/9/1920x1080_pg_.jpg",
        price: 250.79,
        priceType: "finalPrice",
        releaseDate: new Date(Date.UTC(2020, 3 - 1, 6)),
        storeId: 296,
        isPreOrder: false,
        isDemoAvailable: true,
        isDlcAvailable: false,
      });

      expect(runeFactory).to.be.deep.eq({
        title: "Rune Factory 4 Special",
        detailsUrl: "https://store.nintendo.com.br/rune-factory-4-special",
        imageUrl:
          "https://store.nintendo.com.br/media/catalog/product/cache/ee0bfdff899e549bedae78026e71571d/r/f/rf4sp_eshop_hero_banner_v1.jpg",
        price: 167.19,
        priceType: "finalPrice",
        releaseDate: new Date(Date.UTC(2020, 2 - 1, 25)),
        storeId: 308,
        isPreOrder: false,
        isDemoAvailable: false,
        isDlcAvailable: true,
      });

      expect(dragonQuest).to.be.deep.eq({
        title: "DRAGON QUEST BUILDERS 2",
        detailsUrl: "https://store.nintendo.com.br/dragon-quest-builders-2",
        imageUrl:
          "https://store.nintendo.com.br/media/catalog/product/cache/ee0bfdff899e549bedae78026e71571d/d/r/dragonquestbuilders2_.jpg",
        price: 250.79,
        priceType: "finalPrice",
        releaseDate: new Date(Date.UTC(2019, 7 - 1, 11)),
        storeId: 170,
        isPreOrder: false,
        isDemoAvailable: true,
        isDlcAvailable: true,
      });
    });

    it("should return every game for argentina", () => {
      const games = new NintendoStorePageObject(argentineanPage).getGames();
      const clubhouse = games[1 - 1];

      expect(clubhouse).to.be.deep.eq({
        title: "Clubhouse Games™: 51 Worldwide Classics",
        detailsUrl: "https://store.nintendo.com.ar/clubhouse-gamestm-51-worldwide-classics",
        imageUrl:
          "https://store.nintendo.com.ar/media/catalog/product/cache/ee0bfdff899e549bedae78026e71571d/1/9/1920x1080_magento_eshop_banner_games_sp.jpg",
        price: 2420,
        priceType: "finalPrice",
        releaseDate: new Date(Date.UTC(2020, 6 - 1, 5)),
        storeId: 323,
        isPreOrder: true,
        isDemoAvailable: false,
        isDlcAvailable: false,
      });
    });
  });
});
