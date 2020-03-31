// maybe this isnt the best way to inject algolia into northamericadumper

import { Timeouts } from "@algolia/transporter";
import algolia from "algoliasearch/lite";
import { adaptWinstonToAlgolia } from "../logging/algoliaAdapter";
import { algoliaLogger } from "../logging/algoliaLogger";
import { decorateWithLogger } from "../logging/algoliaLoggingDecorator";
import { NintendoOfAmericaPlatforms, NorthAmericaDumper } from "./NorthAmericaDumper";
import { NorthAmericaRegions } from "./NorthAmericaRegions";

export interface NorthAmericaDumperFactoryConstructor {
  region: string;
}

export class NorthAmericaDumperFactory {
  private region: string;

  constructor({ region = NorthAmericaRegions.UNITED_STATES }: NorthAmericaDumperFactoryConstructor) {
    this.region = region;
  }

  getInstance() {
    const timeouts: Timeouts = {
      connect: 5, // was 1
      read: 10, // was 2. The value of the former `timeout` parameter
      write: 30,
    };

    const algoliaClient = algolia("U3B6GR4UA3", "9a20c93440cf63cf1a7008d75f7438bf", {
      logger: adaptWinstonToAlgolia(algoliaLogger),
      timeouts,
    });

    const algoliaIndex = decorateWithLogger(algoliaClient.initIndex(`noa_aem_game_${this.region}`), algoliaLogger);

    return new NorthAmericaDumper({ algoliaIndex, platform: NintendoOfAmericaPlatforms.SWITCH });
  }
}
