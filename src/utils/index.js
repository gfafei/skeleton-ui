export const noop = function() {}

export const uuid = () => {
  return Date.now().toString(36) + Math.round(Math.random()).toString(36);
}
