/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-empty */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable func-style */
/* eslint-disable @typescript-eslint/camelcase */
// To parse this data:
//
//   import { Convert } from "./file";
//
//   const japanTypes = Convert.toJapanTypes(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface JapanGame {
  id: string; // nsuid
  title: string;
  text: null | string;
  url: null | string;
  titlek: null | string;
  nsuid: null | string;
  pdate: Date; // future date, what is this?
  icode: null | string;
  hard: Hardware | null;
  sform: Sform | null;
  pprice: number | null;
  dprice: number | null;
  sdate: null | string; // this is the release date (sodate is this in another format?)
  sodate: null | string; // sdate in another format
  ssitu: SaleStatus | null;
  maker: string;
  iurl: null | string;
  genre: Genre[] | null;
  cero: string[] | null;
  amiibo: null | string;
  yomi: null;
  sicon: null | string;
  n3ds: string[] | null;
  sprice: number | null;
  ssdate: Date | null; // this may be the edit date
  sedate: Date | null; // this may be the edit date
  cnsuid: string[] | null;
  cont: Controller[] | null;
  pmode: NintendoSwitchMode[] | null;
  player: string[] | null;
  lang: Language[] | null;
  price: number | null;
  tr: null | string;
  series: null | string;
  sale_flg: string;
  current_price: number | null;
  nplayer: string[] | null;
  lplayer: string[] | null;
  apps: string[] | null;
  nso: string[] | null;
  drate: string[] | null;
  dsdate: Date | null; // is this the release date also?
  memo: null | string;
  sform_n: SformN | null;
  trisdate: Date | null;
  tristat: null | string;
  sslurl: string[] | null;
  mvtype: string[] | null;
  mvname: string[] | null;
  mvurl: string[] | null;
  mvsdates: Date[] | null;
  mvedates: string[] | null;
  siurl: null | string;
  dcolors: string[] | null;
  sctg: Sctg | null;
  score: number;
}

export enum Controller {
  SwitchProController = "SWITCH_PRO_CONTROLLER",
}

export enum Genre {
  おえかきアドベンチャー = "おえかきアドベンチャー",
  その他 = "その他",
  アクション = "アクション",
  アクションRPG = "アクションRPG",
  アクションゲーム = "アクションゲーム",
  アクションシューティング = "アクションシューティング",
  アクションロールプレイング = "アクションロールプレイング",
  アドベンチャー = "アドベンチャー",
  アーケード = "アーケード",
  ガンシューティング = "ガンシューティング",
  ガールズライフシミュレーション = "ガールズライフシミュレーション",
  コミュニケーション = "コミュニケーション",
  シミュレーション = "シミュレーション",
  シューティング = "シューティング",
  シューティングゲーム = "シューティングゲーム",
  シューティングパズル = "シューティングパズル",
  ショップ = "ショップ",
  ストラテジー = "ストラテジー",
  スポーツ = "スポーツ",
  スポーツフィッシング = "スポーツ（フィッシング）",
  ダンスリズムアクション = "ダンス&リズムアクション",
  ツール = "ツール",
  テーブル = "テーブル",
  トレーニング = "トレーニング",
  バラエティ知育体験 = "バラエティ（知育/体験）",
  パズル = "パズル",
  パズルアクション = "パズルアクション",
  パズルゲーム = "パズルゲーム",
  パチンコアドベンチャー = "パチンコ+アドベンチャー",
  パチンココミュニケーション = "パチンコ＋コミュニケーション",
  パーティー = "パーティー",
  ビリヤード = "ビリヤード",
  ピンボール = "ピンボール",
  フィットネス = "フィットネス",
  レーシング = "レーシング",
  レース = "レース",
  ロールプレイング = "ロールプレイング",
  ロールプレイングゲーム = "ロールプレイングゲーム",
  地球体感 = "地球体感",
  多人数プレイ対応 = "多人数プレイ対応",
  女性向け恋愛Avg = "女性向け恋愛AVG",
  学習 = "学習",
  学習ソフト = "学習ソフト",
  実用 = "実用",
  本格3Dダンジョン学園RPG = "本格3Dダンジョン学園RPG",
  格闘 = "格闘",
  辞典 = "辞典",
  野球 = "野球",
  野球ゲーム = "野球ゲーム",
  防衛系シミュレーションゲーム = "防衛系シミュレーションゲーム",
  音楽 = "音楽",
}

