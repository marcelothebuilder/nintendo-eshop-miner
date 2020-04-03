import cheerio from "cheerio";
import { LatinAmericaGameDetail } from "./LatinAmericaTypes";

export class GamePageObject {
  private page: CheerioStatic;

  constructor(rawHtml: string) {
    this.page = cheerio.load(rawHtml);
  }

  getGame(): LatinAmericaGameDetail {
    const { page } = this;

    const priceTag = page("[data-price-amount]");
    const price = parseFloat(priceTag.attr("data-price-amount") || "-1");
    const priceType = priceTag.attr("data-price-type") || "unknown";

    return {
      title: page('[data-ui-id="page-title-wrapper"]').text().trim(),
      price,
      priceType,
      priceCurrency: page('meta[itemprop="priceCurrency"]').attr("content") || "UNK",
    };
  }

  private static parsePlayerCountType(playerCountString: string): string {
    if (/até/.test(playerCountString)) {
      return "upTo";
    }

    throw Error(`Unknown playerCountType ${playerCountString}`);
  }

  private static languageStringToId(languageStringToId: string): string {
    const dict: Record<string, string> = {
      "Inglês (Estados Unidos)": "en_US",
      "Francês (Canadá)": "fr_CA",
      "Espanhol (América Latina)": "es_LA",
      Japonês: "jp",
      Italiano: "it",
      Alemão: "de",
      Russo: "ru",
      Holandês: "ne",
      Chinês: "cn",
    };

    const lang = dict[languageStringToId];

    if (!lang) throw Error("Couldn't parse lang id");

    return lang;
  }
}
