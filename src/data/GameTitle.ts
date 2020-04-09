import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize";
import { Game } from "./Game";

class GameTitle extends Model {
  nsuid!: number;

  location!: string;

  title!: string;

  readonly createdAt!: Date;

  readonly updatedAt!: Date;
}

GameTitle.init(
  {
    nsuid: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.BIGINT.UNSIGNED,
    },
    location: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize },
);

Game.hasMany(GameTitle, { foreignKey: "nsuid" });
GameTitle.belongsTo(Game, { targetKey: "nsuid", foreignKey: "nsuid" });

export { GameTitle };
