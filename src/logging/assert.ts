import { logger } from "./logger";

export const assert = (expression: () => boolean, expressionMessage: () => string) =>
  !expression() ? logger.error(expressionMessage()) : null;
