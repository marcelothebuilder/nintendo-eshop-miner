declare module "translation-google" {
  export interface Response {
    text: string;
    from: From;
    raw: string;
  }

  export interface From {
    language: Language;
    text: Text;
  }

  export interface Language {
    didYouMean: boolean;
    iso: string;
  }

  export interface Text {
    autoCorrected: boolean;
    value: string;
    didYouMean: boolean;
  }

  export interface Options {
    to: string;
    from?: string;
    raw?: boolean;
  }
  export default function (text: string, { to, from, raw }: Options): Promise<Response>;
}
