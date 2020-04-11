/* eslint-disable no-var */
import mongoose, { Schema, Document, Model } from "mongoose";

const ModelName = "Game";

export interface GameDocument extends Document {
  nsuid: number;

  name: string;

  titles: { location: string; title: string }[];

  prices: {
    location: string;
    currency: string;
    originalPrice: number;
    price: number;
    discount: number;
    status: string;
    hasDiscount: boolean;
  }[];

  saveAndFind: () => Promise<any>;
}

export const GameSchema = new Schema<GameDocument>({
  nsuid: {
    type: Number,
    required: true,
    min: 1,
    trim: true,
    index: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: false,
  },

  titles: [{ location: { type: String, required: true }, title: { type: String, required: true } }],

  prices: [
    {
      location: { type: String, required: true },
      currency: { type: String, required: true },
      originalPrice: { type: Number, required: true },
      price: { type: Number, required: true },
      goldPoints: { type: Number, required: false },
      discount: { type: Number, required: true },
      status: { type: String, required: true },
      hasDiscount: { type: Boolean, required: true },
    },
  ],
});

GameSchema.index({
  "prices.location": 1,
  "prices.currency": -1,
});

// eslint-disable-next-line func-names
GameSchema.methods.saveAndFind = async function () {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const self = this;

  const doc = await self.save();

  // eslint-disable-next-line no-underscore-dangle
  return self.model(ModelName).findById(doc._id);
};

GameSchema.pre("validate", function validate(next) {
  const unique = [];

  const self = this as any;

  for (let i = 0, l = self.prices.length; i < l; i += 1) {
    const { location, currency } = self.prices[i];
    const key = `${location}_${currency}`;

    if (unique.indexOf(key) > -1) {
      return next(new Error("Duplicated price information"));
    }
    unique.push(key);
  }

  return next();
});

const defineMongooseModel = <TDocument extends Document>(schema: Schema<TDocument>, name: string): Model<TDocument> =>
  mongoose.model<TDocument>(name, schema);

export const Game = defineMongooseModel(GameSchema, ModelName);
