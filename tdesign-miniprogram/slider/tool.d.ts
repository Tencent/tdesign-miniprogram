/**
 * 处理单个number的超限和异常
 * @param {any} value
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
export declare const trimSingleValue: (value: any, min: number, max: number) => number;
/**
 * 处理超限和异常value
 * @param value
 * @param props
 * @returns
 */
export declare const trimValue: (value: number | number[], props: any) => number | number[];
