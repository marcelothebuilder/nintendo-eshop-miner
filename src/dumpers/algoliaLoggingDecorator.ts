import { SearchIndex } from "algoliasearch/lite";
import { Logger } from "winston";
import randomString from "human-readable-random-string";

export const decorateWithLogger = (algoliaIndex: SearchIndex, logger: Logger): SearchIndex => {
  const newIndex = { ...algoliaIndex };

  newIndex.search = (...args): any => {
    const requestId = randomString(10);

    logger.debug(`SearchIndex.search [${requestId}] >>`, args);

    return algoliaIndex
      .search(...args)
      .then((r) => {
        logger.debug(`SearchIndex.search [${requestId}] <<`, r);
        return Promise.resolve(r);
      })
      .catch((err) => {
        logger.error(`SearchIndex.search [${requestId}] <<`, err);
        return Promise.reject(err);
      }) as any;
  };

  return newIndex;
};
