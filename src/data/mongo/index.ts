// import mongoose, { Schema, Model } from "mongoose";
// mongoose.createConnection();

// import { Game } from "./Game";

// export interface GameDocument extends Document {
//   _id: number;

//   name: string;

//   titles: { location: string; title: string }[];
// }

// export class GameClass extends Model {
//   _id!: number;

//   name!: string;

//   titles!: { location: string; title: string }[];
// }

// export const GameSchema = new Schema<GameDocument>({
//   _id: Number,

//   name: String,

//   titles: [{ location: String, title: String }],
// }).loadClass(GameClass);

// export const Game = mongoose.model("Game", GameSchema);

// mongoose
//   .connect("mongodb://localhost/nintendo", {
//     useNewUrlParser: true,
//     user: "root",
//     pass: "nintendo",
//     authSource: "admin",
//   })
//   .then(async (db) => {
//     await Game.findOneAndUpdate({ _id: 133113 }, { titles: [{ location: "en", title: "Zledie" }] }, { upsert: true });
//     await Game.findOneAndUpdate({ _id: 133111 }, { titles: [{ location: "en", title: "Zledie" }] }, { upsert: true });
//     await db.disconnect();
//   });
