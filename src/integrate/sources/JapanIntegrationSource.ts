import { JapanDumper } from "../../dumpers/japan/JapanDumper";
import { JapanGame } from "../../dumpers/japan/JapanTypes";
import { IntegrationGame, IntegrationSource } from "../IntegrationSource";
import { logger } from "../../logging/logger";
import { Region } from "../../data/mongo/Region";

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

// eslint-disable-next-line func-names
export const JapanIntegrationSource = async function* (dumper: JapanDumper): IntegrationSource {
  yield dumper.getFullDump().then(convertGames);
};
