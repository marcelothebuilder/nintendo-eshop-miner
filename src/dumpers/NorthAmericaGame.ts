export interface Title {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface Nsuid {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface Publisher {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface HighlightResult {
  title: Title;
  nsuid: Nsuid;
  publishers: Publisher[];
}

export interface NorthAmericaGame {
  type: string;
  locale: string;
  url: string;
  title: string;
  description: string;
  lastModified: number;
  nsuid: string;
  slug: string;
  boxArt: string;
  gallery: string;
  platform: string;
  releaseDateMask: string;
  characters: any[];
  categories: string[];
  esrb: string;
  esrbDescriptors: string[];
  virtualConsole: string;
  generalFilters: string[];
  filterShops: any[];
  filterPlayers: any[];
  publishers: string[];
  players: string;
  featured: boolean;
  freeToStart: boolean;
  priceRange?: any;
  // original price
  msrp?: any;
  // sale with discount
  salePrice?: any;
  availability: string[];
  objectID: string;
  _distinctSeqID: number;
  _highlightResult: HighlightResult;
}
