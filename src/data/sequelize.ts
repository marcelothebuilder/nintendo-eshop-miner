import { Sequelize } from "sequelize";
import cls from "continuation-local-storage";
import { Environment } from "../env/Enviroment";

Sequelize.useCLS(cls.createNamespace("napp"));

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: Environment.get("SQLITE_PATH").else(":memory:"),
  define: {
    timestamps: true,
  },
  pool: Environment.ifProduction({
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }).elseUndefined(),
});

export const initializeSequelize = async () => sequelize.sync();
