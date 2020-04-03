import axios from "axios";
import http from "http";
import https from "https";
import fs from "fs";
import path from "path";
import querystring from "querystring";
import _ from "lodash";
import { KoreaGame } from "./KoreanTypes";
import { parseNsuid } from "../../nsuid/nsuidParser";

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({
  keepAlive: true,
  ca: fs.readFileSync(path.join(process.cwd(), "certificates", "nintendo.co.kr-fullchain.pem")),
});

export class KoreaDumper {
  private client = axios.create({
    baseURL: "https://www.nintendo.co.kr/lib/ajax/all_soft_list.php",
    httpAgent,
    httpsAgent,
    headers: {
      Referrer: "https://www.nintendo.co.kr/software/software_all.php?division=switch",
      "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:74.0) Gecko/20100101 Firefox/74.0",
      Accept: "application/json, text/javascript, */*; q=0.01",
      "Accept-Language": "pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest",
    },
  });

  async getFullDump(): Promise<KoreaGame[]> {
    return this.request({
      start: 0,
      limit: 9999,
      division: "all",
      page: 1,
      rating: undefined,
      // eslint-disable-next-line @typescript-eslint/camelcase
      view_gubun: undefined,
      searchWord: undefined,
      "device[]": "switch",
      sort: "sortNewest",
    });
  }

  private async request(params: Record<string, string | number | undefined>) {
    return this.client
      .post("", querystring.stringify(params))
      .then((r) => r.data)
      .then(KoreaDumper.parseResponse);
  }

  private static parseResponse(response: KoreaGame[]) {
    return response.map(KoreaDumper.parseGame);
  }

  private static parseGame(game: KoreaGame) {
    return {
      ...game,
      nsuid: KoreaDumper.parseNsuid(game),
    };
  }

  private static parseNsuid(game: KoreaGame): number | null {
    const isNotNil = (v: any) => !_.isNil(v);
    const extractAttribute = (obj: KoreaGame) => (attributeName: string | number) => (obj as any)[attributeName];

    return (
      ["2", "link"].map(extractAttribute(game)).filter(isNotNil).map(String).map(parseNsuid).filter(isNotNil).pop() ||
      null
    );
  }
}
