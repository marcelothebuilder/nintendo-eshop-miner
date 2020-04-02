import { expect } from "chai";
import { describe, it, afterEach } from "mocha";
import sinon from "sinon";
import { JapanDumper } from "./JapanDumper";

describe("JapanDumper tests", () => {
  afterEach(() => sinon.restore());

  it("JapanDumper should be created successfully", () => {
    // eslint-disable-next-line no-new
    const instance = new JapanDumper();
    expect(instance).to.be.instanceOf(JapanDumper);
  });
});