export enum Hardware {
  NintendoSwitch = "1_HAC",
  Nintendo3DS = "2_CTR",
  Smartphone = "3_smartphone",
  WiiU = "4_WUP",
  Amiibo = "9_amiibo",
  Other = "9_other",
}

export enum Language {
  De = "de",
  En = "en",
  EnAU = "en_AU",
  EnUS = "en_US",
  Es = "es",
  EsUS = "es_US",
  Fr = "fr",
  FrUS = "fr_US",
  It = "it",
  Ja = "ja",
  Ko = "ko",
  Nl = "nl",
  Pt = "pt",
  PtUS = "pt_US",
  Ru = "ru",
  ZhCN = "zh_CN",
  ZhTW = "zh_TW",
}

export enum NintendoSwitchMode {
  HandheldMode = "HANDHELD_MODE",
  TabletopMode = "TABLETOP_MODE",
  TvMode = "TV_MODE",
}

export enum Sctg {
  Aoc = "aoc",
  Bundle = "bundle",
  DLSoft = "dl_soft",
}

export enum Sform {
  Accessory = "accessory",
  Am30Th = "am_30th",
  AmDarksouls = "am_darksouls",
  AmFe = "am_fe",
  AmHako = "am_hako",
  AmKirby = "am_kirby",
  AmMh = "am_mh",
  AmMori = "am_mori",
  AmMtr = "am_mtr",
  AmPikmin = "am_pikmin",
  AmPokemon = "am_pokemon",
  AmRobo = "am_robo",
  AmRockman = "am_rockman",
  AmSMB = "am_smb",
  AmShovel = "am_shovel",
  AmSm = "am_sm",
  AmSplatoon = "am_splatoon",
  AmSports = "am_sports",
  AmYoshi = "am_yoshi",
  AmZelda = "am_zelda",
  App = "app",
  Ctr = "CTR",
  CtrDownloadable = "CTR_DOWNLOADABLE",
  CtrFcNes = "CTR_FC/NES",
  CtrGB = "CTR_GB",
  CtrGamegear = "CTR_GAMEGEAR",
  CtrGbc = "CTR_GBC",
  CtrOthers = "CTR_OTHERS",
  CtrPceTg16 = "CTR_PCE/TG16",
  Ctrware = "CTRWARE",
  DLDlc = "DL_DLC",
  Dlc = "DLC",
  HacCard = "HAC_CARD",
  HacDL = "HAC_DL",
  HacDownloadable = "HAC_DOWNLOADABLE",
  Hard = "hard",
  HardSoft = "hard-soft",
  KtrDownloadable = "KTR_DOWNLOADABLE",
  KtrSfcSnes = "KTR_SFC/SNES",
  Ktrware = "KTRWARE",
  Set = "set",
  WiiuAgb = "WIIU_AGB",
  WiiuDL = "WIIU_DL",
  WiiuDisc = "WIIU_DISC",
  WiiuDownloadable = "WIIU_DOWNLOADABLE",
  WiiuFcNes = "WIIU_FC/NES",
  WiiuMsx = "WIIU_MSX",
  WiiuN64 = "WIIU_N64",
  WiiuNDS = "WIIU_NDS",
  WiiuOthers = "WIIU_OTHERS",
  WiiuPceTg16 = "WIIU_PCE/TG16",
  WiiuSfcSnes = "WIIU_SFC/SNES",
  WiiuWiidisc = "WIIU_WIIDISC",
}

