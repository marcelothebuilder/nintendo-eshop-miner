import { NorthAmericaDumperFactory } from "../dumpers/northamerica/NorthAmericaDumperFactory";
import { NorthAmericaRegions } from "../dumpers/northamerica/NorthAmericaRegions";
import { AdditionalIntegration } from "../integrate/AdditionalIntegration";
import { NorthAmericaIntegrationSource } from "../integrate/sources/NorthAmericaIntegrationSource";
import { Task } from "./Task";

export const AdditionalIntegrationTask: Task<void> = () => {
  const dumper = new NorthAmericaDumperFactory({ region: NorthAmericaRegions.UNITED_STATES }).getInstance();
  return new AdditionalIntegration(NorthAmericaIntegrationSource(dumper)).integrate();
};
