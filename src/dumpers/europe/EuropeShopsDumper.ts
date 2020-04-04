/* eslint-disable class-methods-use-this */
import promiseSerial from "promise-serial";
import { EuropeDumper } from "./EuropeDumper";
import { EuropeCountries } from "./EuropeCountries";

export interface EuropeShop {
  name: string;
  code: string;
  gamesCount: number;
}

export class EuropeShopsDumper {
  async getShops() {
    const fns = EuropeCountries.map((country) => () => this.getCountryShop(country));

    return promiseSerial(fns, { parallelize: 4 });
  }

  async getCountryShop({ name, code }: { name: string; code: string }): Promise<EuropeShop> {
    const gamesCount = await new EuropeDumper(code).getSwitchGamesCount({});

    return {
      name,
      code,
      gamesCount,
    };
  }
}
