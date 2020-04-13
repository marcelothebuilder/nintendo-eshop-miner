export const buildSlug = (system: string) => (title: string) => {
  const titleFixed = title
    .toLowerCase()
    // normalizing from https://stackoverflow.com/a/37511463/11128168
    .normalize("NFD") // normalize()ing to NFD Unicode normal form decomposes combined graphemes into the combination of simple ones. The è of Crème ends up expressed as e + ̀.
    .replace(/[\u0300-\u036f]/g, "") // Using a regex character class to match the U+0300 → U+036F range, it is now trivial to globally get rid of the diacritics, which the Unicode standard conveniently groups as the Combining Diacritical Marks Unicode block.
    .replace(/&/g, "and")
    .replace(/\./g, "")
    // .replace(/\+/g, "_plus")
    .replace(/'/g, "")
    .replace(/[^0-9A-Za-z]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+/g, "") // starting "-"
    .replace(/-+$/g, "") // ending "-"
    .replace(/-?for*nintendo*switch$/, "")
    .replace(/-?nintendo*switch$/, "")
    .replace(/-?switch$/, "");
  return `${titleFixed}-${system.toLocaleLowerCase()}`;
};

// import { buildUniqueId } from "./buildUniqueId";

// export const buildSlug = (system: string) => (title: string) => `${buildUniqueId(title)}-${system}`;
