import { Sequelize } from "sequelize";
import cls from "continuation-local-storage";
import { Environment } from "../../../env/Enviroment";

export const namespace = cls.createNamespace("napp");

Sequelize.useCLS(namespace);

export const sequelize = new Sequelize({
  dialect: "sqlite",
  logging: true,
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
