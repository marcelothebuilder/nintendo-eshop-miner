/* eslint-disable no-var */
import mongoose, { Schema, Document, Model, DocumentQuery } from "mongoose";

const ModelName = "Game";

export interface GameDocument extends Document {
  nsuid: number;

  name: string;

  sortingName: string;

  titles: { location: string; content: string }[];

  description: { location: string; content: string }[];

  releaseDate: Date;

  remoteLastModified: Date;

  createdAt: Date;

  updatedAt: Date;

  categories: string[];

  publishers: string[];

  prices: {
    location: string;
    currency: string;
    originalPrice: number;
    price: number;
    goldPoints?: number;
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
    index: false,
    unique: false,
  },

  sortingName: {
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: false,
  },

  titles: [{ location: { type: String, required: true }, content: { type: String, required: true } }],

  description: [{ location: { type: String, required: true }, content: { type: String, required: true } }],

  releaseDate: Date,

  remoteLastModified: Date,

  createdAt: Date,

  updatedAt: Date,

  categories: [String],

  publishers: [String],

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

GameSchema.statics.of = function of(doc?: any) {
  return new this(doc);
};

GameSchema.statics.findByNsuid = function findByNsuid(nsuid: number) {
  return (this as GameModel).findOne({ nsuid });
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

export interface GameModel extends Model<GameDocument> {
  findByNsuid(nsuid: number): DocumentQuery<GameDocument | null, GameDocument, {}>;
  of(doc?: any): GameDocument;
}

export const Game = mongoose.model<GameDocument, GameModel>(ModelName, GameSchema);
