/* eslint-disable func-style */
import _ from "lodash";
import { HookNextFunction } from "mongoose";
import { Region } from "./Region";

export function validatePrice(this: any, next: HookNextFunction) {
  const unique = [];

  const self = this as any;

  for (let i = 0, l = self.prices.length; i < l; i += 1) {
    const { location, currency } = self.prices[i];
    const key = `${location}_${currency}`;

    if (unique.indexOf(key) > -1) {
      return next(new Error("Duplicated price information"));
    }
    unique.push(key);
  }

  return next();
}

export function validateNsuid(this: any, next: HookNextFunction) {
  const self = this as any;

  const { nsuids } = self;

  if (_.isEmpty(nsuids)) {
    return next(new Error("at least 1 nsuid is required"));
  }

  if (_.uniqBy(nsuids, "nsuid").length !== nsuids.length) {
    return next(new Error("Duplicated nsuids.nsuid information"));
  }

  if (_.uniqBy(nsuids, "region").length !== nsuids.length) {
    return next(new Error("Duplicated nsuids.region information"));
  }

  const regions = nsuids.map((n: { region: string }) => n.region);

  const unknownRegions = _.difference(regions, Object.keys(Region));

  if (unknownRegions.length) {
    return next(new Error(`Unknown region in nsuids.region entry ${unknownRegions.toString()}`));
  }

  return next();
}
