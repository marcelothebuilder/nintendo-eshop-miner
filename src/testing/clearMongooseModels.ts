/* eslint-disable import/no-extraneous-dependencies */
/* istanbul ignore file */
import mongoose from "mongoose";

mongoose.connection.deleteModel(/.+/);
