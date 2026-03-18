export declare function isFunction(val: unknown): val is Function;
export declare const isString: (val: unknown) => val is string;
export declare const isNull: <T>(value: T) => value is null;
export declare const isUndefined: <T>(value: T) => value is undefined;
export declare function isDef(value: unknown): boolean;
export declare function isInteger(value: unknown): boolean;
export declare function isNumeric(value: unknown): boolean;
export declare function isNumber(value: unknown): boolean;
export declare function isBoolean(value: unknown): value is boolean;
export declare function isObject(x: unknown): x is Record<string, unknown>;
export declare function isPlainObject(val: unknown): val is Record<string, unknown>;
export declare function isEmpty(val: unknown): boolean;
export declare function isDate(input: unknown, options?: {
    format?: string;
    delimiters?: string[];
    strictMode?: boolean;
}): boolean;
export declare function isEmail(str: unknown): boolean;
export declare function isURL(str: unknown, options?: {
    protocols?: string[];
    require_tld?: boolean;
    require_protocol?: boolean;
    require_host?: boolean;
    allow_protocol_relative_urls?: boolean;
}): boolean;
