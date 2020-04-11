/* eslint-disable no-unused-expressions */
import { expect } from "chai";
import { describe, it, afterEach, beforeEach } from "mocha";
import sinon from "sinon";
import mockedEnv, { RestoreFn } from "mocked-env";
import { Environment } from "./Environment";

describe("Environment", () => {
  let restoreEnv: RestoreFn = () => null;

  afterEach(() => sinon.restore());

  afterEach(() => restoreEnv());

  describe("when env is production", () => {
    beforeEach(() => {
      restoreEnv = mockedEnv({ NODE_ENV: "production" });
    });

    it("should return true for isProduction", () => {
      expect(Environment.isProduction()).to.be.true;
    });

    it("should return 1 for ifProduction when using else", () => {
      expect(Environment.ifProduction(1).else(0)).to.eq(1);
    });

    it("should return 1 for ifProduction when using elseNull", () => {
      expect(Environment.ifProduction(1).elseNull()).to.eq(1);
    });

    it("should return 1 for ifProduction when using elseUndefined", () => {
      expect(Environment.ifProduction(1).elseUndefined()).to.eq(1);
    });
  });

  describe("when env is not production", () => {
    beforeEach(() => {
      restoreEnv = mockedEnv({ NODE_ENV: "not_production" });
    });

    it("isProduction should return false", () => {
      expect(Environment.isProduction()).to.be.false;
    });

    it("should return 0 for ifProduction when using else", () => {
      expect(Environment.ifProduction(1).else(0)).to.eq(0);
    });

    it("should return null for ifProduction when using elseNull", () => {
      expect(Environment.ifProduction(1).elseNull()).to.be.null;
    });

    it("should return undefined for ifProduction when using elseUndefined", () => {
      expect(Environment.ifProduction(1).elseUndefined()).to.eq(undefined);
    });
  });

  it("isProduction should return false when env is null", () => {
    restoreEnv = mockedEnv({});
    expect(Environment.isProduction()).to.be.false;
  });
});
