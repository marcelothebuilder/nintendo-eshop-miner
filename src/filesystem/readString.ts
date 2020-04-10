import fs, { PathLike } from "fs";

export const readString = async (path: PathLike, encoding = "utf-8"): Promise<string> => {
  const content = await fs.promises.readFile(path, encoding);
  return content.toString();
};

export const readStringSync = (path: PathLike, encoding = "utf-8"): string => {
  const content = fs.readFileSync(path, encoding);
  return content.toString();
};
