export declare const debounce: (func: any, wait?: number) => (...rest: any[]) => void;
export declare const classNames: (...args: any[]) => string;
export declare const styles: (styleObj: any) => string;
export declare const requestAnimationFrame: (cb: Function) => WechatMiniprogram.NodesRef;
export declare const isNumber: (value: any) => boolean;
export declare const addUnit: (value?: string | number) => string | undefined;
/**
 * 计算字符串字符的长度并可以截取字符串。
 * @param str 传入字符串
 * @param maxCharacter 规定最大字符串长度
 * @returns 当没有传入maxCharacter时返回字符串字符长度，当传入maxCharacter时返回截取之后的字符串和长度。
 */
export declare const getCharacterLength: (str: string, maxCharacter?: number) => {
    length: number;
    characters: string;
};
