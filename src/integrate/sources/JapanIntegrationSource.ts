/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { JapanDumper } from "../../dumpers/japan/JapanDumper";
import { JapanGame } from "../../dumpers/japan/JapanTypes";
import { IntegrationGame, IntegrationSource } from "../IntegrationSource";
import { logger } from "../../logging/logger";
import { Region } from "../../data/mongo/Region";
import { CachedTranslationService } from "../../language/cacheTranslation";
import { buildUniqueId } from "../id/buildUniqueId";
import { buildSlug } from "../id/SlugBuilder";
import { isJapaneseString } from "../../language/languageTest";

const convertGame = (game: JapanGame): IntegrationGame => {
  const nsuidText = game.nsuid;

  if (!nsuidText) throw Error("Empty nsuid");

  const nsuid = parseInt(nsuidText, 10);

  const releaseDate = game.dsdate;

  if (!releaseDate) throw Error("Empty release date");

  const productCode = game.icode;

  if (!productCode) throw Error("Empty product code");

  const uniqueIds = [];
  if (productCode) uniqueIds.push(productCode);
  if (nsuid) uniqueIds.push(nsuid);

  return {
    title: game.title,
    nsuid,
    slug: undefined,
    imageUrl: undefined,
    description: game.text || undefined,
    sortingName: game.title,
    location: "JP",
    categories: game.genre || [],
    publishers: [game.maker],
    releaseDate,
    remoteLastModified: game.ssdate || undefined,
    region: Region.Japan,
    productCode,
    uniqueIds,
  };
};

const convertGames = (games: JapanGame[]) =>
  games
    .map((game) => {
      try {
        return convertGame(game);
      } catch (e) {
        logger.error(`Skipping game ${game.title} because of ${e.message}`);
        return null;
      }
    })
    .filter((g) => g !== null) as IntegrationGame[];

const getTranslation = async (title: string) => {
  if (isJapaneseString(title)) {
    const tx = await CachedTranslationService.translate(title, {
      to: "en",
      from: "auto",
    });

    logger.debug(`Got ${title} translation: ${tx.text}`);

    return tx.text;
  }

  logger.debug(`${title} has no japanese characters, keeping it as-is.`);

  return title;
};

// eslint-disable-next-line func-names
export const JapanIntegrationSource = async function* (dumper: JapanDumper): IntegrationSource {
  const games = await dumper.getFullDump().then(convertGames);

  logger.debug("Got the dump!");
  for (const game of games) {
    logger.debug(`Fetching ${game.title} translation`);
    const translation = await getTranslation(game.title);
    yield [
      {
        ...game,
        slug: buildSlug("switch")(translation),
        uniqueIds: game.uniqueIds.concat([buildUniqueId(translation)]),
      },
    ];
  }
};
