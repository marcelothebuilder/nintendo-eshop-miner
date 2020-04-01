import axios, { AxiosInstance } from "axios";
import http from "http";
import https from "https";
import { EuropeSearchResponse, EuropeDocument, DocumentType, SystemID, SwitchGameDocument } from "./EuropeTypes";

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

const addJsonpInterceptor = (axiosClient: AxiosInstance) => {
  axiosClient.interceptors.response.use((response) => {
    // console.log(response.data.responseHeader);
    return response;
  });
  return axiosClient;
};

const getAscDesc = (key: string) => {
  return {
    asc: () => `${key} asc`,
    desc: () => `${key} desc`,
  };
};

const EuropeSorting = {
  TITLE: getAscDesc("sorting_title"),
  DATE_FROM: getAscDesc("date_from"),
  CHANGE_DATE: getAscDesc("change_date"),
  FS_ID: getAscDesc("fs_id"),
};

interface EuropeSearchOptions {
  afterChangeDate?: Date;
}

export class EuropeDumper {
  private client = addJsonpInterceptor(
    axios.create({
      baseURL: "https://searching.nintendo-europe.com/en/select",
      httpAgent,
      httpsAgent,
      withCredentials: true,
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:74.0) Gecko/20100101 Firefox/74.0",
        Accept: "*/*",
        "Accept-Language": "pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3",
      },
    }),
  );

  async getSwitchGames(options: EuropeSearchOptions): Promise<SwitchGameDocument[]> {
    return this.searchSolr<SwitchGameDocument>({
      q: "*",
      fq: [`type:${DocumentType.Game}`, `playable_on_txt:${SystemID.Switch}`].join(" AND "),
      sort: EuropeSorting.CHANGE_DATE.asc(), // maybe we can do incremental search by searching from date_from (or change_date to get updates) desc? - default to sorting-itlte
      start: 0,
      rows: 10000,
      ...EuropeDumper.toSolrParams(options),
    }).then((r) => r.response.docs);
  }

  async getFullDump(options: EuropeSearchOptions): Promise<EuropeSearchResponse<EuropeDocument>> {
    return this.searchSolr({
      q: "*",
      fq: "*:*",
      start: 0,
      rows: 100000,
      sort: EuropeSorting.FS_ID.asc(),
      ...EuropeDumper.toSolrParams(options),
    });
  }

  private async searchSolr<TDocumentType>(paramsObject: object): Promise<EuropeSearchResponse<TDocumentType>> {
    return this.client
      .request({
        params: {
          ...paramsObject,
          wt: "json",
        },
      })
      .then((r) => r.data);
  }

  private static toSolrParams(options: EuropeSearchOptions): object {
    const solrOptions: Record<string, string> = {};

    if (!options) return solrOptions;

    const { afterChangeDate } = options;

    if (afterChangeDate) {
      solrOptions.q = `change_date:{${afterChangeDate.toISOString()} TO NOW]`;
    }

    return solrOptions;
  }
}
