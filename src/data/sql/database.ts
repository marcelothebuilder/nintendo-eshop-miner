import { sequelize } from "./internal/sequelize";

export const initializeSequelize = async () => sequelize.sync({ force: false });

export { sequelize };
