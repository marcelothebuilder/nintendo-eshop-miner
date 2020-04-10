import { expect } from "chai";
import { describe, it, afterEach, setup, teardown } from "mocha";
import sinon from "sinon";
import moxios from "moxios";
import { JapanXmlDumper, AxiosInstance } from "./JapanXmlDumper";
import { checkAndNotify } from "../../testing/checkAndNotify";
import { readString } from "../../filesystem/readString";

describe("JapanXmlDumper", () => {
  afterEach(() => sinon.restore());

  let xmlContent: string;

  setup(async () => {
    xmlContent = await readString("resources/tests/japan-xml-raw.xml");
    moxios.install(AxiosInstance);
  });

  teardown(() => moxios.uninstall());

  it("JapanXmlDumper should be created successfully", () => {
    // eslint-disable-next-line no-new
    const instance = new JapanXmlDumper();
    expect(instance).to.be.instanceOf(JapanXmlDumper);
  });

  describe("getFullDump", () => {
    it("must return games correctly", (done) => {
      const responseSpy = sinon.spy();

      const p = new JapanXmlDumper().getFullDump().then(responseSpy).catch(done);

      moxios.wait(async () => {
        await moxios.requests.mostRecent().respondWith({
          responseText: xmlContent,
        });

        await p;

        checkAndNotify(() => {
          expect(responseSpy.callCount).to.be.eq(1);
          expect(responseSpy.firstCall.lastArg.length).to.be.eq(1958);
        }, done);
      });
    });
  });
});
