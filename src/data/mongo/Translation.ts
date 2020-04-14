import { Options, Response } from "translation-google";
import mongoose, { Schema, Model, Document, DocumentQuery } from "mongoose";

export interface CreationAttributes {
  createdAt: Date;

  updatedAt: Date;
}

export interface TranslationDocument extends CreationAttributes, Document {
  request: {
    text: string;
    options: Options;
  };
  response: Response;
}

export const TranslationSchema = new Schema<TranslationDocument>(
  {
    request: new Schema({
      text: String,
      options: new Schema({
        to: String,
        from: { type: String, required: false },
        raw: { type: String, required: false },
      }),
    }),
    response: Schema.Types.Mixed,
  },
  { timestamps: true },
);

TranslationSchema.index({
  "request.text": 1,
  "request.options.to": 1,
  "request.options.from": 1,
  "request.options.raw": 1,
});

TranslationSchema.statics.findBy = function findBY(text: string, options: any) {
  return (this as TranslationModel).findOne({
    "request.text": text,
    "request.options.to": options.to,
    "request.options.from": options.from,
    "request.options.raw": options.raw,
  });
};

TranslationSchema.statics.of = function of(doc?: any) {
  return new this(doc);
};

export interface TranslationModel extends Model<TranslationDocument> {
  findBy(text: string, options: any): DocumentQuery<TranslationDocument | null, TranslationDocument, {}>;
  of(doc?: any): TranslationDocument;
}

export const Translation = mongoose.model<TranslationDocument, TranslationModel>("Translation", TranslationSchema);