export enum SformN {
  IOSAndroid = "iOS/Android",
  SUPERMARIOBROS30Thシリーズ = "SUPER MARIO BROS. 30thシリーズ",
  Wiiディスクダウンロード版 = "Wiiディスク(ダウンロード版)",
  ちびロボシリーズ = "ちびロボ！シリーズ",
  どうぶつの森シリーズ = "どうぶつの森シリーズ",
  ショベルナイトシリーズ = "ショベルナイトシリーズ",
  スプラトゥーンシリーズ = "スプラトゥーンシリーズ",
  スーパーマリオシリーズ = "スーパーマリオシリーズ",
  セット = "セット",
  ゼルダの伝説シリーズ = "ゼルダの伝説シリーズ",
  ダウンロードソフト = "ダウンロードソフト",
  ダウンロード版追加コンテンツ = "ダウンロード版＋追加コンテンツ",
  ダークソールシリーズ = "ダークソールシリーズ",
  ハコボーイシリーズ = "ハコボーイ！シリーズ",
  バーチャルコンソール = "バーチャルコンソール",
  パッケージ版 = "パッケージ版",
  パッケージ版ダウンロード版 = "パッケージ版／ダウンロード版",
  ピクミンシリーズ = "ピクミンシリーズ",
  ファイアーエムブレムシリーズ = "ファイアーエムブレムシリーズ",
  ポケモンシリーズ = "ポケモンシリーズ",
  マリオスポーツスーパースターズシリーズ = "マリオスポーツ スーパースターズシリーズ",
  メトロイドシリーズ = "メトロイドシリーズ",
  モンスターハンターストーリーシリーズ = "モンスターハンターストーリーシリーズ",
  ヨッシーウールワールドシリーズ = "ヨッシー ウールワールド シリーズ",
  ロックマンシリーズ = "ロックマンシリーズ",
  周辺機器 = "周辺機器",
  大乱闘スマッシュブラザーズシリーズ = "大乱闘スマッシュブラザーズシリーズ",
  星のカービィシリーズ = "星のカービィシリーズ",
  本体 = "本体",
  本体ソフト = "本体＋ソフト",
  追加コンテンツ = "追加コンテンツ",
}

export enum SaleStatus {
  NotFound = "not_found",
  Onsale = "onsale",
  Preorder = "preorder",
  SalesTermination = "sales_termination",
  Unreleased = "unreleased",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  static toJapanTypes(json: string): JapanGame[] {
    return cast(JSON.parse(json), a(r("JapanTypes")));
  }

  static japanTypesToJson(value: JapanGame[]): string {
    return JSON.stringify(uncast(value, a(r("JapanTypes"))), null, 2);
  }
}

