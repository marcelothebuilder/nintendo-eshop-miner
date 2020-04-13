/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
import _ from "lodash";
import { IntegrationSource, IntegrationGame } from "./IntegrationSource";
import { logger } from "../logging/logger";
import { Game } from "../data/mongo/Game";
import { toGameDocument } from "./IntegrationGameConverter";

export class Integration {
  private source: IntegrationSource;

  constructor(source: IntegrationSource) {
    this.source = source;
  }

  async integrate() {
    for await (const batch of this.source) {
      logger.info(`Integrating additional batch of games ${batch.length}`);
      await this.saveBatch(batch);
    }
  }

  private async saveBatch(batch: IntegrationGame[]) {
    const games = batch;

    for (const game of games) {
      // eslint-disable-next-line no-await-in-loop
      await this.saveGame(game);
    }
  }

  private async saveGame(game: IntegrationGame) {
    const existing = await Game.findByUniqueIds(game.uniqueIds);

    if (existing) {
      existing.categories = _.uniq(game.categories.concat(existing.categories)).sort();
      const regionNsuid = existing.nsuids.find((n) => n.region === game.region);
      if (!regionNsuid) {
        existing.nsuids.push({ nsuid: game.nsuid, region: game.region });
      } else {
        regionNsuid.nsuid = game.nsuid;
      }

      existing.titles = existing.titles || [];
      const locationTitle = existing.titles.find((title) => title.location === game.location);
      if (!locationTitle) {
        existing.titles.push({ location: game.location, content: game.title });
      } else {
        locationTitle.content = game.title;
      }

      existing.description = existing.description || [];
      const locationDescription = existing.description.find((desc) => desc.location === game.location);
      if (!locationDescription) {
        existing.description.push({ location: game.location, content: game.description });
      } else {
        locationDescription.content = game.description;
      }

      existing.releaseDates = existing.releaseDates || [];
      const locationDate = existing.releaseDates.find((desc) => desc.location === game.location);
      if (!locationDate) {
        existing.releaseDates.push({ location: game.location, date: game.releaseDate });
      } else {
        locationDate.date = game.releaseDate;
      }

      existing.uniqueIds = (existing.uniqueIds || []).concat(game.uniqueIds);
      existing.uniqueIds = _.uniq(existing.uniqueIds.sort());
    }

    if (existing) {
      try {
        await existing.save();
      } catch (e) {
        logger.error(`Error while updating game ${game.nsuid} - ${game.title} - ${existing.toJSON()}`, e);
      }
    } else {
      try {
        await this.saveNew(game);
      } catch (e) {
        logger.error(`Error while saving new game ${game.nsuid} - ${game.title} - ${JSON.stringify(game)}`, e);
      }
    }
  }

  private async saveNew(game: any) {
    await Game.saveDocument(toGameDocument(game));
  }
}
