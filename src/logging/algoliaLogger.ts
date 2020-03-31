import * as winston from "winston";

const algoliaLogger = winston.createLogger({
  level: "debug",
  format: winston.format.simple(),
  transports: [
    new winston.transports.File({ filename: "logs/algolia-warn.log", level: "warn" }),
    new winston.transports.File({ filename: "logs/algolia-combined.log" }),
    new winston.transports.Console({
      format: winston.format.simple(),
      level: "warn",
    }),
  ],
});

export { algoliaLogger };
