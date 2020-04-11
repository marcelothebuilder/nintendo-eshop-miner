import { IntegrationSource, IntegrationGame } from "../IntegrationSource";
import { EuropeDumper } from "../../dumpers/europe/EuropeDumper";
import { EuropeDocument } from "../../dumpers/europe/EuropeTypes";
import { logger } from "../../logging/logger";

const convertGame = (dumper: EuropeDumper) => (game: EuropeDocument): IntegrationGame => {
  if (!game.title) throw Error(`Null property title ${JSON.stringify(game, null, 2)}`);
  if (!game.nsuid_txt) throw Error(`Null property nsuid_txt ${JSON.stringify(game, null, 2)}`);
  if (!game.image_url) throw Error(`Null property image_url ${JSON.stringify(game, null, 2)}`);
  if (!game.excerpt) throw Error(`Null property excerpt ${JSON.stringify(game, null, 2)}`);
  if (!game.sorting_title) throw Error(`Null property sorting_title ${JSON.stringify(game, null, 2)}`);
  if (!game.pretty_game_categories_txt)
    throw Error(`Null property pretty_game_categories_txt ${JSON.stringify(game, null, 2)}`);
  if (!game.publisher) throw Error(`Null property publisher ${JSON.stringify(game, null, 2)}`);
  if (!game.dates_released_dts) throw Error(`Null property dates_released_dts ${JSON.stringify(game, null, 2)}`);
  if (!game.change_date) throw Error(`Null property change_date ${JSON.stringify(game, null, 2)}`);

  const nsuidText = game.nsuid_txt.pop();

  if (!nsuidText) throw Error("Empty nsuid");

  const nsuid = parseInt(nsuidText, 10);

  const releaseDate = game.dates_released_dts.pop();

  if (!releaseDate) throw Error("Empty release date");

  return {
    title: game.title,
    nsuid,
    imageUrl: game.image_url,
    description: game.excerpt,
    sortingName: game.sorting_title,
    location: dumper.countryCode,
    categories: game.pretty_game_categories_txt,
    publishers: [game.publisher],
    releaseDate,
    remoteLastModified: new Date(game.change_date),
  };
};

const convertGames = (dumper: EuropeDumper) => (games: EuropeDocument[]) =>
  games
    .map((game) => {
      try {
        return convertGame(dumper)(game);
      } catch (e) {
        logger.error(`Skipping game because of `, e);
        return null;
      }
    })
    .filter((g) => g !== null) as IntegrationGame[];

// eslint-disable-next-line func-names
export const EuropeIntegrationSource = async function* (dumper: EuropeDumper): IntegrationSource {
  yield dumper.getSwitchGames({}).then(convertGames(dumper));
};
