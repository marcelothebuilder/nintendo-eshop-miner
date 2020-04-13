import { Region } from "../data/mongo/Game";

export type IntegrationSource = AsyncGenerator<IntegrationGame[], void, unknown>;

export interface IntegrationGame {
  nsuid: number;

  slug: string;

  title: string;

  region: Region;

  imageUrl: string;

  sortingName: string;

  description: string;

  location: string;

  releaseDate: Date;

  remoteLastModified: Date;

  categories: string[];

  publishers: string[];

  productCode?: string;
}
