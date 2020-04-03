/* eslint-disable @typescript-eslint/camelcase */
import axios from "axios";
import http from "http";
import { parse as parseDate } from "date-fns";
import https from "https";
import _ from "lodash";
import { RawChinaGame, ChinaGame } from "./ChinaTypes";

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

// urls:
// "https://www.nintendo.tw/data/json/topics.json
// "https://www.nintendo.com.hk/data/json/topics.json",

export const AxiosInstance = axios.create({
  baseURL: "https://www.nintendo.tw/data/json/topics.json",
  httpAgent,
  httpsAgent,
  headers: {
    accept: "text/plain, */*; q=0.01",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    Referrer: "https://www.nintendo.tw/software/switch/index.html",
  },
});

export class ChinaDumper {
  private axios = AxiosInstance;

  async getFullDump(): Promise<ChinaGame[]> {
    return this.axios
      .get(String(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)))
      .then((r) => r.data)
      .then(ChinaDumper.parse);
  }

  private static parse(data: RawChinaGame[]): ChinaGame[] {
    return data.map(ChinaDumper.parseGame);
  }

  private static parseGame(game: RawChinaGame): ChinaGame {
    const cleanGame = ChinaDumper.nullifyBlankAttributes(game);
    return {
      ...cleanGame,
      release_date: ChinaDumper.parseDate(game.release_date),
    };
  }

  private static parseDate(date: string): Date {
    return parseDate(`${date}Z`, "yyyy.LL.ddX", new Date());
  }

  private static nullifyBlankAttributes(game: RawChinaGame): RawChinaGame {
    return (_.mapValues(game, ChinaDumper.nullifyBlankAttribute) as unknown) as RawChinaGame;
  }

  private static nullifyBlankAttribute(anAtributte: any): string | any {
    if (!_.isString(anAtributte)) {
      return anAtributte;
    }

    if (anAtributte.trim().length) {
      return anAtributte;
    }

    return null;
  }
}
