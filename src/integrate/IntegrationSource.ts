export type IntegrationSource = AsyncGenerator<IntegrationGame[]>;

export interface IntegrationGame {
  nsuid: number;

  title: string;

  sortingName: string;

  description: string;

  location: string;

  releaseDate: Date;

  remoteLastModified: Date;

  categories: string[];

  publishers: string[];
}
