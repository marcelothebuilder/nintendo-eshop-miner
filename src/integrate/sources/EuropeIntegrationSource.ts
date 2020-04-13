import { IntegrationSource, IntegrationGame } from "../IntegrationSource";
import { EuropeDumper } from "../../dumpers/europe/EuropeDumper";
import { EuropeDocument } from "../../dumpers/europe/EuropeTypes";
import { logger } from "../../logging/logger";
import { buildSlug } from "../SlugBuilder";
import { buildUniqueId } from "../buildUniqueId";
import { Region } from "../../data/mongo/Region";

const convertGame = (dumper: EuropeDumper) => (game: EuropeDocument): IntegrationGame => {
  if (!game.title) throw Error(`Null property title`);
  if (!game.nsuid_txt) throw Error(`Null property nsuid_txt`);
  if (!game.image_url) throw Error(`Null property image_url`);
  if (!game.excerpt) throw Error(`Null property excerpt`);
  if (!game.sorting_title) throw Error(`Null property sorting_title`);
  if (!game.pretty_game_categories_txt) throw Error(`Null property pretty_game_categories_txt`);
  if (!game.publisher) throw Error(`Null property publisher`);
  if (!game.dates_released_dts) throw Error(`Null property dates_released_dts`);
  if (!game.change_date) throw Error(`Null property change_date`);

  const nsuidText = game.nsuid_txt.pop();

  if (!nsuidText) throw Error("Empty nsuid");

  const nsuid = parseInt(nsuidText, 10);

  const releaseDate = game.dates_released_dts.pop();

  if (!releaseDate) throw Error("Empty release date");

  const productCode = game.product_code_txt?.pop() || game.product_code_ss?.pop();

  const uniqueIds = [];
  uniqueIds.push(buildUniqueId(game.title));
  if (productCode) uniqueIds.push(productCode);
  if (nsuid) uniqueIds.push(nsuid);

  return {
    title: game.title,
    nsuid,
    slug: buildSlug("switch")(game.title),
    imageUrl: game.image_url,
    description: game.excerpt,
    sortingName: game.sorting_title,
    location: dumper.countryCode,
    categories: game.pretty_game_categories_txt,
    publishers: [game.publisher],
    releaseDate,
    remoteLastModified: new Date(game.change_date),
    region: Region.Europe,
    productCode,
    uniqueIds,
  };
};

const convertGames = (dumper: EuropeDumper) => (games: EuropeDocument[]) =>
  games
    .map((game) => {
      try {
        return convertGame(dumper)(game);
      } catch (e) {
        logger.error(`Skipping game ${game.title} because of ${e.message}`);
        return null;
      }
    })
    .filter((g) => g !== null) as IntegrationGame[];

// eslint-disable-next-line func-names
export const EuropeIntegrationSource = async function* (dumper: EuropeDumper): IntegrationSource {
  yield dumper.getSwitchGames({}).then(convertGames(dumper));
};
