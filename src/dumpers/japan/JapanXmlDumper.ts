import axios from "axios";
import http from "http";
import https from "https";
import { Parser as XmlParser } from "xml2js";
import _ from "lodash";
import { JapanXmlGame } from "./JapanXmlTypes";

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

const parseXmlString = async (xmlString: string) =>
  new XmlParser({
    async: true,
    trim: true,
    explicitRoot: false,
    emptyTag: null,
    normalize: true,
    explicitArray: false,
    tagNameProcessors: [_.camelCase],
    attrNameProcessors: [_.camelCase],
    valueProcessors: [_.camelCase],
    attrValueProcessors: [_.camelCase],
  }).parseStringPromise(xmlString);

export const AxiosInstance = axios.create({
  baseURL: "https://www.nintendo.co.jp/data/software/xml/switch.xml",
  httpAgent,
  httpsAgent,
  method: "GET",
  headers: {
    Connection: "keep-alive",
    DNT: "1",
    Host: "www.nintendo.co.jp",
  },
});

export class JapanXmlDumper {
  private axios = AxiosInstance;

  async getFullDump(): Promise<JapanXmlGame[]> {
    return this.axios
      .get("")
      .then((r) => r.data)
      .then(parseXmlString)
      .then((document) => document.titleInfo);
  }
}
