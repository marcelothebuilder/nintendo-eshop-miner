import { IntegrationGame } from "./IntegrationSource";

export const toGameDocument = (game: IntegrationGame) => {
  return {
    nsuids: [{ region: game.region, nsuid: game.nsuid }],
    slug: game.slug,
    name: game.title,
    sortingName: game.sortingName,
    titles: [{ location: game.location, content: game.title }],
    description: [{ location: game.location, content: game.description }],
    releaseDates: [{ location: game.location, date: game.releaseDate }],
    remoteLastModified: game.remoteLastModified,
    categories: game.categories,
    publishers: game.publishers,
    uniqueIds: game.uniqueIds,
  };
};
