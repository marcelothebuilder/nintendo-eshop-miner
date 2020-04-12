import * as winston from "winston";
import { Environment } from "../env/Environment";

const logger = winston.createLogger({
  level: Environment.get("LOG_LEVEL").else("info"),
  //   format: winston.format.json(),
  format: winston.format.simple(),
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: "logs/app-error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/app-dombined.log" }),
    new winston.transports.Console({
      format: winston.format.simple(),
      level: "debug",
    }),
  ],
});

export { logger };
