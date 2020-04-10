import { PathLike } from "fs";
import { readString } from "./readString";

export const readJSON = async (path: PathLike) => {
  return JSON.parse(await readString(path));
};
