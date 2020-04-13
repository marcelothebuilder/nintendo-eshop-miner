import { NorthAmericaDumperFactory } from "../dumpers/northamerica/NorthAmericaDumperFactory";
import { NorthAmericaRegions } from "../dumpers/northamerica/NorthAmericaRegions";
import { Integration } from "../integrate/Integration";
import { NorthAmericaIntegrationSource } from "../integrate/sources/NorthAmericaIntegrationSource";
import { Task } from "./Task";

export const AdditionalIntegrationTask: Task<void> = () => {
  const dumper = new NorthAmericaDumperFactory({ region: NorthAmericaRegions.UNITED_STATES }).getInstance();
  return new Integration(NorthAmericaIntegrationSource(dumper)).integrate();
};
