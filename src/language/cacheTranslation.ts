import { Options, Response } from "translation-google";
import { Translation } from "../data/mongo/Translation";
import { TranslationService } from "./translationService";

type TranslationFunction = (text: string, options: Options) => Promise<Response>;

const cachedTranslation: TranslationFunction = async (text: string, options: Options) => {
  const translation = await Translation.findBy(text, options);
  if (translation) return translation.response;
  const serviceTranslation = await TranslationService.translate(text, options);
  await Translation.of({
    request: {
      text,
      options,
    },
    response: serviceTranslation,
  }).save();
  return serviceTranslation;
};

class CachedTranslationService {
  static translate = cachedTranslation;
}

export { CachedTranslationService };
