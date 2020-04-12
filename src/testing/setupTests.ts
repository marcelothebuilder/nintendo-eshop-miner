/* eslint-disable import/no-extraneous-dependencies */
/* istanbul ignore file */
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import moxios from "moxios";
import "source-map-support/register";

chai.use(chaiAsPromised);
chai.should();
moxios.delay = 1;
