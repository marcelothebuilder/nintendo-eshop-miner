import _ from "lodash";
import { regexpJoin } from "../regex/regexpJoin";

/**
 * matches ids at $1
 */
const NSUID_REGEX_MATCHER = regexpJoin(
  /(?<!\d)/, // negative look-behind. dont match if the ID has numbers before it
  /(7\d{9,14})/, // id starting with 7 and having AT MOST 15 digits
  /(?!\d)/, // negative look-ahead, dont match IDS if it has numbers after it
);

const hasNsuid = (s: string) => NSUID_REGEX_MATCHER.test(s);
const extractNsuid = (s: string) => (NSUID_REGEX_MATCHER.exec(s) || [])[1];
const parseBase10Int = (i: string) => parseInt(i, 10);

export const parseNsuid = (nsuid: string): number | null => {
  if (_.isNil(nsuid)) return null;
  if (!hasNsuid(nsuid)) return null;
  return parseBase10Int(extractNsuid(nsuid));
};
