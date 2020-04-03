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
}
