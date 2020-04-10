/* eslint-disable import/no-extraneous-dependencies */
/* istanbul ignore file */
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import moxios from "moxios";
import { after, before } from "mocha";
import mongoose from "mongoose";

chai.use(chaiAsPromised);
chai.should();
moxios.delay = 1;

before(async () => {
  mongoose.connection.deleteModel(/.+/);
});

after(async () => {
  mongoose.connection.deleteModel(/.+/);
});
