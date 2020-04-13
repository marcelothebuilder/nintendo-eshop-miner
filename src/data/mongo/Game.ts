/* eslint-disable no-var */
import mongoose, { Document, DocumentQuery, Model, Schema } from "mongoose";
import { validateNsuid, validatePrice } from "./GameValidators";
import { Region } from "./Region";

const ModelName = "Game";

export interface CreationAttributes {
  createdAt: Date;

  updatedAt: Date;
}

export interface GameMethods {
  saveAndFind: () => Promise<any>;
}

export interface GameAttributes {
  nsuids: { region: Region; nsuid: number }[];

  uniqueIds: any[];

  name: string;

  slug: string;

  sortingName: string;

  titles: { location: string; content: string }[];

  description: { location: string; content: string }[];

  releaseDates: { location: string; date: Date }[];

  remoteLastModified: Date;

  categories: string[];

  publishers: string[];

  productCode?: string;

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
}

export interface GameDocument extends GameAttributes, Document, GameMethods, CreationAttributes {}

export const GameSchema = new Schema<GameDocument>(
  {
    nsuids: [{ region: String, nsuid: { type: Number, index: true, unique: true } }],

    uniqueIds: [{ type: Schema.Types.Mixed, index: true, unique: false, required: true, trim: true }],

    slug: {
      type: String,
      required: true,
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

    titles: [{ location: { type: String, required: true }, content: { type: String, required: true, index: true } }],

    description: [{ location: { type: String, required: true }, content: { type: String, required: true } }],

    releaseDates: [{ location: { type: String, required: true }, date: { type: Date, required: true } }],

    remoteLastModified: Date,

    createdAt: Date,

    updatedAt: Date,

    categories: [String],

    publishers: [String],

    productCode: { type: String, index: true },

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
  },
  { timestamps: true },
);

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
  return (this as GameModel).findOne({ "nsuids.nsuid": nsuid });
};

GameSchema.statics.findByUniqueIds = function findByNsuid(possible: any[]) {
  return (this as GameModel).findOne({ uniqueIds: { $in: possible } });
};

GameSchema.statics.findBySlug = function findByNsuid(slug: string) {
  return (this as GameModel).findOne({ slug });
};

GameSchema.statics.findByProductCodeOrNsuidOrTitleOrSlug = function findByProductCodeOrNsuidOrTitleOrSlug({
  productCode,
  nsuid,
  title,
  slug,
}: any) {
  const query = { $or: [] } as any;
  if (productCode) query.$or.push({ productCode });
  if (nsuid) query.$or.push({ "nsuids.nsuid": nsuid });
  if (slug) query.$or.push({ slug });
  if (title) {
    query.$or.push({ name: title });
    query.$or.push({ "titles.content": title });
  }

  return (this as GameModel).findOne({ slug });
};

GameSchema.statics.saveDocument = function saveDocument(doc: any) {
  const newGame = new this(doc);
  return newGame.save();
};

GameSchema.pre("validate", validatePrice);

GameSchema.pre("validate", validateNsuid);

export interface GameModel extends Model<GameDocument> {
  findByNsuid(nsuid: number): DocumentQuery<GameDocument | null, GameDocument, {}>;
  findBySlug(slug: string): DocumentQuery<GameDocument | null, GameDocument, {}>;
  findByUniqueIds(possibleIds: any[]): DocumentQuery<GameDocument | null, GameDocument, {}>;
  saveDocument(doc?: any): Promise<GameDocument>;
  findByProductCodeOrNsuidOrTitleOrSlug({
    productCode,
    nsuid,
    title,
    slug,
  }: any): DocumentQuery<GameDocument | null, GameDocument, {}>;

  of(doc?: any): GameDocument;
}

export const Game = mongoose.model<GameDocument, GameModel>(ModelName, GameSchema);
