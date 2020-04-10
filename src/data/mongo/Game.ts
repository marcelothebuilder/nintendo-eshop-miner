/* eslint-disable no-underscore-dangle */
import mongoose, { Schema, Document, Model } from "mongoose";

export interface GameDocument extends Document {
  _id: number;

  name: string;

  titles: { location: string; title: string }[];
}

export class GameClass {
  _id!: number;

  name!: string;

  titles!: { location: string; title: string }[];
}

export const GameSchema = new Schema<GameDocument>({
  _id: {
    type: Number,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  titles: [{ location: String, title: String }],
});
// }).loadClass(GameClass);

const defineMongooseModel = <TDocument extends Document>(schema: Schema<TDocument>, name: string): Model<TDocument> =>
  //   mongoose.models[name] ||
  mongoose.model<TDocument>(name, schema);

export const Game = defineMongooseModel(GameSchema, "Game");
