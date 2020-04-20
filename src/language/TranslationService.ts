/* eslint-disable @typescript-eslint/no-non-null-assertion */
import _ from "lodash";
import translate, { Options } from "translation-google";
import { logger } from "../logging/logger";

const BULK_SEPARATOR = "\n";

export type TranslationMap = Record<string, string>;

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
    const translateBulks: string[][] = [];
    let currentBulk: string[] = [];
    let currentBulkCharactersCount = 0;

    for (let index = 0; index < texts.length; index += 1) {
      const text = texts[index];
      const futureBulkLength = currentBulkCharactersCount + text.length + BULK_SEPARATOR.length;
      if (this.isAboveLimit(futureBulkLength)) {
        translateBulks.push(currentBulk);
        currentBulk = [];
        currentBulkCharactersCount = 0;
      }
      currentBulk.push(text);
      currentBulkCharactersCount += text.length + BULK_SEPARATOR.length;
    }

    if (currentBulk.length > 0) {
      translateBulks.push(currentBulk);
      currentBulk = [];
      currentBulkCharactersCount = 0;
    }

    const itemsInBulkCount = _.flatten(translateBulks).length;

    if (itemsInBulkCount !== inputTextx.length) {
      throw Error(`Items in bulk mismatch ${itemsInBulkCount} !== ${inputTextx.length}`);
    }

    const translations = _.flatten(
      await Promise.all(translateBulks.map((bulk) => this.bulkTranslateArray(bulk, options))),
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

  private isAboveLimit(charCount: number) {
    return charCount > this.characterLimit;
  }

  private async bulkTranslateArray(texts: string[], options: Options): Promise<string[]> {
    const translateText = texts.join(BULK_SEPARATOR);

    if (this.isAboveLimit(translateText.length)) throw Error(`Cant translate ${translateText.length}`);

    const result = await this.translate(translateText, options);
    const translations = result.text.split(BULK_SEPARATOR);
    if (translations.length !== texts.length) {
      throw Error(`Expected ${texts.length} translations, got ${translations.length}`);
    }
    return translations;
  }
}
