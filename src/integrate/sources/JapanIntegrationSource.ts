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
import { TranslationService } from "../../language/TranslationService";

const sanitizeName = (gameName: string): string =>
  gameName
    .trim()
    .replace(/\r?\n|\r/g, "")
    .trim();

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
    title: sanitizeName(game.title),
    nsuid,
    slug: undefined,
    imageUrl: undefined,
    description: game.text || undefined,
    sortingName: sanitizeName(game.title),
    location: "jp",
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
        logger.error(`JapanIntegrationSource: Skipping game ${game.title} because of ${e.message}`);
        return null;
      }
    })
    .filter((g) => g !== null) as IntegrationGame[];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getTranslation = async (title: string) => {
  if (isJapaneseString(title)) {
    const tx = await CachedTranslationService.translate(title, {
      to: "en",
      from: "auto",
    });

    logger.debug(`JapanIntegrationSource: Got ${title} translation: ${tx.text}`);

    return tx.text;
  }

  logger.debug(`JapanIntegrationSource: ${title} has no japanese characters, keeping it as-is.`);

  return title;
};

const getTranslations = async (titles: string[]) => {
  return new TranslationService().bulkTranslate(titles, { to: "en", from: "ja" });
};

// eslint-disable-next-line func-names
export const JapanIntegrationSource = async function* (dumper: JapanDumper): IntegrationSource {
  const games = await dumper.getFullDump().then(convertGames);

  logger.debug("JapanIntegrationSource: Got the dump!");

  const translationMap = await getTranslations(games.map((g) => g.title));

  // const gamesCount = games.length;
  // const translationsCount = Object.keys(translationMap).length;

  // if (gamesCount !== translationsCount) {
  //   throw Error(`Got ${translationsCount} translations for ${gamesCount} games`);
  // }

  for (const game of games) {
    logger.debug(`JapanIntegrationSource: Fetching ${game.title} translation`);
    const translation = translationMap[game.title];
    yield [
      {
        ...game,
        slug: buildSlug("switch")(translation),
        uniqueIds: game.uniqueIds.concat([buildUniqueId(translation)]),
      },
    ];
  }
};
