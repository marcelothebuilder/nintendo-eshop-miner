// eslint-disable-next-line import/no-extraneous-dependencies
import { Done } from "mocha";

export const checkAndNotify = (fn: () => void, done: Done) => {
  try {
    fn();
    done();
  } catch (e) {
    done(e);
  }
};
