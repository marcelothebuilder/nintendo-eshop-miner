import { NintendoOfAmericaDumper } from "./dumpers/NintendoOfAmericaDumper";
import { logger } from "./logging/logger";

async function main(): Promise<void> {
  try {
    await new NintendoOfAmericaDumper().searchAll();
  } catch (e) {
    logger.error(e);
  }
}

main().then(() => logger.info("Done execution"));
