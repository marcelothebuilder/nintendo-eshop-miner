/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
import { IntegrationSource, IntegrationGame } from "./IntegrationSource";
import { Game } from "../data/mongo/Game";
import { logger } from "../logging/logger";
import { toGameDocument } from "./IntegrationGameConverter";

export class BaseIntegration {
  private source: IntegrationSource;

  constructor(source: IntegrationSource) {
    this.source = source;
  }

  async integrate() {
    for await (const batch of this.source) {
      logger.info(`Integrating batch of games ${batch.length}`);
      await this.saveBatch(batch);
    }
  }

  private async saveBatch(batch: IntegrationGame[]) {
    const games = batch.map((game) => toGameDocument(game));

    for (const game of games) {
      // eslint-disable-next-line no-await-in-loop
      await this.saveGame(game);
    }
  }

  private async saveGame(game: any) {
    try {
      await Game.findOneAndUpdate({ nsuid: game.nsuid }, game, {
        new: true,
        upsert: true,
      });
    } catch (e) {
      logger.error(`Error while saving game ${game.nsuid} - ${game.name}`, e);
    }
  }
}
