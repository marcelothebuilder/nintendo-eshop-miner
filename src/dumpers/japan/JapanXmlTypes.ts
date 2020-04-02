export interface JapanXmlGame {
  initialCode: string;
  titleName: string;
  makerName: string;
  makerKana: null;
  price: string;
  salesDate: string;
  softType: SoftType;
  platformId: string;
  dlIconFlg: string;
  linkUrl: string;
  screenshotImgFlg: string;
  screenshotImgUrl: string;
}

export enum SoftType {
  DL = "dl",
  PkgDL = "pkgDl",
}
