import ISO3166 from "iso-3166-standard";
import promiseSerial from "promise-serial";
import { GlobalPriceApi } from "./GlobalPriceApi";

export class GlobalPriceDumper {
  private api: GlobalPriceApi = new GlobalPriceApi();

  async getPricePerCountry(nsuid: number) {
    const requestFunctions = ISO3166.getAllCountries().map((country) => () =>
      this.api
        .getByIds(country.alpha2Code, [nsuid])
        .then((a) => a.pop())
        .then((info) => ({ ...info, country: country.alpha2Code, countryName: country.name }))
        .catch((e) => {
          if (e.response.status === 404) {
            return { notFound: true, country: country.alpha2Code, countryName: country.name };
          }
          throw e;
        }),
    );

    const prices = await promiseSerial(requestFunctions, { parallelize: 3 });
    return prices.filter((d) => d);
  }
}
