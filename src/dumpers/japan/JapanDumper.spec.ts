/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/camelcase */
import { expect } from "chai";
import { describe, it, afterEach, setup, teardown } from "mocha";
import sinon from "sinon";
import moxios from "moxios";
import { JapanDumper, AxiosInstance } from "./JapanDumper";
import { checkAndNotify } from "../../testing/checkAndNotify";
import { readJSON } from "../../filesystem/readJSON";

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
    data = await readJSON("./resources/tests/japan-dbdump.json");
    moxios.install(AxiosInstance);
  });

  teardown(() => moxios.uninstall());

  afterEach(() => sinon.restore());

  it("JapanDumper should be created successfully", () => {
    // eslint-disable-next-line no-new
    const instance = new JapanDumper();
    expect(instance).to.be.instanceOf(JapanDumper);
  });

  it("JapanDumper should be created successfully with empty options", () => {
    // eslint-disable-next-line no-new
    const instance = new JapanDumper({});
    expect(instance).to.be.instanceOf(JapanDumper);
  });

  describe("getPage", () => {
    it("should fetch only page 1 when called with page 1 argument", (done) => {
      const responseSpy = sinon.spy();

      const p = new JapanDumper().getPage(1).then(responseSpy);

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

        await p;

        checkAndNotify(() => {
          expect(moxios.requests.count()).to.eq(1);
          expect(responseSpy.firstCall.args[0].result.items[0]).to.deep.eq(data[0]);
        }, done);
      });
    });
  });

  describe("getFullDump", () => {
    it("should make only one request when first page has all items", (done) => {
      const responseSpy = sinon.spy();

      new JapanDumper({ pageSize: 1 }).getFullDump().then(responseSpy);

      moxios.wait(async () => {
        await moxios.requests.at(0).respondWith(
          response({
            query: {},
            result: {
              total: 2,
              items: data.slice(0, 2),
            },
            status: 0,
          }),
        );

        checkAndNotify(() => {
          expect(moxios.requests.count()).to.eq(1);
          expect(responseSpy.called).to.be.true;
          expect(responseSpy.lastCall.args[0]).to.deep.equal(data.slice(0, 2));
        }, done);
      });
    });

    it("should error when page has more items than item count", (done) => {
      const responseSpy = sinon.spy();

      expect(new JapanDumper({ pageSize: 300 }).getFullDump().then(responseSpy)).to.eventually.be.rejected.notify(done);

      moxios.wait(async () => {
        await moxios.requests.at(0).respondWith(
          response({
            query: {},
            result: {
              total: 1,
              items: data.slice(0, 2),
            },
            status: 0,
          }),
        );
      });
    });

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

  describe("getCount", () => {
    it("should return items count", (done) => {
      const responseSpy = sinon.spy();

      new JapanDumper({ pageSize: 1 }).getCount().then(responseSpy);

      moxios.wait(async () => {
        await moxios.requests.at(0).respondWith(
          response({
            query: {},
            result: {
              total: Number.MAX_SAFE_INTEGER,
              items: data.slice(0, 2),
            },
            status: 0,
          }),
        );

        checkAndNotify(() => {
          expect(moxios.requests.count()).to.eq(1);
          expect(responseSpy.called).to.be.true;
          expect(responseSpy.lastCall.args[0]).to.deep.equal(Number.MAX_SAFE_INTEGER);
        }, done);
      });
    });
  });
});
