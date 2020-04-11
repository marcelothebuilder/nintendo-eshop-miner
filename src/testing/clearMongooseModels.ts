/* eslint-disable import/no-extraneous-dependencies */
/* istanbul ignore file */
import { after, before } from "mocha";
import mongoose from "mongoose";

before(async () => {
  mongoose.connection.deleteModel(/.+/);
});

after(async () => {
  mongoose.connection.deleteModel(/.+/);
});
