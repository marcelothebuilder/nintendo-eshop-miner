/* eslint-disable no-var */
import mongoose, { Schema, Document, Model, DocumentQuery, Error } from "mongoose";
import _ from "lodash";

const ModelName = "Game";

export enum Region {
  America = "America",
  Japan = "Japan",
  Europe = "Europe",
}

export interface GameDocument extends Document {
  nsuids: { region: Region; nsuid: number }[];

  name: string;

  sortingName: string;

  titles: { location: string; content: string }[];

  description: { location: string; content: string }[];

  releaseDates: { location: string; date: Date }[];

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

export const GameSchema = new Schema<GameDocument>(
  {
    nsuids: [{ region: String, nsuid: { type: Number, index: true, unique: true } }],

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

    titles: [{ location: { type: String, required: true }, content: { type: String, required: true } }],

    description: [{ location: { type: String, required: true }, content: { type: String, required: true } }],

    releaseDates: [{ location: { type: String, required: true }, date: { type: Date, required: true } }],

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

GameSchema.statics.findBySlug = function findByNsuid(slug: string) {
  return (this as GameModel).findOne({ slug });
};

GameSchema.statics.saveDocument = function saveDocument(doc: any) {
  const newGame = new this(doc);
  return newGame.save();
};

GameSchema.pre("validate", function validatePrice(next) {
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

GameSchema.pre("validate", function validateNsuid(next) {
  const self = this as any;

  const { nsuids } = self;

  if (_.isEmpty(nsuids)) {
    return next();
  }

  if (_.uniqBy(nsuids, "nsuid").length !== nsuids.length) {
    return next(new Error("Duplicated nsuids.nsuid information"));
  }

  if (_.uniqBy(nsuids, "region").length !== nsuids.length) {
    return next(new Error("Duplicated nsuids.region information"));
  }

  const regions = nsuids.map((n: { region: string }) => n.region);

  const unknownRegions = _.difference(regions, Object.keys(Region));

  if (unknownRegions.length) {
    return next(new Error(`Unknown region in nsuids.region entry ${unknownRegions.toString()}`));
  }

  return next();
});

export interface GameModel extends Model<GameDocument> {
  findByNsuid(nsuid: number): DocumentQuery<GameDocument | null, GameDocument, {}>;
  findBySlug(slug: string): DocumentQuery<GameDocument | null, GameDocument, {}>;
  saveDocument(doc?: any): Promise<GameDocument>;
  of(doc?: any): GameDocument;
}

export const Game = mongoose.model<GameDocument, GameModel>(ModelName, GameSchema);
