import { Task } from "./Task";
import { JapanIntegrationSource } from "../integrate/sources/JapanIntegrationSource";
import { Integration } from "../integrate/Integration";
import { JapanDumper } from "../dumpers/japan/JapanDumper";

export const JapanIntegrationTask: Task<void> = () =>
  new Integration(JapanIntegrationSource(new JapanDumper())).integrate();
