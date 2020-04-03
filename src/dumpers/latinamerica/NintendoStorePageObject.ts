import cheerio from "cheerio";
import { parse as parseDate } from "date-fns";
import { LatinAmericaGame } from "./LatinAmericaTypes";

export class NintendoStorePageObject {
  private page: CheerioStatic;

  constructor(rawHtml: string) {
    this.page = cheerio.load(rawHtml);
  }

  getGames(): LatinAmericaGame[] {
    const { load } = cheerio;

    return this.getGamesElements()
      .toArray()
      .map((g) => load(g))
      .map((game: CheerioStatic) => {
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
      });
  }

  getGamesCount(): number {
    return this.getGamesElements().length;
  }

  private getGamesElements() {
    return this.page("div.category-product-item");
  }
}
