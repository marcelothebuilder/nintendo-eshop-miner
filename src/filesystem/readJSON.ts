import { PathLike, readFileSync } from "fs";
import { readString } from "./readString";

export const readJSON = async (path: PathLike) => {
  return JSON.parse(await readString(path));
};

export const readJSONSync = (path: PathLike) => {
  return JSON.parse(readFileSync(path).toString());
};
