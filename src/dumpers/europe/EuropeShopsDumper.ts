/* eslint-disable class-methods-use-this */
import { getAllCountries, Country } from "iso-3166-standard";
import promiseSerial from "promise-serial";
import { EuropeDumper } from "./EuropeDumper";
import { CountryAlpha2Code, CountryAlpha3Code } from "../../iso/iso3166";

export interface EuropeShop {
  alpha2Code: CountryAlpha2Code;
  alpha3Code: CountryAlpha3Code;
  numericCode: number;
  countryName: string;
  gamesCount: number;
  exists: boolean;
}

const extraCountries: Country[] = [
  {
    name: "België (Dutch)",
    alpha2Code: "benl" as any,
    alpha3Code: "virtual" as any,
    numericCode: -1,
    subdivisions: [],
  },
  {
    name: "België (Dutch)" as any,
    alpha2Code: "benl" as any,
    alpha3Code: "virtual" as any,
    numericCode: -1,
    subdivisions: [],
  },
  {
    name: "Ireland and UK" as any,
    alpha2Code: "en" as any,
    alpha3Code: "virtual" as any,
    numericCode: -1,
    subdivisions: [],
  },
  {
    name: "Schweiz (German)" as any,
    alpha2Code: "chde" as any,
    alpha3Code: "virtual" as any,
    numericCode: -1,
    subdivisions: [],
  },
  {
    name: "Suisse (French)" as any,
    alpha2Code: "chfr" as any,
    alpha3Code: "virtual" as any,
    numericCode: -1,
    subdivisions: [],
  },
  {
    name: "Svizzera (Italian)" as any,
    alpha2Code: "chit" as any,
    alpha3Code: "virtual" as any,
    numericCode: -1,
    subdivisions: [],
  },
];

export class EuropeShopsDumper {
  async getShops() {
    const fns = getAllCountries()
      .concat(extraCountries)
      .map((country) => () => this.getCountryShop(country));

    return promiseSerial(fns, { parallelize: 4 });
  }

  async getCountryShop(country: Country): Promise<EuropeShop> {
    try {
      const gamesCount = await new EuropeDumper(country.alpha2Code).getSwitchGamesCount({});

      return {
        alpha2Code: country.alpha2Code,
        alpha3Code: country.alpha3Code,
        numericCode: country.numericCode,
        countryName: country.name,
        gamesCount,
        exists: true,
      };
    } catch (e) {
      return {
        alpha2Code: country.alpha2Code,
        alpha3Code: country.alpha3Code,
        numericCode: country.numericCode,
        countryName: country.name,
        gamesCount: 0,
        exists: false,
      };
    }
  }
}

new EuropeShopsDumper()
  .getShops()
  .then((shops) => shops.filter((s) => s.exists))
  .then((shops) => JSON.stringify(shops, null, 2))
  // eslint-disable-next-line no-console
  .then((dump) => console.log(dump));
