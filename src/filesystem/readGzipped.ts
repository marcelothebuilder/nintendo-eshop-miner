import { createReadStream, PathLike } from "fs";
import { pipeline } from "stream";
import { createGunzip } from "zlib";
import { promisify } from "util";
import MemoryStream from "memorystream";

export const readGzipped = async (path: PathLike) => {
  const rs = createReadStream(path);
  const gz = createGunzip();

  const mms = new MemoryStream(
    null as any,
    {
      readable: false,
    } as any,
  );

  return promisify(pipeline)(rs, gz, mms).then(() => mms.toString());
};
