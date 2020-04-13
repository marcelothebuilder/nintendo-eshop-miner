export const buildUniqueId = (input: string) =>
  input
    .toLowerCase()
    .replace(/for nintendo switch$/, "")
    .replace(/nintendo switch$/, "")
    .replace(/switch$/, "")
    // normalizing from https://stackoverflow.com/a/37511463/11128168
    .normalize("NFD") // normalize()ing to NFD Unicode normal form decomposes combined graphemes into the combination of simple ones. The è of Crème ends up expressed as e + ̀.
    .replace(/[^0-9A-Za-z]/g, "");
