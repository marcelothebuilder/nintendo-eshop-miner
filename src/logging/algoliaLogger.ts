import * as winston from "winston";
import { adaptWinstonToAlgolia } from "./algoliaAdapter";

const algoliaLogger = adaptWinstonToAlgolia(
  winston.createLogger({
    format: winston.format.simple(),
    transports: [
      new winston.transports.File({ filename: "algolia-warn.log", level: "warn" }),
      new winston.transports.File({ filename: "algolia-all.log", level: "silly" }),
      new winston.transports.Console({
        format: winston.format.simple(),
        level: "warn",
      }),
    ],
  }),
);

export { algoliaLogger };
