/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/camelcase */
import { expect } from "chai";
import { describe, it, afterEach, setup, teardown } from "mocha";
import sinon from "sinon";
import moxios from "moxios";
import { JapanDumper, AxiosInstance } from "./JapanDumper";
import { readGzipped } from "../../filesystem/readGzipped";
import { checkAndNotify } from "../../testing/checkAndNotify";

const response = (obj: object) => ({
  status: 200,
  headers: {
    "Content-Type": "application/json",
  },
  response: JSON.stringify(obj, null, 2),
});

describe("JapanDumper tests", () => {
  let data: any[] = [];

  setup(async () => {
    data = JSON.parse(await readGzipped("./dumps/japan-dbdump.json.gz"));
    moxios.install(AxiosInstance);
  });

  teardown(() => moxios.uninstall());

  afterEach(() => sinon.restore());

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
            query: {},
            result: {
              total: 1,
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

  describe("getFullDump", () => {
    it("should make more than one request when theres more results than a single page can handle", (done) => {
      const responseSpy = sinon.spy();

      new JapanDumper({ pageSize: 1 }).getFullDump().then(responseSpy);

      moxios.wait(async () => {
        await moxios.requests.at(0).respondWith(
          response({
            query: {},
            result: {
              total: 2,
              items: data.slice(0, 1),
            },
            status: 0,
          }),
        );

        await moxios.requests.at(1).respondWith(
          response({
            query: {},
            result: {
              total: 2,
              items: data.slice(1, 2),
            },
            status: 0,
          }),
        );

        checkAndNotify(() => {
          expect(moxios.requests.count()).to.eq(2);
          expect(responseSpy.called).to.be.true;
          expect(responseSpy.lastCall.args[0]).to.deep.equal(data.slice(0, 2));
        }, done);
      });
    });
  });
});
