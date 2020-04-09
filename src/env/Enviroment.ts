export const Environment = {
  isProduction: () => process.env.NODE_ENV === "production",
  ifProduction: <T>(value: T) => {
    return {
      else: <O>(otherValue: O) => (Environment.isProduction() ? value : otherValue),
      elseNull: () => (Environment.isProduction() ? value : null),
      elseUndefined: () => (Environment.isProduction() ? value : undefined),
    };
  },
};