function invalidValue(typ: any, val: any): never {
  throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases, val);
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue("array", val);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(typ: any, val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue("Date", val);
    }
    return d;
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue("object", val);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
      result[prop.key] = transform(v, prop.typ, getProps);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps);
      }
    });
    return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val);
  }
  if (typ === false) return invalidValue(typ, val);
  while (typeof typ === "object" && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
    return typ.hasOwnProperty("unionMembers")
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems")
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty("props")
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(typ, val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  JapanTypes: o(
    [
      { json: "id", js: "id", typ: "" },
      { json: "title", js: "title", typ: "" },
      { json: "text", js: "text", typ: u(null, "") },
      { json: "url", js: "url", typ: u(null, "") },
      { json: "titlek", js: "titlek", typ: u(null, "") },
      { json: "nsuid", js: "nsuid", typ: u(null, "") },
      { json: "pdate", js: "pdate", typ: Date },
      { json: "icode", js: "icode", typ: u(null, "") },
      { json: "hard", js: "hard", typ: u(r("Hard"), null) },
      { json: "sform", js: "sform", typ: u(r("Sform"), null) },
      { json: "pprice", js: "pprice", typ: u(0, null) },
      { json: "dprice", js: "dprice", typ: u(0, null) },
      { json: "sdate", js: "sdate", typ: u(null, "") },
      { json: "sodate", js: "sodate", typ: u(null, "") },
      { json: "ssitu", js: "ssitu", typ: u(r("Ssitu"), null) },
      { json: "maker", js: "maker", typ: "" },
      { json: "iurl", js: "iurl", typ: u(null, "") },
      { json: "genre", js: "genre", typ: u(a(r("Genre")), null) },
      { json: "cero", js: "cero", typ: u(a(""), null) },
      { json: "amiibo", js: "amiibo", typ: u(null, "") },
      { json: "yomi", js: "yomi", typ: null },
      { json: "sicon", js: "sicon", typ: u(null, "") },
      { json: "n3ds", js: "n3ds", typ: u(a(""), null) },
      { json: "sprice", js: "sprice", typ: u(0, null) },
      { json: "ssdate", js: "ssdate", typ: u(Date, null) },
      { json: "sedate", js: "sedate", typ: u(Date, null) },
      { json: "cnsuid", js: "cnsuid", typ: u(a(""), null) },
      { json: "cont", js: "cont", typ: u(a(r("Cont")), null) },
      { json: "pmode", js: "pmode", typ: u(a(r("Pmode")), null) },
      { json: "player", js: "player", typ: u(a(""), null) },
      { json: "lang", js: "lang", typ: u(a(r("Lang")), null) },
      { json: "price", js: "price", typ: u(0, null) },
      { json: "tr", js: "tr", typ: u(null, "") },
      { json: "series", js: "series", typ: u(null, "") },
      { json: "sale_flg", js: "sale_flg", typ: "" },
      { json: "current_price", js: "current_price", typ: u(0, null) },
      { json: "nplayer", js: "nplayer", typ: u(a(""), null) },
      { json: "lplayer", js: "lplayer", typ: u(a(""), null) },
      { json: "apps", js: "apps", typ: u(a(""), null) },
      { json: "nso", js: "nso", typ: u(a(""), null) },
      { json: "drate", js: "drate", typ: u(a(""), null) },
      { json: "dsdate", js: "dsdate", typ: u(Date, null) },
      { json: "memo", js: "memo", typ: u(null, "") },
      { json: "sform_n", js: "sform_n", typ: u(r("SformN"), null) },
      { json: "trisdate", js: "trisdate", typ: u(Date, null) },
      { json: "tristat", js: "tristat", typ: u(null, "") },
      { json: "sslurl", js: "sslurl", typ: u(a(""), null) },
      { json: "mvtype", js: "mvtype", typ: u(a(""), null) },
      { json: "mvname", js: "mvname", typ: u(a(""), null) },
      { json: "mvurl", js: "mvurl", typ: u(a(""), null) },
      { json: "mvsdates", js: "mvsdates", typ: u(a(Date), null) },
      { json: "mvedates", js: "mvedates", typ: u(a(""), null) },
      { json: "siurl", js: "siurl", typ: u(null, "") },
      { json: "dcolors", js: "dcolors", typ: u(a(""), null) },
      { json: "sctg", js: "sctg", typ: u(r("Sctg"), null) },
      { json: "score", js: "score", typ: 3.14 },
    ],
    false,
  ),
  Cont: ["SWITCH_PRO_CONTROLLER"],
  Genre: [
    "おえかきアドベンチャー",
    "その他",
    "アクション",
    "アクションRPG",
    "アクションゲーム",
    "アクションシューティング",
    "アクションロールプレイング",
    "アドベンチャー",
    "アーケード",
    "ガンシューティング",
    "ガールズライフシミュレーション",
    "コミュニケーション",
    "シミュレーション",
    "シューティング",
    "シューティングゲーム",
    "シューティングパズル",
    "ショップ",
    "ストラテジー",
    "スポーツ",
    "スポーツ（フィッシング）",
    "ダンス&リズムアクション",
    "ツール",
    "テーブル",
    "トレーニング",
    "バラエティ（知育/体験）",
    "パズル",
    "パズルアクション",
    "パズルゲーム",
    "パチンコ+アドベンチャー",
    "パチンコ＋コミュニケーション",
    "パーティー",
    "ビリヤード",
    "ピンボール",
    "フィットネス",
    "レーシング",
    "レース",
    "ロールプレイング",
    "ロールプレイングゲーム",
    "地球体感",
    "多人数プレイ対応",
    "女性向け恋愛AVG",
    "学習",
    "学習ソフト",
    "実用",
    "本格3Dダンジョン学園RPG",
    "格闘",
    "辞典",
    "野球",
    "野球ゲーム",
    "防衛系シミュレーションゲーム",
    "音楽",
  ],
  Hard: ["1_HAC", "2_CTR", "3_smartphone", "4_WUP", "9_amiibo", "9_other"],
  Lang: [
    "de",
    "en",
    "en_AU",
    "en_US",
    "es",
    "es_US",
    "fr",
    "fr_US",
    "it",
    "ja",
    "ko",
    "nl",
    "pt",
    "pt_US",
    "ru",
    "zh_CN",
    "zh_TW",
  ],
  Pmode: ["HANDHELD_MODE", "TABLETOP_MODE", "TV_MODE"],
  Sctg: ["aoc", "bundle", "dl_soft"],
  Sform: [
    "accessory",
    "am_30th",
    "am_darksouls",
    "am_fe",
    "am_hako",
    "am_kirby",
    "am_mh",
    "am_mori",
    "am_mtr",
    "am_pikmin",
    "am_pokemon",
    "am_robo",
    "am_rockman",
    "am_smb",
    "am_shovel",
    "am_sm",
    "am_splatoon",
    "am_sports",
    "am_yoshi",
    "am_zelda",
    "app",
    "CTR",
    "CTR_DOWNLOADABLE",
    "CTR_FC/NES",
    "CTR_GB",
    "CTR_GAMEGEAR",
    "CTR_GBC",
    "CTR_OTHERS",
    "CTR_PCE/TG16",
    "CTRWARE",
    "DL_DLC",
    "DLC",
    "HAC_CARD",
    "HAC_DL",
    "HAC_DOWNLOADABLE",
    "hard",
    "hard-soft",
    "KTR_DOWNLOADABLE",
    "KTR_SFC/SNES",
    "KTRWARE",
    "set",
    "WIIU_AGB",
    "WIIU_DL",
    "WIIU_DISC",
    "WIIU_DOWNLOADABLE",
    "WIIU_FC/NES",
    "WIIU_MSX",
    "WIIU_N64",
    "WIIU_NDS",
    "WIIU_OTHERS",
    "WIIU_PCE/TG16",
    "WIIU_SFC/SNES",
    "WIIU_WIIDISC",
  ],
  SformN: [
    "iOS/Android",
    "SUPER MARIO BROS. 30thシリーズ",
    "Wiiディスク(ダウンロード版)",
    "ちびロボ！シリーズ",
    "どうぶつの森シリーズ",
    "ショベルナイトシリーズ",
    "スプラトゥーンシリーズ",
    "スーパーマリオシリーズ",
    "セット",
    "ゼルダの伝説シリーズ",
    "ダウンロードソフト",
    "ダウンロード版＋追加コンテンツ",
    "ダークソールシリーズ",
    "ハコボーイ！シリーズ",
    "バーチャルコンソール",
    "パッケージ版",
    "パッケージ版／ダウンロード版",
    "ピクミンシリーズ",
    "ファイアーエムブレムシリーズ",
    "ポケモンシリーズ",
    "マリオスポーツ スーパースターズシリーズ",
    "メトロイドシリーズ",
    "モンスターハンターストーリーシリーズ",
    "ヨッシー ウールワールド シリーズ",
    "ロックマンシリーズ",
    "周辺機器",
    "大乱闘スマッシュブラザーズシリーズ",
    "星のカービィシリーズ",
    "本体",
    "本体＋ソフト",
    "追加コンテンツ",
  ],
  Ssitu: ["not_found", "onsale", "preorder", "sales_termination", "unreleased"],
};
