export type IntegrationSource = AsyncGenerator<IntegrationGame[], void, unknown>;

export interface IntegrationGame {
  nsuid: number;

  slug: string;

  title: string;

  imageUrl: string;

  sortingName: string;

  description: string;

  location: string;

  releaseDate: Date;

  remoteLastModified: Date;

  categories: string[];

  publishers: string[];
}
