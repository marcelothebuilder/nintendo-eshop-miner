import cheerio from "cheerio";
import { parse as parseDate } from "date-fns";
import { LatinAmericaGameDetail, PlayerCount } from "./LatinAmericaTypes";

export class GamePageObject {
  private page: CheerioStatic;

  constructor(rawHtml: string) {
    this.page = cheerio.load(rawHtml);
  }

  getGame(): LatinAmericaGameDetail {
    const { page } = this;
    const [firstAttributeGroup, secondAttributeGroup] = page(".product-attributes-all-item")
      .toArray()
      .map((g) => cheerio.load(g));

    const [platform, genres, releaseDateString, publisher] = firstAttributeGroup(".product-attribute-val")
      .toArray()
      .map((g) => {
        return g.firstChild.nodeValue;
      });

    const [playerCountString, languagesString, requiredSpaceString, cloudSaveString] = secondAttributeGroup(
      ".product-attribute-val",
    )
      .toArray()
      .map((g) => g.firstChild.nodeValue);

    const priceTag = page("[data-price-amount]");
    const price = parseFloat(priceTag.attr("data-price-amount") || "-1");
    const priceType = priceTag.attr("data-price-type") || "unknown";

    const description = page(".product.attribute.description")
      .find("p")
      .map((i, p) => page(p).text())
      .get();

    return {
      title: page('[data-ui-id="page-title-wrapper"]').text().trim(),
      publisher,
      platform,
      genres: genres.split(", "),
      releaseDate: parseDate(`${releaseDateString}Z`, "dd/LL/yyyyX", new Date()),
      playerCount: GamePageObject.parsePlayerCount(playerCountString),
      languages: GamePageObject.parseLanguages(languagesString),
      requiredSpaceInGB: GamePageObject.parseRequiredSpace(requiredSpaceString),
      cloudSave: GamePageObject.parseCloudSave(cloudSaveString),
      price,
      priceType,
      description,
      gameModes: this.getGameModes(),
    };
  }

  private getGameModes(): string[] {
    const { page } = this;
    const modes = [];
    const icons = page(".product-attribute-supported_play_modes")
      .get()
      .map((n) => n.attribs.src)
      .map((s) => s.substr(0, s.length - 4))
      .map((s) => s.match(/\w+$/)[0]);

    if (icons.includes("icon_tv_on")) modes.push("TV");
    if (icons.includes("icon_tabletop_on")) modes.push("TABLETOP");
    if (icons.includes("icon_portable_on")) modes.push("PORTABLE");

    return modes;
  }

  private static parsePlayerCount(playerCountString: string): PlayerCount {
    const matches = playerCountString.match(/\d+/);
    if (!matches) throw Error("Failure to parse playerCount");
    const count = parseInt(matches[0], 10);

    return {
      count,
      type: GamePageObject.parsePlayerCountType(playerCountString),
    };
  }

  private static parsePlayerCountType(playerCountString: string): string {
    if (/até/.test(playerCountString)) {
      return "upTo";
    }

    return "unknown";
  }

  private static parseLanguages(languagesString: string): string[] {
    return languagesString.split(", ").map(GamePageObject.languageStringToId);
  }

  private static languageStringToId(languageStringToId: string): string {
    const dict: Record<string, string> = {
      "Inglês (Estados Unidos)": "en_US",
      "Francês (Canadá)": "fr_CA",
      "Espanhol (América Latina)": "es_LA",
    };

    const lang = dict[languageStringToId];

    if (!lang) throw Error("Couldn't parse lang id");

    return lang;
  }

  private static parseRequiredSpace(requiredSpaceString: string): number {
    return parseFloat(requiredSpaceString.replace("GB", ""));
  }

  private static parseCloudSave(cloudSaveString: string): boolean {
    const dict: Record<string, boolean> = {
      Incompatível: false,
    };

    if (cloudSaveString in dict) {
      return dict[cloudSaveString];
    }

    throw Error("couldn't parse cloudSaveString");
  }
}
