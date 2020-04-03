export interface LatinAmericaGame {
  title: string;
  detailsUrl: string;
  imageUrl: string;
  price: number;
  priceType: string;
  releaseDate: Date;
  storeId: number;
  isPreOrder: boolean;
  isDemoAvailable: boolean;
  isDlcAvailable: boolean;
}

export interface LatinAmericaGameDetail {
  title: string;
  price: number;
  priceType: string;
  priceCurrency: string;
}

export interface PlayerCount {
  type: string;
  count: number;
}
