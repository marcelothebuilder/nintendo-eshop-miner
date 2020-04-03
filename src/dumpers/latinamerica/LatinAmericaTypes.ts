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
  publisher: string;
  price: number;
  priceType: string;
  description: string[];
  platform: string;
  genres: string[];
  releaseDate: Date;
  playerCount: PlayerCount;
  languages: string[];
  requiredSpaceInGB: number;
  cloudSave: boolean;
  gameModes: string[];
}

export interface PlayerCount {
  type: string;
  count: number;
}
