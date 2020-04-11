import { expect } from "chai";
import { describe, it, afterEach, setup, teardown } from "mocha";
import sinon from "sinon";
import moxios from "moxios";
import { EuropeDumper, AxiosInstance } from "./EuropeDumper";
import { checkAndNotify } from "../../testing/checkAndNotify";
import { readJSONSync } from "../../filesystem/readJSON";

const response = (obj: object) => ({
  status: 200,
  headers: {
    "Content-Type": "application/json",
  },
  response: JSON.stringify(obj, null, 2),
});

describe("EuropeDumper", () => {
  afterEach(() => sinon.restore());

  setup(() => {
    moxios.install(AxiosInstance);
  });

  teardown(() => moxios.uninstall());

  it("should be created successfully", () => {
    // eslint-disable-next-line no-new
    const instance = new EuropeDumper("ru");
    expect(instance).to.be.instanceOf(EuropeDumper);
  });

  // eslint-disable-next-line func-names
  it("getSwitchGamesCount should return switch games count", (done) => {
    const responseSpy = sinon.spy();
    const instance = new EuropeDumper("ru");
    const p = instance.getSwitchGamesCount({}).then(responseSpy);

    moxios.wait(async () => {
      await moxios.requests
        .at(0)
        .respondWith(response(readJSONSync("resources/tests/dumpers/europe/EuropeDumper/count.json")));

      await p;

      checkAndNotify(() => {
        expect(responseSpy.firstCall.args[0]).to.deep.equal(1);
      }, done);
    });
  });

  // eslint-disable-next-line func-names
  it("getSwitchGames should return switch games", (done) => {
    const responseSpy = sinon.spy();
    const instance = new EuropeDumper("ru");
    const p = instance.getSwitchGames({}).then(responseSpy);

    moxios.wait(async () => {
      await moxios.requests
        .at(0)
        .respondWith(response(readJSONSync("resources/tests/dumpers/europe/EuropeDumper/botw-only.json")));

      await p;

      checkAndNotify(() => {
        expect(responseSpy.firstCall.args[0].length).to.equal(1);
        expect(responseSpy.firstCall.args[0][0].nsuid_txt[0]).to.equal("70010000000023");
        expect(responseSpy.firstCall.args[0][0].title).to.equal("The Legend of Zelda: Breath of the Wild");
      }, done);
    });
  });
});
