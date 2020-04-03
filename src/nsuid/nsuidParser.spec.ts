import { expect } from "chai";
import { describe, it, afterEach } from "mocha";
import sinon from "sinon";
import { parseNsuid } from "./nsuidParser";

describe("nsuidParser", () => {
  afterEach(() => sinon.restore());

  it("should parse from the end of urls", () => {
    expect(parseNsuid("https://store.blabla.co.kr/70010000025168")).to.be.eq(70010000025168);
  });

  it("should parse from urls with params", () => {
    expect(parseNsuid("https://store.blabla.co.kr/70010000025168?param=1231")).to.be.eq(70010000025168);
  });

  it("should parse from nsuid string", () => {
    expect(parseNsuid("70010000025168")).to.be.eq(70010000025168);
  });

  it("should parse ids with at most 15 digits", () => {
    expect(parseNsuid("7001000002516801")).to.be.eq(null);
  });

  it("should parse ids with at least 10 digits", () => {
    expect(parseNsuid("700100000")).to.be.eq(null);
  });

  it("should be null with id not started with 7", () => {
    expect(parseNsuid("80010000025168")).to.be.eq(null);
  });

  it("should be null with invalid id", () => {
    expect(parseNsuid("lahlahsldh;aj")).to.be.eq(null);
    expect(parseNsuid("18378312")).to.be.eq(null);
  });
});
