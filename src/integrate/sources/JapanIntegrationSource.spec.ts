/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { expect, assert } from "chai";
import { describe, it, afterEach } from "mocha";
import sinon from "sinon";
import { IntegrationGame } from "../IntegrationSource";
import { JapaneseZeldaBreathOfTheWildNSUID } from "../../dumpers/global/GlobalPriceApi";
import { JapanDumper } from "../../dumpers/japan/JapanDumper";
import { JapanIntegrationSource } from "./JapanIntegrationSource";
import { CachedTranslationService } from "../../language/cacheTranslation";

const botw = {
  id: "70010000000026",
  title: "ゼルダの伝説　ブレス オブ ザ ワイルド",
  text:
    "広大な世界を舞台に、どこに行くのも、何をするのも、冒険のすべてがあなた次第です。野生動物を狩って過ごすのか？ 魔物を退治しに行くのか？ 絶景ポイントを見て回るのか？ 走る、泳ぐ、飛ぶ、登る、どこまでも広がる世界で思いのままに冒険をお楽しみいただけます。Nintendo Switchなら、自宅のテレビでじっくりプレイした続きを外出中に楽しむなど、プレイスタイルも自由自在です。\n\n【ストーリー】\n大厄災と呼ばれる災害が起こり、ハイラル王国は滅亡した……。\nそれから100年後。主人公リンクは地下遺跡で永い眠りから目覚め、不思議な声に導かれて大地へと踏み出す。",
  url: "https://www.nintendo.co.jp/zelda/index.html",
  titlek: "ぜるだのでんせつ ぶれす おぶ ざ わいるど",
  nsuid: "70010000000026",
  pdate: new Date(),
  icode: "AAAAA",
  hard: "1_HAC",
  sform: "HAC_DOWNLOADABLE",
  pprice: 7678.0,
  dprice: 7678.0,
  sdate: "2017.3.3",
  sodate: "2017B03A03",
  ssitu: "onsale",
  maker: "任天堂",
  iurl: "66a1e231272eb0241d0aa0a81f9eb0416e9bd5b205759caaac71220aebdc3a84",
  genre: ["アクション", "アドベンチャー"],
  cero: ["2"],
  amiibo: "1",
  yomi: null,
  sicon: null,
  n3ds: ["0"],
  sprice: null,
  ssdate: null,
  sedate: null,
  cnsuid: ["70050000000101", "70050000000121", "70070000000024"],
  cont: ["SWITCH_PRO_CONTROLLER"],
  pmode: ["TV_MODE", "TABLETOP_MODE", "HANDHELD_MODE"],
  player: ["1"],
  lang: ["ja", "en", "fr", "de", "it", "es", "ko", "nl", "ru", "zh_CN", "es_US", "fr_US", "zh_TW", "en_US"],
  price: 7678.0,
  tr: "0",
  series: null,
  sale_flg: "0",
  current_price: 7678.0,
  nplayer: null,
  lplayer: null,
  apps: ["0"],
  nso: ["0"],
  drate: ["0"],
  dsdate: "2017-03-03 00:00:00",
  memo: null,
  sform_n: "パッケージ版／ダウンロード版",
  trisdate: null,
  tristat: null,
  sslurl: [
    "0f5cc8b95c4eb3d5fa5ff07e97301df8f826e3b52b320ecb9467cd9f2619006f",
    "2b72573d34a22a5c86e47e8d2ac8aae216b87e71c2bbc76888ed5667947535fc",
    "bdfaf4d0ccc593e19d07145af0f60dc03ccce5a279d98ba32b34ee5e022272db",
    "404003fd44ab38971cfd7186e2b0dda691775c4f6ba6d40b14762d8e8406738f",
    "b2f356cf824622ea2965a862d3d5939a0be4c7e20a343c5dddc42787cb531aef",
    "f065ad997165fc59c691b7510b8ac89dc5fd428ac781ea7524e6168b0fdbe1fe",
  ],
  mvtype: [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
  ],
  mvname: [
    "【Nintendo Labo】Toy-Conであそべる『ゼルダの伝説 ブレス オブ ザ ワイルド』",
    "ゼルダの伝説 ブレス オブ ザ ワイルド エキスパンション・パス 英傑たちの詩 トレーラー",
    "ゼルダの伝説 ブレス オブ ザ ワイルド エキスパンション・パス トレーラー [E3 2017]",
    "ゼルダの伝説 ブレス オブ ザ ワイルド 追加コンテンツのお知らせ",
    "ゼルダの伝説 ブレス オブ ザ ワイルド 米国任天堂スタッフによるプレイ映像",
    "ゼルダの伝説 ブレス オブ ザ ワイルド 3rd トレーラー",
    "ゼルダの伝説 ブレス オブ ザ ワイルド 2nd トレーラー",
    "ゼルダの伝説 ブレス オブ ザ ワイルド 1stトレーラー",
    "ゲームセンターDX 「ゼルダの伝説 ブレス オブ ザ ワイルド」",
    "THE MAKING OF ゼルダの伝説 ブレス オブ ザ ワイルド [開発のはじまり]",
    "THE MAKING OF ゼルダの伝説 ブレス オブ ザ ワイルド [オープンエア]",
    "THE MAKING OF ゼルダの伝説 ブレス オブ ザ ワイルド [ストーリー/キャラクター]",
    "THE MAKING OF ゼルダの伝説 ブレス オブ ザ ワイルド [番外編]",
    "【Nintendo Labo】Toy-Conであそべる『ゼルダの伝説 ブレス オブ ザ ワイルド』",
    "ゼルダの伝説 ブレス オブ ザ ワイルド エキスパンション・パス 英傑たちの詩 トレーラー",
    "ゼルダの伝説 ブレス オブ ザ ワイルド 3rd トレーラー",
    "ゼルダの伝説 ブレス オブ ザ ワイルド 追加コンテンツのお知らせ",
    "ゼルダの伝説 ブレス オブ ザ ワイルド 米国任天堂スタッフによるプレイ映像",
    "ゼルダの伝説 ブレス オブ ザ ワイルド 2nd トレーラー",
    "ゼルダの伝説 ブレス オブ ザ ワイルド 1stトレーラー",
    "ゲームセンターDX 「ゼルダの伝説 ブレス オブ ザ ワイルド」",
    "THE MAKING OF ゼルダの伝説 ブレス オブ ザ ワイルド [開発のはじまり]",
    "THE MAKING OF ゼルダの伝説 ブレス オブ ザ ワイルド [オープンエア]",
    "THE MAKING OF ゼルダの伝説 ブレス オブ ザ ワイルド [ストーリー/キャラクター]",
    "THE MAKING OF ゼルダの伝説 ブレス オブ ザ ワイルド [番外編]",
  ],
  mvurl: [
    "/m/217b498d71c10f140c54c742456b27b544e675b571650f0e3f423bf01f428d25.mp4",
    "/m/d34c1128aebb431923a1c0450a38e03b1da23f45f1d23d0444cf9ab49de370a5.mp4",
    "/m/feba6fee44ae59cc79336e8dc8abca33961df57bcb582c3d14f325af9530130b.mp4",
    "/m/a2f24419005dee28b9dea32e31bb2af7d109206282a37f9b912d2d027c746d22.mp4",
    "/m/eb39c5565dc3963d16717a55edd8685baf2cfac81982d3c673d7b74dd9331954.mp4",
    "/m/3dcda51e440c3a58fc6cc4482fc599b2b3c7590571617bb93c8173aff48256c2.mp4",
    "/m/1f1a13640c64fe5cdd0375ef5c070e4abc04e24fcd5926bfa19353e737249dad.mp4",
    "/m/4efedf9f6d3cdae5b777ea329389fe1ecbf478b41d4fa7e726ca3cb032cece2c.mp4",
    "/m/4e1d9e8217f688ac5967b8cb02004074938845c742d2babdb18c4c8b809f6cdb.mp4",
    "/m/32a2582b6421db2082c733aa7f0f13b842492bcc2327170752362abebb3e70cd.mp4",
    "/m/c34fc5f9ebf6f33cd295932d22c25fdbcbf2329dd8e410fc288e75ca16ea5ea2.mp4",
    "/m/fe0793f7bf9d896c592734240bd9855910467bb336a8dc873753781e075118db.mp4",
    "/m/77810961eebcbc8f6b9d5951711ba3913bff10ab6dd7beaa0f4680d441357bba.mp4",
    "https://www.youtube.com/watch?v=RLKSq86YQ-0",
    "https://www.youtube.com/watch?v=lfqwj4-WJ3w",
    "https://www.youtube.com/watch?v=1yIHLQJNvDw",
    "https://www.youtube.com/watch?v=SF9DwkdnnIY",
    "https://www.youtube.com/watch?v=pxO_CiQTBj0",
    "https://www.youtube.com/watch?v=c6zihcUDj6Y",
    "https://www.youtube.com/watch?v=GjPidZXIuzs",
    "https://www.youtube.com/watch?v=JdiKzCzLdpo",
    "https://www.youtube.com/watch?v=B4bHdcQnzjU",
    "https://www.youtube.com/watch?v=ZwqFNZfSvCA",
    "https://www.youtube.com/watch?v=9mSgOEb3ttI",
    "https://www.youtube.com/watch?v=Cx4menPBSPk",
  ],
  mvsdates: [
    "2019-04-05 10:00:00",
    "2017-12-08 14:00:00",
    "2017-06-14 02:00:00",
    "2017-02-15 10:00:00",
    "2016-12-02 19:00:00",
    "2017-01-13 14:00:00",
    "2016-12-02 11:00:00",
    "2016-06-15 02:00:00",
    "2016-10-26 10:00:00",
    "2017-03-15 10:00:00",
    "2017-03-15 10:00:00",
    "2017-03-15 10:00:00",
    "2017-03-29 10:00:00",
    "2019-04-05 10:00:00",
    "2017-12-08 14:00:00",
    "2017-02-26 00:00:00",
    "2017-02-26 00:00:00",
    "2017-02-26 00:00:00",
    "2017-02-26 00:00:00",
    "2017-02-26 00:00:00",
    "2017-02-26 00:00:00",
    "2017-03-15 10:00:00",
    "2017-03-15 10:00:00",
    "2017-03-15 10:00:00",
    "2017-03-29 10:00:00",
  ],
  mvedates: null,
  siurl: null,
  dcolors: ["4E6381", "FBF8E8", "F6ED54"],
  sctg: "dl_soft",
  score: -0.28883538,
};

describe("JapanIntegrationSource", () => {
  afterEach(() => sinon.restore());

  it("should return game", async () => {
    const dumper = new JapanDumper();
    sinon.stub(dumper, "getFullDump").resolves([botw as any]);

    sinon
      .stub(CachedTranslationService, "translate")
      .resolves({ text: "The Legend of Zelda: Breath of the Wild" } as any);

    const instance = JapanIntegrationSource(dumper);
    const games = (await instance.next()).value! as IntegrationGame[];
    expect(games.length).to.be.deep.eq(1);
    const game = games.pop();
    expect(game?.nsuid).to.be.eq(JapaneseZeldaBreathOfTheWildNSUID);
    expect(game?.productCode).to.be.eq("AAAAA");
    assert.sameMembers(game?.uniqueIds || [], [
      "AAAAA",
      JapaneseZeldaBreathOfTheWildNSUID,
      "thelegendofzeldabreathofthewild",
    ]);
  });
});
