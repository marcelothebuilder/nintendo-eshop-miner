// maybe this isnt the best way to inject algolia into northamericadumper

import algolia from "algoliasearch";
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
    const algoliaIndex = algolia("U3B6GR4UA3", "9a20c93440cf63cf1a7008d75f7438bf").initIndex(
      `noa_aem_game_${this.region}`,
    );
    return new NorthAmericaDumper({ algoliaIndex, platform: NintendoOfAmericaPlatforms.SWITCH });
  }
}
