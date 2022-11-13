export const createStyleClass = (...args) => {
  if (!Array.isArray(args) && args.length <= 0) return;
  return args.reduce((acc, curr) => `${acc} ${curr}`.trim(), "");
};
