import * as winston from "winston";

const logger = winston.createLogger({
  level: "info",
  //   format: winston.format.json(),
  format: winston.format.simple(),
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
    new winston.transports.Console({
      format: winston.format.simple(),
      level: "debug",
    }),
  ],
});

// if (process.env.NODE_ENV !== "production") {
//   logger.add(
//     new winston.transports.Console({
//       format: winston.format.simple(),
//       level: "debug",
//     }),
//   );
// }

export { logger };
