import axios from "axios";
import http from "http";
import https from "https";
import promiseSerial from "promise-serial";
import { LatinAmericaShopDump } from "./LatinAmericaTypes";
import { LatinAmericaShops } from "./LatinAmericaShops";
import { NintendoStorePageObject } from "./NintendoStorePageObject";

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

export class LatinAmericaDumper {
  private client = axios.create({
    httpAgent,
    httpsAgent,
    withCredentials: true,
    method: "GET",
    headers: {
      "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:74.0) Gecko/20100101 Firefox/74.0",
      Accept: "*/*",
      "Accept-Language": "pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3",
    },
  });

  async getFullDump(): Promise<LatinAmericaShopDump[]> {
    return promiseSerial(
      LatinAmericaShops.map((shop) => {
        return () =>
          this.client
            .get(shop.url.href)
            .then((r) => r.data)
            .then((data) => new NintendoStorePageObject(data).getGames())
            .then((games) => ({
              games,
              gamesCount: games.length,
              shop,
            }));
      }),
      { parallelize: 2 },
    );
  }
}

const stringifyJSON = (data: any) => JSON.stringify(data, null, 2);
new LatinAmericaDumper().getFullDump().then((d) => console.log(stringifyJSON(d)));
