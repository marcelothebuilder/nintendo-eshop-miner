import translate, { Options } from "translation-google";
import { logger } from "../logging/logger";

export class TranslationService {
  static async translate(text: string, options: Options) {
    try {
      return await translate(text, options);
    } catch (e) {
      logger.error("Error while translating", e);
      throw Error("Google translate error");
    }
  }
}
