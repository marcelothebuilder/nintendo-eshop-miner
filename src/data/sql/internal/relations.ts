import { Game } from "../Game";
import { GameTitle } from "../GameTitle";

Game.hasMany(GameTitle, { foreignKey: "nsuid", as: "Titles" });
GameTitle.belongsTo(Game, { targetKey: "nsuid", foreignKey: "nsuid" });
