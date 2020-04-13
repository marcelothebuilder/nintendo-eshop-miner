import { NorthAmericaDumper } from "../../dumpers/northamerica/NorthAmericaDumper";
import { IntegrationSource, IntegrationGame } from "../IntegrationSource";
import { NorthAmericaGame } from "../../dumpers/northamerica/NorthAmericaGame";
import { logger } from "../../logging/logger";
import { buildSlug } from "../SlugBuilder";
import { buildUniqueId } from "../buildUniqueId";
import { Region } from "../../data/mongo/Region";

const convertGame = (game: NorthAmericaGame): IntegrationGame => {
  const nsuid = parseInt(game.nsuid, 10);
  if (Number.isNaN(nsuid)) {
    throw Error(`Invalid property nsuid`);
  }

  if (!game.slug) {
    throw Error(`Invalid property slug`);
  }

  if (Number.isNaN(Date.parse(game.releaseDateMask))) {
    throw Error(`Invalid property releaseDateMask`);
  }

  const releaseDate = new Date(game.releaseDateMask);

  const uniqueIds = [];

  uniqueIds.push(buildUniqueId(game.title));
  uniqueIds.push(nsuid);

  return {
    title: game.title,
    nsuid,
    slug: buildSlug("switch")(game.title),
    imageUrl: game.boxArt,
    description: game.description,
    sortingName: game.title,
    location: "us",
    categories: game.categories,
    publishers: game.publishers,
    releaseDate,
    remoteLastModified: new Date(game.lastModified),
    region: Region.America,
    uniqueIds,
  };
};

// eslint-disable-next-line func-names
export const NorthAmericaIntegrationSource = async function* (dumper: NorthAmericaDumper): IntegrationSource {
  const result = await dumper.searchAll();
  yield result.games
    .map((game) => {
      try {
        return convertGame(game);
      } catch (e) {
        logger.error(`Skipping game ${game.title} because of ${e.message}`);
        return null;
      }
    })
    .filter((g) => !!g) as IntegrationGame[];
};
