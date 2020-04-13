import { Task } from "./Task";
import { EuropeIntegrationSource } from "../integrate/sources/EuropeIntegrationSource";
import { EuropeDumper } from "../dumpers/europe/EuropeDumper";
import { Integration } from "../integrate/Integration";

export const BaseIntegrationTask: Task<void> = () =>
  new Integration(EuropeIntegrationSource(new EuropeDumper("en"))).integrate();
