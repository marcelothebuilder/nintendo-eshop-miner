import { getUnixTime } from "date-fns";
import { logger } from "./logger";

export const decorateWithTimeLogging = (fn: any) => {
  // eslint-disable-next-line func-names
  return function (...args: any) {
    const start = getUnixTime(new Date());
    const r = fn.apply(fn, args);
    const timeTaken = getUnixTime(new Date()) - start;
    logger.debug(`Took ${timeTaken}ms`);
    return r;
  };
};
