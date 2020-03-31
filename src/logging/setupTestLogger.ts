import { logger } from "./logger";

logger.transports.forEach((transport) => {
  // eslint-disable-next-line no-param-reassign
  transport.silent = true;
});
