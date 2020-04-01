import { expect } from "chai";
import { describe, it, afterEach } from "mocha";
import sinon from "sinon";
import { promiseSerial } from "./promiseSerial";

describe("promiseSerial", () => {
  afterEach(() => sinon.restore());

  it("should concatenate results of two array returning promises", async () => {
    const promises = [() => Promise.resolve([1]), () => Promise.resolve([2, 3])];

    expect(await promiseSerial(promises)).to.deep.eq([1, 2, 3]);
  });
});
