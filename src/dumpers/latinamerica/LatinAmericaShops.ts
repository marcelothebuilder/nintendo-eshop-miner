// en.wikipedia.org/wiki/ISO_3166

export const LatinAmericaShops: Shop[] = [
  {
    name: "Brazil",
    countryCode: "BR", // ISO_3166-1_alpha-2
    countryCode2: "BRA", // ISO_3166-1_alpha-3
    currency: "BRL",
    url: new URL("https://store.nintendo.com.br/"),
  },
  {
    name: "Colombia",
    countryCode: "CO", // ISO_3166-1_alpha-2
    countryCode2: "COL", // ISO_3166-1_alpha-3
    currency: "COP",
    url: new URL("https://store.nintendo.co/"),
  },
  {
    name: "Argentina",
    countryCode: "AR", // ISO_3166-1_alpha-2
    countryCode2: "ARG", // ISO_3166-1_alpha-3
    currency: "ARS",
    url: new URL("https://store.nintendo.com.ar/"),
  },
  {
    name: "Chile",
    countryCode: "CL", // ISO_3166-1_alpha-2
    countryCode2: "CHL", // ISO_3166-1_alpha-3
    currency: "CLP",
    url: new URL("https://store.nintendo.cl/"),
  },
  {
    name: "Peru",
    countryCode: "PE", // ISO_3166-1_alpha-2
    countryCode2: "PER", // ISO_3166-1_alpha-3
    currency: "PEN",
    url: new URL("https://store.nintendo.com.pe/"),
  },
];

export interface Shop {
  name: string;
  countryCode: string;
  countryCode2: string;
  currency: string;
  url: URL;
}
