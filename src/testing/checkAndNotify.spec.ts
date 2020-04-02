/* eslint-disable no-unused-expressions */
import { expect } from "chai";
import { describe, it, afterEach } from "mocha";
import sinon from "sinon";
import { checkAndNotify } from "./checkAndNotify";

describe("checkAndNotify tests", () => {
  afterEach(() => sinon.restore());

  it("should call done with argument when the function throws", () => {
    const doneSpy = sinon.spy();

    checkAndNotify(() => {
      // eslint-disable-next-line no-unused-expressions
      expect(true).to.be.eq(false);
    }, doneSpy);

    expect(doneSpy.callCount).to.eq(1);
    expect(doneSpy.lastCall.args[0]).to.exist;
  });

  it("should done when the function hasnt throwed", () => {
    const doneSpy = sinon.spy();

    checkAndNotify(() => null, doneSpy);

    expect(doneSpy.callCount).to.eq(1);
    expect(doneSpy.lastCall.args.length).to.eq(0);
  });
});
