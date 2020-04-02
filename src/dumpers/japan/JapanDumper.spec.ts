/* eslint-disable @typescript-eslint/camelcase */
import { expect } from "chai";
import { describe, it, afterEach, beforeEach, setup, teardown } from "mocha";
import sinon from "sinon";
import moxios from "moxios";
import axios from "axios";
import { JapanDumper, AxiosInstance } from "./JapanDumper";
import { readGzipped } from "../../filesystem/readGzipped";
import { checkAndNotify } from "../../testing/checkAndNotify";
import { assert } from "../../logging/assert";

const response = (obj: object) => ({
  status: 200,
  headers: {
    "Content-Type": "application/json",
  },
  response: JSON.stringify(obj, null, 2),
});

describe("JapanDumper tests", () => {
  setup(() => moxios.install(AxiosInstance));

  teardown(() => moxios.uninstall());

  afterEach(() => sinon.restore());

  let data: any[] = [];
  beforeEach(async () => {
    data = JSON.parse(await readGzipped("./dumps/japan-dbdump.json.gz"));
  });

  it("JapanDumper should be created successfully", () => {
    // eslint-disable-next-line no-new
    const instance = new JapanDumper();
    expect(instance).to.be.instanceOf(JapanDumper);
  });

  describe("getPage", () => {
    it("should fetch only page 1 when called with page 1 argument", (done) => {
      const responseSpy = sinon.spy();

      new JapanDumper().getPage(1).then(responseSpy);

      moxios.wait(async () => {
        await moxios.requests.mostRecent().respondWith(
          response({
            query: {
              q: null,
              limit: 1,
              page: 1,
              sort: "70050000005627 asc",
              qf: null,
              hl: 0,
              mm: null,
              fq: null,
              facet: true,
              facet_limit: null,
              stats: false,
              suggest_item_test: null,
              el: true,
              d: 10,
              sf: null,
              pt: null,
              sbd: null,
              gf: null,
              glimit: 1,
              gpage: 1,
              gsort: null,
              gt: true,
              df: null,
              ff: null,
              spt: null,
              opt_hard: ["1_HAC"],
              opt_ssitu: ["onsale"],
              opt_pdate: ["~2020-04-03 00:00:28"],
              opt_edate: ["2020-04-03 00:00:29~"],
            },
            result: {
              total: 4173,
              items: data.slice(0, 1),
            },
            status: 0,
          }),
        );

        checkAndNotify(() => {
          expect(moxios.requests.count()).to.eq(1);
          expect(responseSpy.firstCall.args[0].result.items[0]).to.deep.eq(data[0]);
        }, done);
      });
    });
  });
});
