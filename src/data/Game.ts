import { Model, DataTypes, HasManyGetAssociationsMixin } from "sequelize";
import { sequelize } from "./internal/sequelize";
import { GameTitle } from "./GameTitle";

class Game extends Model {
  nsuid!: number;

  title!: string;

  readonly createdAt!: Date;

  readonly updatedAt!: Date;

  getTitles!: HasManyGetAssociationsMixin<GameTitle>; // Note the null assertions!
}

Game.init(
  {
    nsuid: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.BIGINT.UNSIGNED,
    },
    title: {
      type: DataTypes.STRING,
    },
  },
  { sequelize },
);

export { Game };
