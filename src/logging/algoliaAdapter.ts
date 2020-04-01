import { LeveledLogMethod, Logger } from "winston";

type LogMethods = "error" | "warn" | "info" | "http" | "verbose" | "debug" | "silly";

const promisesifyLoggerMethod = (winstonInstance: Logger, level: LogMethods) => {
  return (...args: any[]) => {
    const m: LeveledLogMethod = winstonInstance[level];
    (m as any)(...args);
    return Promise.resolve();
  };
};

const adaptWinstonToAlgolia = (winstonInstance: Logger) => {
  return {
    debug: promisesifyLoggerMethod(winstonInstance, "debug"),
    error: promisesifyLoggerMethod(winstonInstance, "error"),
    info: promisesifyLoggerMethod(winstonInstance, "info"),
  };
};

export { adaptWinstonToAlgolia };
