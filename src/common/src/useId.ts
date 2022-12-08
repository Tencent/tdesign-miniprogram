const defaultId = {
  blur: Math.floor(Math.random() * 100),
  current: 0,
};

export const useId = (prefix: string): string => `${prefix}-id-${defaultId.blur}-${defaultId.current++}`;
