import cheerio from "cheerio";
import { parse as parseDate } from "date-fns";

import { lazy } from "lazy-arr";
import { LatinAmericaGame } from "./LatinAmericaTypes";

export class NintendoStorePageObject {
  private gamesElements: CheerioElement[] | undefined;

  private page: CheerioStatic;

  constructor(cheerioHtml: CheerioStatic) {
    this.page = cheerioHtml;
  }

  getGames(): LatinAmericaGame[] {
    const elems = this.getGamesElements();
    return lazy((index) => NintendoStorePageObject.elementToGame(elems[index]));
  }

  getGamesCount(): number {
    return this.getGamesElements().length;
  }

  static fromHtmlString(html: string) {
    return new NintendoStorePageObject(cheerio.load(html));
  }

  private getGamesElements(): CheerioElement[] {
    if (this.gamesElements) return this.gamesElements;
    this.gamesElements = this.page("div.category-product-item").toArray();
    return this.gamesElements;
  }

  private static elementToGame(element: CheerioElement) {
    const { load } = cheerio;
    const game = load(element);
    const labels = game(".category-product-item-labels");
    const isDlcAvailable = labels.find(".label.dlc").length > 0;
    const isDemoAvailable = labels.find(".label.download-code").length > 0;
    const title = game(".category-product-item-title-link").first().text().trim();
    const detailsUrl = (game(".category-product-item-title-link").first().attr("href") || "").trim();
    const imageUrl = (game(".product-image-photo").first().attr("src") || "").trim();
    const priceTag = game(".price-container").children()[0];
    const price = parseFloat(priceTag.attribs["data-price-amount"]);
    const priceType = priceTag.attribs["data-price-type"];
    const releaseDateString = game(".category-product-item-released").text().trim().substr(-10);
    const releaseDate = parseDate(`${releaseDateString}Z`, "dd/LL/yyyyX", new Date());
    const storeId = parseInt((game('[data-role="priceBox"]').attr("data-product-id") || "").trim(), 10);
    const isPreOrder = releaseDate.valueOf() > Date.now();

    return {
      title,
      isDlcAvailable,
      isDemoAvailable,
      detailsUrl,
      imageUrl,
      price,
      priceType,
      releaseDate,
      storeId,
      isPreOrder,
    };
  }
}
