/* eslint-disable no-unused-expressions */
import { describe, it, afterEach } from "mocha";
import sinon from "sinon";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import mongoose from "mongoose";
import { Game } from "./Game";

chai.should();
chai.use(chaiAsPromised);

const getGameDocument = () => {
  return { nsuid: 13131, name: "Zeldinha" };
};

describe("Game", () => {
  afterEach(() => {
    sinon.restore();
    mongoose.connection.deleteModel(/.+/);
  });

  it("should be created successfully", () => {
    const instance = new Game();
    expect(instance).to.be.instanceOf(Game);
  });

  it("should error if title is not defined", (done) => {
    const doc = getGameDocument();
    delete doc.name;
    const instance = new Game(doc);

    instance.validate().should.be.rejected.notify(done);
  });

  it("should not error if all required fields are provided", (done) => {
    const instance = new Game(getGameDocument());

    instance.validate().should.be.fulfilled.notify(done);
  });
});
