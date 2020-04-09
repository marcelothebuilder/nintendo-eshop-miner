import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize";

class Game extends Model {
  nsuid!: number;

  name!: string;

  readonly createdAt!: Date;

  readonly updatedAt!: Date;
}

Game.init(
  {
    nsuid: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  { sequelize },
);

export { Game };
