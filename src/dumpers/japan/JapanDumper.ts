/* eslint-disable @typescript-eslint/camelcase */
import axios from "axios";
import http from "http";
import https from "https";
import { flatten } from "lodash";
import promiseSerial from "promise-serial";
import { logger } from "../../logging/logger";
import { JapanGame, Hardware } from "./JapanTypes";

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

export const AxiosInstance = axios.create({
  baseURL: "https://search.nintendo.jp/nintendo_soft/search.json",
  httpAgent,
  httpsAgent,
  method: "GET",
  headers: {
    Accept: "*/*",
    "Accept-Encoding": "gzip: deflate: br",
    "Accept-Language": "pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3",
    Connection: "keep-alive",
    DNT: "1",
    Host: "search.nintendo.jp",
    Origin: "https://www.nintendo.co.jp",
    Referer: "https://www.nintendo.co.jp/",
    TE: "Trailers",
    "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:74.0) Gecko/20100101 Firefox/74.0",
  },
});

export interface JapanDumperOptions {
  maxRequestsInParallel?: number;
  pageSize?: number;
}

export class JapanDumper {
  private static defaults: Required<JapanDumperOptions> = { maxRequestsInParallel: 3, pageSize: 300 };

  private pageSize: number;

  private maxRequestsInParallel: number;

  private client = AxiosInstance;

  constructor(options: JapanDumperOptions = JapanDumper.defaults) {
    this.maxRequestsInParallel = options.maxRequestsInParallel || JapanDumper.defaults.maxRequestsInParallel;
    this.pageSize = options.pageSize || JapanDumper.defaults.pageSize;
  }

  async getPage(page: number) {
    return this.client
      .get("", {
        params: {
          limit: this.pageSize,
          page,
          sort: "id asc",
          opt_osale: 1, // only on sale?
          opt_hard: Hardware.NintendoSwitch,
        },
      })
      .then((r) => r.data);
  }

  async getCount(): Promise<number> {
    return this.client
      .get("", {
        params: {
          limit: 0,
          opt_osale: 1, // only on sale?
          opt_hard: Hardware.NintendoSwitch,
        },
      })
      .then((r) => r.data.result.total);
  }

  async getFullDump(): Promise<JapanGame[]> {
    const { result } = await this.getPage(1);
    const { total, items } = result;

    logger.debug(`First request done, got total of ${total} hits`);

    if (items.length > total) {
      throw Error("Got more results from the request than the report item count");
    } else if (items.length === total) {
      return items;
    }

    const p = [];

    for (let pageNumber = 2; total + this.pageSize > pageNumber * this.pageSize; pageNumber += 1) {
      p.push(() =>
        this.getPage(pageNumber).then((r) => {
          logger.debug(`Got page ${pageNumber} result (${r.result.items.length} items)`);
          return r.result.items;
        }),
      );
    }

    logger.debug(`${p.length} more requests on the way`);

    const r = await promiseSerial(p, { parallelize: this.maxRequestsInParallel });
    return items.concat(flatten(r));
  }
}
