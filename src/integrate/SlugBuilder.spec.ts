import { expect } from "chai";
import { describe, it, afterEach } from "mocha";
import sinon from "sinon";
import { buildSlug } from "./SlugBuilder";

const slugs = [
  {
    slug: "donkey-kong-country-tropical-freeze-switch",
    title: "Donkey Kong Country: Tropical Freeze",
  },
  {
    slug: "the-legend-of-zelda-breath-of-the-wild-switch",
    title: "The Legend of Zelda: Breath of the Wild",
  },
  {
    slug: "nine-parchments-switch",
    title: "Nine Parchments",
  },
  {
    slug: "super-bomberman-r-switch",
    title: "Super Bomberman R",
  },
  {
    slug: "mario-rabbids-kingdom-battle-switch",
    title: "Mario + Rabbids Kingdom Battle",
  },
  {
    slug: "rocket-league-switch",
    title: "Rocket League",
  },
  {
    slug: "hollow-switch",
    title: "Hollow",
  },
  {
    slug: "arms-switch",
    title: "ARMS",
  },
  {
    slug: "sonic-mania-switch",
    title: "Sonic Mania",
  },
  {
    slug: "crash-bandicoot-n-sane-trilogy-switch",
    title: "Crash Bandicoot N. Sane Trilogy",
  },
  {
    slug: "naruto-shippuden-ultimate-ninja-storm-4-road-to-boruto-switch",
    title: "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4 ROAD TO BORUTO",
  },
  {
    slug: "billion-road-switch",
    title: "Billion Road",
  },
  {
    slug: "naruto-shippuden-ultimate-ninja-storm-4-road-to-boruto-switch",
    title: "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4 ROAD TO BORUTO",
  },
];

describe("SlugBuilder", () => {
  afterEach(() => sinon.restore());

  it("should create zelda slug", () => {
    expect(buildSlug("switch")("The Legend of Zelda: Breath of the Wild")).to.be.eq(
      "the-legend-of-zelda-breath-of-the-wild-switch",
    );
  });

  it("should create links awakening slug", () => {
    expect(buildSlug("switch")("The Legend of Zelda: Link's Awakening")).to.be.eq(
      "the-legend-of-zelda-links-awakening-switch",
    );
  });

  it("should create 3 Little Pigs & Bad Wolf  slug", () => {
    expect(buildSlug("switch")("3 Little Pigs & Bad Wolf")).to.be.eq("3-little-pigs-and-bad-wolf-switch");
  });

  it("should build slugs correctly", () => {
    slugs.forEach((slug) => {
      expect(buildSlug("switch")(slug.title)).to.be.eq(slug.slug);
    });
  });
});
