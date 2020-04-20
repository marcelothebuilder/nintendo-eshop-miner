import { NorthAmericaDumperFactory } from "../dumpers/northamerica/NorthAmericaDumperFactory";
import { NorthAmericaRegions } from "../dumpers/northamerica/NorthAmericaRegions";
import { Integration } from "../integrate/Integration";
import { NorthAmericaIntegrationSource } from "../integrate/sources/NorthAmericaIntegrationSource";
import { Task } from "./Task";

const getDumper = () => new NorthAmericaDumperFactory({ region: NorthAmericaRegions.UNITED_STATES }).getInstance();

export const NorthAmericaIntegrationTask: Task<void> = () =>
  new Integration(NorthAmericaIntegrationSource(getDumper())).integrate();
