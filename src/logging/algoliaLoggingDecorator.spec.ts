import { expect } from "chai";
import { describe, it, afterEach } from "mocha";
import sinon from "sinon";
import algolia from "algoliasearch/lite";
import winston from "winston";
import { decorateWithLogger } from "./algoliaLoggingDecorator";

describe("algoliaLoggingDecorator", () => {
  afterEach(() => sinon.restore());

  it("algoliaLoggingDecorator should log success", async () => {
    const indexStub = sinon.stub(algolia("", "").initIndex(""));
    const loggerStub = sinon.stub(winston.createLogger());
    indexStub.search.resolves(null as any);
    const decorated = decorateWithLogger(indexStub as any, loggerStub as any);
    await decorated.search("");
    expect(loggerStub.debug.callCount).to.be.eq(2);
    expect(loggerStub.debug.getCall(0).args[0]).to.match(/.*SearchIndex\.search.*/);
    expect(loggerStub.debug.getCall(1).args[0]).to.match(/.*SearchIndex\.search.*/);
  });

  it("algoliaLoggingDecorator should log with a human-readable request id", async () => {
    const indexStub = sinon.stub(algolia("", "").initIndex(""));
    const loggerStub = sinon.stub(winston.createLogger());
    indexStub.search.resolves(null as any);
    const decorated = decorateWithLogger(indexStub as any, loggerStub as any);
    await decorated.search("");
    expect(loggerStub.debug.callCount).to.be.eq(2);
    expect(loggerStub.debug.getCall(0).args[0]).to.match(/\[\w+\]/);
    expect(loggerStub.debug.getCall(1).args[0]).to.match(/\[\w+\]/);
  });

  it("algoliaLoggingDecorator human-readable must not change", async () => {
    const indexStub = sinon.stub(algolia("", "").initIndex(""));
    const loggerStub = sinon.stub(winston.createLogger());
    indexStub.search.resolves(null as any);
    const decorated = decorateWithLogger(indexStub as any, loggerStub as any);
    await decorated.search("");
    expect(loggerStub.debug.callCount).to.be.eq(2);
    const firstRequestId = String(loggerStub.debug.getCall(0).args[0] || "").match(/\[(\w+)\]/) || [];
    const secondRequestId = String(loggerStub.debug.getCall(1).args[0] || "").match(/\[(\w+)\]/) || [];

    expect(firstRequestId[1]).to.be.eq(secondRequestId[1]);
  });

  it("algoliaLoggingDecorator should log error", async () => {
    const indexStub = sinon.stub(algolia("", "").initIndex(""));
    const loggerStub = sinon.stub(winston.createLogger());
    indexStub.search.rejects("lalal" as any);
    const decorated = decorateWithLogger(indexStub as any, loggerStub as any);
    try {
      await decorated.search("");
      // eslint-disable-next-line no-empty
    } catch (e) {}

    expect(loggerStub.error.callCount).to.be.eq(1);
    expect(loggerStub.error.firstCall.args[0]).to.match(/.*SearchIndex\.search.*/);
  });
});
