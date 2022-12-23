export const uuid = (prefix: string = ''): string => {
  return prefix + '_' + Math.random().toString(36).substring(2, 10);
};
