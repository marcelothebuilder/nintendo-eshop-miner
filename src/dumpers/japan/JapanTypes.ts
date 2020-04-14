// https://img-eshop.cdn.nintendo.net/i/66a1e231272eb0241d0aa0a81f9eb0416e9bd5b205759caaac71220aebdc3a84.jpg?w=1920
// 66a1e231272eb0241d0aa0a81f9eb0416e9bd5b205759caaac71220aebdc3a84 can be replaced be image ids

export interface JapanGame {
  id: string; // nsuid
  title: string;
  text: null | string;
  url: null | string;
  titlek: null | string;
  nsuid: null | string;
  pdate: Date; // future date, what is this?
  icode: null | string; // japanese game code
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
