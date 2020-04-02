import { expect } from "chai";
import { describe, it, afterEach } from "mocha";
import sinon from "sinon";
import winston, { Logger } from "winston";
import { adaptWinstonToAlgolia } from "./algoliaAdapter";

describe("algoliaAdapter tests", () => {
  afterEach(() => sinon.restore());

  it("should promisefy method", () => {
    const logger = winston.createLogger();
    const adapted = adaptWinstonToAlgolia((sinon.stub(logger) as unknown) as Logger);
    expect(adapted.debug()).to.be.instanceOf(Promise);
    expect(adapted.error()).to.be.instanceOf(Promise);
    expect(adapted.info()).to.be.instanceOf(Promise);
  });
});
