export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}

export const isString = (val: unknown): val is string => {
  return typeof val === 'string';
};

export const isNull = <T>(value: T | null): value is null => {
  return value === null;
};

export const isUndefined = <T>(value: T | undefined): value is undefined => value === undefined;

export function isDef(value: unknown): boolean {
  return !isUndefined(value) && !isNull(value);
}

export function isNumber(value: string | number): boolean {
  return typeof value === 'number' || /^-?\d+(\.\d+)?$/.test(value);
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

export function isObject(x: unknown): x is Record<string, unknown> {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

export function isPlainObject(val: unknown): val is Record<string, unknown> {
  return val !== null && typeof val === 'object' && Object.prototype.toString.call(val) === '[object Object]';
}
