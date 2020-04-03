/* eslint-disable no-shadow */
export interface RawChinaGame {
  r_date: number;
  release_date: string;
  r_date_tw: number | string;
  release_date_tw: ReleaseDateTw;
  title: string;
  title_sc: string;
  sale_until: number | string;
  pickup: PickupEnum | number;
  only_for: OnlyFor;
  media: Media;
  lang: Lang;
  maker_publisher: string;
  thumb_img: string;
  thumb_img_sc: string;
  thumb_img_tw: string;
  link: string;
  link_sc: string;
  link_tw: string;
  link_target: string;
  platform: Platform;
  rating: number | string;
  adult_hk: number | string;
  category: string;
  category_sc: string;
  copyright: string;
  copyright_sc: string;
  memo1: string;
  memo2: Memo2;
  memo1_sc: string;
  memo2_sc: Memo2Sc;
  memo1_tw: Memo1Tw;
  memo2_tw: Memo2Tw;
  product_code: string;
  item_code: string;
  price: number | string;
}

export interface ChinaGame extends Omit<RawChinaGame, "release_date"> {
  release_date: Date;
}

export enum Lang {
  CN = "CN",
  Empty = "",
  En = "EN",
  Jp = "JP",
}

export enum Media {
  Eshop = "eshop",
  Package = "package",
}

export enum Memo1Tw {
  Empty = "",
  早期購買特典A4文件夾 = "早期購買特典「A4文件夾」",
  早期購買特典收納袋 = "早期購買特典「收納袋」",
  早期購買特典螢幕擦拭 = "早期購買特典「螢幕擦拭」",
  早期購買特典行李牌 = "早期購買特典「行李牌」",
  遊戲等級審查中 = "遊戲等級審查中",
  首批有機會獲NintendoSwitch觸控筆數量有限送完為止 = "首批有機會獲「Nintendo Switch觸控筆」※數量有限，送完為止。",
  首批有機會獲行李吊牌一個 = "首批有機會獲行李吊牌一個",
  首批有機會獲購物袋一個 = "首批有機會獲購物袋一個",
}

export enum Memo2 {
  Empty = "",
  數量有限送完即止 = "※數量有限，送完即止。",
  早期購買5大特典至2月5日 = "早期購買5大特典至2月5日",
  體驗時間至2月6日1600 = "體驗時間至2月6日16:00",
  體驗版下載序號D3Gm33040M3Bsndb = "體驗版下載序號：D3GM33040M3BSNDB",
}

export enum Memo2Sc {
  Empty = "",
  体验时间至2月6日1600 = "体验时间至2月6日16:00",
  体验版下载序号D3Gm33040M3Bsndb = "体验版下载序号：D3GM33040M3BSNDB",
  数量有限送完为止 = "※数量有限，送完为止。",
  早期购买5大特典至2月5日 = "早期购买5大特典至2月5日",
}

export enum Memo2Tw {
  Empty = "",
  Memo2Tw = " ",
  數量有限送完為止 = "※數量有限，送完為止。",
}

export enum OnlyFor {
  Empty = "",
  Hk = "hk",
}

export enum PickupEnum {
  Empty = "",
  Pickup = "\uf716",
}

export enum Platform {
  NintendoSwitch = "Nintendo Switch",
}

export enum ReleaseDateTw {
  Empty = "",
  The2017121 = "2017.12.1",
  The20171215 = "2017.12.15",
  The2017128 = "2017.12.8",
  The201821 = "2018.2.1",
  The20191031 = "2019.10.31",
  The2019117 = "2019.1.17",
}
