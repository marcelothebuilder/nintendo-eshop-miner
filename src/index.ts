import { NintendoOfAmericaDumper, NintendoOfAmericaRegions, NintendoDumper } from "./dumpers/NintendoOfAmericaDumper";
import { logger } from "./logging/logger";

async function getUsGames() {
  const usDumper: NintendoDumper = new NintendoOfAmericaDumper({
    region: NintendoOfAmericaRegions.UNITED_STATES,
  });
  const usGames = await usDumper.searchAll();

  logger.info(`Got ${usGames.length} from us server.`);
}

async function getCanadaGames() {
  const canadaDumper: NintendoDumper = new NintendoOfAmericaDumper({
    region: NintendoOfAmericaRegions.CANADA,
  });
  const canadaGames = await canadaDumper.searchAll();

  logger.info(`Got ${canadaGames.length} from canada server.`);
}

async function main(): Promise<void> {
  try {
    await Promise.all([getCanadaGames(), getUsGames()]);
  } catch (e) {
    logger.error(e);
  }
}

main().then(() => logger.info("Done execution"));
