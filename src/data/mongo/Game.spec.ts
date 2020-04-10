/* eslint-disable no-unused-expressions */
import { describe, it, afterEach } from "mocha";
import sinon from "sinon";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import mongoose from "mongoose";
import { Game } from "./Game";

chai.should();
chai.use(chaiAsPromised);

describe("Game", () => {
  afterEach(() => {
    sinon.restore();
    mongoose.connection.deleteModel(/.+/);
  });

  it("should be created successfully", () => {
    const instance = new Game();
    expect(instance).to.be.instanceOf(Game);
  });

  it("should error if _id is not defined", (done) => {
    const instance = new Game({ name: "Horizon" });

    instance.validate().should.be.rejected.notify(done);
  });

  it("should error if title is not defined", (done) => {
    const instance = new Game({ _id: 1 });

    instance.validate().should.be.rejected.notify(done);
  });
});
