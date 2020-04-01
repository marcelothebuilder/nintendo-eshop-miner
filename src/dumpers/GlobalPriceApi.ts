import axios, { AxiosInstance } from "axios";
import http from "http";
import https from "https";
import { logger } from "../logging/logger";

const url = "https://api.ec.nintendo.com/v1/price";

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

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

  async getByIds(countryCode: string, ids: number[]) {
    logger.info(`GlobalPriceApi.getByIds ${countryCode} ${ids}`);

    let allPrices: any[] = [];

    for (let i = 0; i < ids.length; i += 50) {
      const start = i;
      const end = i + 50;
      // eslint-disable-next-line no-await-in-loop
      const idsBatch = ids.slice(start, end > ids.length ? ids.length : end);

      // console.log("fetch", start, end, idsBatch);
      // eslint-disable-next-line no-await-in-loop
      // eslint-disable-next-line no-await-in-loop
      const r = await this.do(countryCode, idsBatch);
      allPrices = allPrices.concat(r.data.prices);
    }

    return allPrices
      .filter(
        (t) =>
          t.sales_status !== "not_found" && t.sales_status !== "unreleased" && t.sales_status !== "sales_termination",
      )
      .map(GlobalPriceApi.parse);
  }

  private async do(countryCode: string, ids: number[]) {
    // console.log(`GlobalPriceApi.do ${countryCode} ${ids}`);
    return this.axios.get(url, {
      params: {
        country: countryCode,
        lang: "pt",
        ids: GlobalPriceApi.buildIdsString(ids),
      },
    });
  }

  private static buildIdsString(ids: number[]): string {
    return ids.map(String).join(",");
  }

  private static parse(parse: any) {
    return {
      ...parse,
      // eslint-disable-next-line @typescript-eslint/camelcase
      regular_price: {
        ...parse.regular_price,
        // eslint-disable-next-line @typescript-eslint/camelcase
        raw_value: parseFloat(parse.regular_price.raw_value),
      },
    };
  }
}
