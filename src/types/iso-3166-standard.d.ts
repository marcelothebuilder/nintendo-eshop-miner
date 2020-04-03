import { CountryAlpha2Code, CountryAlpha3Code } from "../iso/iso3166";

declare module "iso-3166-standard" {
  export interface Country {
    alpha2Code: CountryAlpha2Code;
    alpha3Code: CountryAlpha3Code;
    numericCode: number;
    name: string;
    subdivisions: Subdivision[];
  }

  export interface Subdivision {
    type: Type;
    divisionCode: string;
    name: string;
  }

  export enum Type {
    District = "district",
    OutlyingArea = "outlyingArea",
    State = "state",
  }

  export function getCountry(code: string): Country;
  export function getSubdivisions(code: string): Array<Subdivision>;
  export function getAllCountries(): Array<Country>;
}
