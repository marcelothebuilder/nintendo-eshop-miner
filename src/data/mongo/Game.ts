import mongoose, { Schema, Document, Model } from "mongoose";

export interface GameDocument extends Document {
  nsuid: number;

  name: string;

  titles: { location: string; title: string }[];

  prices: {
    location: string;
    originalPrice: number;
    price: number;
    discount: number;
    status: string;
    hasDiscount: boolean;
  }[];
}

export const GameSchema = new Schema<GameDocument>({
  nsuid: {
    type: Number,
    required: true,
    min: 1,
    index: true,
  },

  name: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },

  titles: [{ location: String, title: String }],

  prices: [
    {
      location: String,
      originalPrice: Number,
      price: Number,
      discount: Number,
      status: String,
      hasDiscount: Boolean,
    },
  ],
});

const defineMongooseModel = <TDocument extends Document>(schema: Schema<TDocument>, name: string): Model<TDocument> =>
  mongoose.model<TDocument>(name, schema);

export const Game = defineMongooseModel(GameSchema, "Game");
