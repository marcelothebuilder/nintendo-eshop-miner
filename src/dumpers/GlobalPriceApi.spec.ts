import { expect } from "chai";
import { describe, it } from "mocha";
import { GlobalPriceApi } from "./GlobalPriceApi";

describe("GlobalPriceApi", () => {
  it("should be created successfully", () => {
    // eslint-disable-next-line no-new
    const g = new GlobalPriceApi();
    expect(g).to.be.instanceOf(GlobalPriceApi);
  });
});
