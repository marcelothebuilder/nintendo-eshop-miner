/* eslint-disable no-restricted-syntax */
import { IntegrationSource } from "./IntegrationSource";
import { Game } from "../data/mongo/Game";

export class BaseIntegration {
  private source: IntegrationSource;

  constructor(source: IntegrationSource) {
    this.source = source;
  }

  async integrate() {
    for await (const batch of this.source) {
      const games = batch
        .map((game) => ({
          nsuid: game.nsuid,
          name: game.title,
          sortingName: game.sortingName,
          titles: [{ location: game.location, content: game.title }],
          description: [{ location: game.location, content: game.description }],
          releaseDate: game.releaseDate,
          remoteLastModified: game.remoteLastModified,
          categories: game.categories,
          publishers: game.publishers,
        }))
        .map((doc) => Game.of(doc));

      for (const game of games) {
        // eslint-disable-next-line no-await-in-loop
        await game.save();
      }
    }
  }
}
