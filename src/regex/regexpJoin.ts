export const regexpJoin = (...regexes: RegExp[]) => new RegExp(regexes.map((r) => r.source).join(""));
