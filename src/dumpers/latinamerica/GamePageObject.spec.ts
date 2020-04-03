import { expect } from "chai";
import { describe, it, afterEach, beforeEach } from "mocha";
import sinon from "sinon";
import fs from "fs";
import { GamePageObject } from "./GamePageObject";

describe("GamePageObject", () => {
  let page = "";

  afterEach(() => sinon.restore());

  beforeEach(async () =>
    fs.promises.readFile("dumps/latin-america-brazil-1-2-switch.html", "utf8").then((pageContent) => {
      page = pageContent;
    }),
  );

  it("GamePageObject should be created successfully", () => {
    // eslint-disable-next-line no-new
    const instance = new GamePageObject(page);
    expect(instance).to.be.instanceOf(GamePageObject);
  });

  describe("getGame", () => {
    it("should return game information", () => {
      const game = new GamePageObject(page).getGame();

      expect(game).to.be.deep.eq({
        title: "1-2-Switch",
        publisher: "Nintendo",
        price: 208.99,
        priceType: "finalPrice",
        description: [
          "Uma festa cara a cara sem igual!",
          "Organize uma festa de última hora em qualquer lugar, com este novo estilo de jogar em que os jogadores encaram uns ao outros em vez de olharem para a tela! Leve a ação e a diversão para o mundo real enquanto vocês se enfrentam em duelos do Velho Oeste, competições de tirar leite de vaca, imitação de danças e mais. Cada jogo usa as vantagens das características do controle Joy-Con do console Nintendo Switch de maneira diferente. Enquanto a ação não se desenrola na tela, o público assiste aos jogadores, não à tela. Com isso, é tão divertido assistir ao jogo quanto jogá-lo! É a animação garantida em qualquer festa!",
        ],
        platform: "Nintendo Switch",
        genres: ["Ação", "Multijogador", "Outros", "Grupo"],
        releaseDate: new Date(Date.UTC(2017, 3 - 1, 3)),
        playerCount: {
          type: "upTo",
          count: 2,
        },
        languages: ["en_US", "fr_CA", "es_LA"],
        requiredSpaceInGB: 1.3,
        cloudSave: false,
        gameModes: ["TV", "TABLETOP"],
      });
    });
  });
});
