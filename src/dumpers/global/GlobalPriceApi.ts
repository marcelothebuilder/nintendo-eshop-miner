import axios, { AxiosInstance } from "axios";
import http from "http";
import https from "https";
import { logger } from "../../logging/logger";
import { GlobalPrice } from "./GlobalPrice";

const url = "https://api.ec.nintendo.com/v1/price";

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

export const ZeldaBreathOfTheWildNSUID = 70010000000025;
export const EuropeanZeldaBreathOfTheWildNSUID = 70010000000023;

export class GlobalPriceApi {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      httpAgent,
      httpsAgent,
      headers: {
        "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:74.0) Gecko/20100101 Firefox/74.0",
        Accept: "*/*",
        Host: "api.ec.nintendo.com",
        "Accept-Encoding": "gzip, deflate, br",
      },
    });
  }

  async getByIds(countryCode: string, ids: number[]): Promise<GlobalPrice[]> {
    logger.info(`GlobalPriceApi.getByIds ${countryCode} ${ids}`);

    let allPrices: any[] = [];

    for (let i = 0; i < ids.length; i += 50) {
      const start = i;
      const end = i + 50;
      const idsBatch = ids.slice(start, end > ids.length ? ids.length : end);

      // eslint-disable-next-line no-await-in-loop
      const prices = await this.do(countryCode, idsBatch);
      allPrices = allPrices.concat(prices);
    }

    return allPrices.map(GlobalPriceApi.parse);
  }

  private async do(countryCode: string, ids: number[]) {
    return this.axios
      .get(url, {
        params: {
          country: countryCode,
          lang: "pt",
          ids: GlobalPriceApi.buildIdsString(ids),
        },
      })
      .then((r) => r.data.prices);
  }

  private static buildIdsString(ids: number[]): string {
    return ids.map(String).join(",");
  }

  private static parse(parse: any): GlobalPrice {
    return {
      ...parse,
      // eslint-disable-next-line @typescript-eslint/camelcase
      regular_price: {
        ...parse.regular_price,
        // eslint-disable-next-line @typescript-eslint/camelcase
        raw_value: parse.regular_price && parseFloat(parse.regular_price.raw_value),
      },
    };
  }
}
