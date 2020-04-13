export const buildSlug = (system: string) => (title: string) => {
  const titleFixed = title
    .toLocaleLowerCase()
    .replace(/'/g, "")
    .replace(/[^0-9A-Za-z]/g, "-")
    .replace(/-+/g, "-");
  return `${titleFixed}-${system.toLocaleLowerCase()}`;
};
