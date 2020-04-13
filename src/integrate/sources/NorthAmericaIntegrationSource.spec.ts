/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { expect } from "chai";
import { describe, it, afterEach } from "mocha";
import sinon from "sinon";
import { NorthAmericaIntegrationSource } from "./NorthAmericaIntegrationSource";
import { IntegrationGame } from "../IntegrationSource";
import { NorthAmericaDumper } from "../../dumpers/northamerica/NorthAmericaDumper";
import { NorthAmericaDumperFactory } from "../../dumpers/northamerica/NorthAmericaDumperFactory";
import { NorthAmericaRegions } from "../../dumpers/northamerica/NorthAmericaRegions";

describe("NorthAmericaIntegrationSource", () => {
  afterEach(() => sinon.restore());

  it("should return game", async () => {
    const dumper: NorthAmericaDumper = new NorthAmericaDumperFactory({
      region: NorthAmericaRegions.UNITED_STATES,
    }).getInstance();

    sinon.stub(dumper, "searchAll").resolves({
      games: [
        {
          type: "game",
          locale: "en_US",
          url: "/games/detail/animal-crossing-new-horizons-switch",
          title: "Animal Crossing: New Horizons",
          description:
            "Escape to a deserted island and create your own paradise as you explore, create, and customize in the Animal Crossing: New Horizons game. Your island getaway has a wealth of natural resources that can be used to craft everything from tools to creature comforts. You can hunt down insects at the crack of dawn, decorate your paradise throughout the day, or enjoy sunset on the beach while fishing in the ocean. The time of day and season match real life, so each day on your island is a chance to check in and find new surprises all year round.\n\nShow off your island utopia to family and friends—or pack your bags and visit theirs. Whether playing online* or with others beside you**, island living is even better when you can share it. Even without hopping on a flight, you’ll meet a cast of charming animal residents bursting with personality. Friendly faces like Tom Nook and Isabelle will lend their services and happily help you grow your budding community. Escape to your island getaway—however, whenever, and wherever you want.\n\n• Build your community from scratch on a deserted island brimming with possibility\n• Create your personal getaway and customize your character, home, decorations, and even the landscape itself\n• Collect materials to construct everything from furniture to tools! Then, use what you create to give your island a personal touch\n• Watch as the time of day and seasons match real life—even your hemisphere! Each day holds potential for surprises and discoveries\n• Get to know the island residents, garden, fish, decorate, hunt for fossils, and more!\n• Show off your paradise – play on the same system with a total of 4 people**, or play together online* or over local wireless** for fun with up to 8 players",
          lastModified: 1585872691668,
          nsuid: "70010000027619",
          slug: "animal-crossing-new-horizons-switch",
          boxArt: "/content/ dam/noa/en_US/games/switch/a/animal-crossing-new-horizons-switch/Switch_ACNH_box.png",
          gallery:
            "/content/dam/noa/en_US/games/switch/a/animal-crossing-new-horizons-switch/screenshot-gallery/animal-crossing-new-horizons-switch-screenshot01.jpg",
          platform: "Nintendo Switch",
          releaseDateMask: "2020-03-20T00:00:00.000-07:00",
          characters: ["Animal Crossing"],
          categories: ["Simulation"],
          msrp: 59.99,
          esrb: "Everyone",
          esrbDescriptors: ["Comic Mischief", "Users Interact", "In-Game Purchases"],
          virtualConsole: "na",
          generalFilters: ["Nintendo Switch Game Voucher", "Online Play via Nintendo Switch Online"],
          filterShops: ["At retail"],
          filterPlayers: ["4+", "3+", "2+", "1+"],
          publishers: ["Nintendo"],
          developers: ["Nintendo"],
          players: "up to 8 players",
          featured: true,
          freeToStart: false,
          priceRange: "$40+",
          salePrice: null,
          availability: ["Available now"],
          objectID: "d5414092-e1f0-31ee-80b9-0a2a13ff3a4e",
          _distinctSeqID: 0,
        },
      ],
    });

    const instance = NorthAmericaIntegrationSource(dumper);
    const games = (await instance.next()).value! as IntegrationGame[];
    expect(games.length).to.be.deep.eq(1);
    const game = games.pop();
    expect(game?.nsuid).to.be.eq(70010000027619);
    expect(game?.slug).to.be.eq("animal-crossing-new-horizons-switch");
  });

  it("should skip game with invalid nsuid", async () => {
    const dumper: NorthAmericaDumper = new NorthAmericaDumperFactory({
      region: NorthAmericaRegions.UNITED_STATES,
    }).getInstance();

    sinon.stub(dumper, "searchAll").resolves({
      games: [
        {
          type: "game",
          locale: "en_US",
          url: "/games/detail/animal-crossing-new-horizons-switch",
          title: "Animal Crossing: New Horizons",
          description:
            "Escape to a deserted island and create your own paradise as you explore, create, and customize in the Animal Crossing: New Horizons game. Your island getaway has a wealth of natural resources that can be used to craft everything from tools to creature comforts. You can hunt down insects at the crack of dawn, decorate your paradise throughout the day, or enjoy sunset on the beach while fishing in the ocean. The time of day and season match real life, so each day on your island is a chance to check in and find new surprises all year round.\n\nShow off your island utopia to family and friends—or pack your bags and visit theirs. Whether playing online* or with others beside you**, island living is even better when you can share it. Even without hopping on a flight, you’ll meet a cast of charming animal residents bursting with personality. Friendly faces like Tom Nook and Isabelle will lend their services and happily help you grow your budding community. Escape to your island getaway—however, whenever, and wherever you want.\n\n• Build your community from scratch on a deserted island brimming with possibility\n• Create your personal getaway and customize your character, home, decorations, and even the landscape itself\n• Collect materials to construct everything from furniture to tools! Then, use what you create to give your island a personal touch\n• Watch as the time of day and seasons match real life—even your hemisphere! Each day holds potential for surprises and discoveries\n• Get to know the island residents, garden, fish, decorate, hunt for fossils, and more!\n• Show off your paradise – play on the same system with a total of 4 people**, or play together online* or over local wireless** for fun with up to 8 players",
          lastModified: 1585872691668,
          nsuid: "dkb1bl2",
          slug: "animal-crossing-new-horizons-switch",
          boxArt: "/content/ dam/noa/en_US/games/switch/a/animal-crossing-new-horizons-switch/Switch_ACNH_box.png",
          gallery:
            "/content/dam/noa/en_US/games/switch/a/animal-crossing-new-horizons-switch/screenshot-gallery/animal-crossing-new-horizons-switch-screenshot01.jpg",
          platform: "Nintendo Switch",
          releaseDateMask: "2020-03-20T00:00:00.000-07:00",
          characters: ["Animal Crossing"],
          categories: ["Simulation"],
          msrp: 59.99,
          esrb: "Everyone",
          esrbDescriptors: ["Comic Mischief", "Users Interact", "In-Game Purchases"],
          virtualConsole: "na",
          generalFilters: ["Nintendo Switch Game Voucher", "Online Play via Nintendo Switch Online"],
          filterShops: ["At retail"],
          filterPlayers: ["4+", "3+", "2+", "1+"],
          publishers: ["Nintendo"],
          developers: ["Nintendo"],
          players: "up to 8 players",
          featured: true,
          freeToStart: false,
          priceRange: "$40+",
          salePrice: null,
          availability: ["Available now"],
          objectID: "d5414092-e1f0-31ee-80b9-0a2a13ff3a4e",
          _distinctSeqID: 0,
        },
      ],
    });

    const instance = NorthAmericaIntegrationSource(dumper);
    const games = (await instance.next()).value! as IntegrationGame[];
    expect(games.length).to.be.deep.eq(0);
  });

  it("should skip game with invalid slug", async () => {
    const dumper: NorthAmericaDumper = new NorthAmericaDumperFactory({
      region: NorthAmericaRegions.UNITED_STATES,
    }).getInstance();

    sinon.stub(dumper, "searchAll").resolves({
      games: [
        {
          type: "game",
          locale: "en_US",
          url: "/games/detail/animal-crossing-new-horizons-switch",
          title: "Animal Crossing: New Horizons",
          description:
            "Escape to a deserted island and create your own paradise as you explore, create, and customize in the Animal Crossing: New Horizons game. Your island getaway has a wealth of natural resources that can be used to craft everything from tools to creature comforts. You can hunt down insects at the crack of dawn, decorate your paradise throughout the day, or enjoy sunset on the beach while fishing in the ocean. The time of day and season match real life, so each day on your island is a chance to check in and find new surprises all year round.\n\nShow off your island utopia to family and friends—or pack your bags and visit theirs. Whether playing online* or with others beside you**, island living is even better when you can share it. Even without hopping on a flight, you’ll meet a cast of charming animal residents bursting with personality. Friendly faces like Tom Nook and Isabelle will lend their services and happily help you grow your budding community. Escape to your island getaway—however, whenever, and wherever you want.\n\n• Build your community from scratch on a deserted island brimming with possibility\n• Create your personal getaway and customize your character, home, decorations, and even the landscape itself\n• Collect materials to construct everything from furniture to tools! Then, use what you create to give your island a personal touch\n• Watch as the time of day and seasons match real life—even your hemisphere! Each day holds potential for surprises and discoveries\n• Get to know the island residents, garden, fish, decorate, hunt for fossils, and more!\n• Show off your paradise – play on the same system with a total of 4 people**, or play together online* or over local wireless** for fun with up to 8 players",
          lastModified: 1585872691668,
          nsuid: "dkb1bl2",
          slug: "",
          boxArt: "/content/ dam/noa/en_US/games/switch/a/animal-crossing-new-horizons-switch/Switch_ACNH_box.png",
          gallery:
            "/content/dam/noa/en_US/games/switch/a/animal-crossing-new-horizons-switch/screenshot-gallery/animal-crossing-new-horizons-switch-screenshot01.jpg",
          platform: "Nintendo Switch",
          releaseDateMask: "2020-03-20T00:00:00.000-07:00",
          characters: ["Animal Crossing"],
          categories: ["Simulation"],
          msrp: 59.99,
          esrb: "Everyone",
          esrbDescriptors: ["Comic Mischief", "Users Interact", "In-Game Purchases"],
          virtualConsole: "na",
          generalFilters: ["Nintendo Switch Game Voucher", "Online Play via Nintendo Switch Online"],
          filterShops: ["At retail"],
          filterPlayers: ["4+", "3+", "2+", "1+"],
          publishers: ["Nintendo"],
          developers: ["Nintendo"],
          players: "up to 8 players",
          featured: true,
          freeToStart: false,
          priceRange: "$40+",
          salePrice: null,
          availability: ["Available now"],
          objectID: "d5414092-e1f0-31ee-80b9-0a2a13ff3a4e",
          _distinctSeqID: 0,
        },
      ],
    });

    const instance = NorthAmericaIntegrationSource(dumper);
    const games = (await instance.next()).value! as IntegrationGame[];
    expect(games.length).to.be.deep.eq(0);
  });
});
