import { NorthAmericaDumper } from "../../dumpers/northamerica/NorthAmericaDumper";
import { IntegrationSource, IntegrationGame } from "../IntegrationSource";
import { NorthAmericaGame } from "../../dumpers/northamerica/NorthAmericaGame";
import { Region } from "../../data/mongo/Game";

const convertGame = (game: NorthAmericaGame): IntegrationGame => ({
  title: game.title,
  nsuid: parseInt(game.nsuid, 10),
  slug: game.slug,
  imageUrl: game.boxArt,
  description: game.description,
  sortingName: game.title,
  location: "us",
  categories: game.categories,
  publishers: game.publishers,
  releaseDate: new Date(game.releaseDateMask),
  remoteLastModified: new Date(game.lastModified),
  region: Region.America,
});

// eslint-disable-next-line func-names
export const NorthAmericaIntegrationSource = async function* (dumper: NorthAmericaDumper): IntegrationSource {
  const result = await dumper.searchAll();
  yield result.games.map(convertGame);
};
