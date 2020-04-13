import { Task } from "./Task";
import { EuropeIntegrationSource } from "../integrate/sources/EuropeIntegrationSource";
import { EuropeDumper } from "../dumpers/europe/EuropeDumper";
import { AdditionalIntegration } from "../integrate/AdditionalIntegration";

export const BaseIntegrationTask: Task<void> = () =>
  new AdditionalIntegration(EuropeIntegrationSource(new EuropeDumper("en"))).integrate();
