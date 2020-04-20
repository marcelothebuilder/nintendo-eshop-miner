/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import _ from "lodash";
import translate, { Options } from "translation-google";
import { logger } from "../logging/logger";

const BULK_SEPARATOR = "\n";

export type TranslationMap = Record<string, string>;

class TranslationBulk {
  private texts: string[];

  private characterLimit: number;

  constructor(texts: string[], characterLimit: number) {
    this.texts = texts;
    this.characterLimit = characterLimit;
  }

  getBulks() {
    const translateBulks: string[][] = [];

    const { texts } = this;

    let currentBulk: string[] = [];
    let currentBulkCharsCount = 0;

    texts.forEach((text) => {
      const textSizeInsideBulk = text.length + BULK_SEPARATOR.length;

      const futureBulkCharsLength = currentBulkCharsCount + textSizeInsideBulk;

      if (this.isAboveLimit(futureBulkCharsLength)) {
        translateBulks.push(currentBulk);
        currentBulk = [];
        currentBulkCharsCount = 0;
      }

      currentBulk.push(text);

      currentBulkCharsCount += textSizeInsideBulk;
    });

    if (currentBulk.length > 0) translateBulks.push(currentBulk);

    return translateBulks;
  }

  private isAboveLimit(charCount: number) {
    return charCount > this.characterLimit;
  }
}

export class TranslationService {
  private static DEFAULT_CHARACTER_LIMIT = 5000;

  private characterLimit: number;

  constructor(characterLimit = TranslationService.DEFAULT_CHARACTER_LIMIT) {
    this.characterLimit = characterLimit;
  }

  // eslint-disable-next-line class-methods-use-this
  async translate(text: string, options: Options) {
    try {
      return await translate(text, options);
    } catch (e) {
      logger.error("Error while translating", e);
      throw Error("Google translate error");
    }
  }

  async bulkTranslate(inputTextx: string[], options: Options): Promise<TranslationMap> {
    const texts = inputTextx.map((t) => t.trim().replace(/\r?\n|\r/g, ""));

    const bulks = new TranslationBulk(texts, this.characterLimit);

    const translations = _.flatten(
      await Promise.all(bulks.getBulks().map((bulk) => this.bulkTranslateArray(bulk, options))),
    );

    if (translations.length !== inputTextx.length) {
      throw Error(`Translations mismatch ${translations.length} !== ${inputTextx.length}`);
    }

    return translations.reduce((theMap: TranslationMap, translation, index) => {
      const original = texts[index];
      // eslint-disable-next-line no-param-reassign
      theMap[original] = translation;

      if (!translation) {
        throw Error(`Translation for ${original} is blank ${translation}`);
      }

      return theMap;
    }, {});
  }

  private async bulkTranslateArray(texts: string[], options: Options): Promise<string[]> {
    const translateText = texts.join(BULK_SEPARATOR);

    const result = await this.translate(translateText, options);
    const translations = result.text.split(BULK_SEPARATOR);
    if (translations.length !== texts.length) {
      throw Error(`Expected ${texts.length} translations, got ${translations.length}`);
    }
    return translations;
  }
}
