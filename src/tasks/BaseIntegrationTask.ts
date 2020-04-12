import { Task } from "./Task";
import { BaseIntegration } from "../integrate/BaseIntegration";
import { EuropeIntegrationSource } from "../integrate/sources/EuropeIntegrationSource";
import { EuropeDumper } from "../dumpers/europe/EuropeDumper";

export const BaseIntegrationTask: Task<void> = () =>
  new BaseIntegration(EuropeIntegrationSource(new EuropeDumper("en"))).integrate();
