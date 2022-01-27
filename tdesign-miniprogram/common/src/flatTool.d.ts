/** ****************************************************************
 MIT License https://github.com/qiu8310/minapp/blob/v1.0.0-alpha.1/packages/minapp-core/src/system/util/object.ts
 Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
****************************************************************** */
export declare const getPrototypeOf: (obj: any) => any;
/**
 * 判断 something 是不是一个 JS Object (从 mora-script 中取过来的)
 *
 * 除了 null, 及字面量，其它一般都是 Object，包括 函数
 */
export declare const isObject: (something: any) => boolean;
/**
 * 遍历继承关系类的 prototype
 *
 * @export
 * @param {Function} callback - 回调函数，函数参数是遍历的每个实例的 prototype，函数如果返回 false，会终止遍历
 * @param {any} fromCtor  - 要遍历的起始 class 或 prototype
 * @param {any} toCtor    - 要遍历的结束 class 或 prototype
 * @param {boolean} [includeToCtor=true] - 是否要包含结束 toCtor 本身
 *
 * @example
 * A -> B -> C
 *
 * 在 C 中调用： iterateInheritedPrototype(fn, A, C, true)
 * 则，fn 会被调用三次，分别是 fn(A.prototype) fn(B.prototype) fn(C.prototype)
 */
export declare const iterateInheritedPrototype: (callback: (proto: Record<string, any>) => boolean | void, fromCtor: any, toCtor: any, includeToCtor?: boolean) => void;
export interface ClassInstanceToObjectOptions {
    /**
     * 将所有的对象中的函数绑定到指定的对象上
     *
     * **注意：对象中的箭头函数无法重新绑定**
     */
    bindTo?: any;
    /**
     * 要排除的键名
     *
     * 默认： ['constructor']
     */
    excludes?: string[];
    /**
     * 递归遍历到的终点对象或class(不会遍历终点对象上的属性)
     *
     * 默认： Object
     */
    till?: any;
    /**
     * 生成的新对象的键值是否需要 enumerable， 0 表示使用原本的配置，此值默认为 true
     */
    enumerable?: 0 | boolean;
    /**
     * 生成的新对象的键值是否需要 configurable， 不指定或指定 0 则使用原本的
     */
    configurable?: 0 | boolean;
    /**
     * 生成的新对象的键值是否需要 writable，不指定或指定 0 则使用原本的
     */
    writable?: 0 | boolean;
}
/**
 *
 * 将一个可能包含原型链的对象扁平化成单个对象
 *
 * 如，现有这样的类的继承关系 A -> B -> C，当创建一个实例 a = new A() 时
 *
 * a 实例会存有 B、C 的原型链，使用此函数 newa = toObject(a) 之后，
 * newa 就会变成一个 PlainObject，但它有 A、B、C 上的所有属性和方法，
 * 当然不包括静态属性或方法
 *
 * 注意1：用此方法的话，尽量避免在类中使用胖函数，胖函数的 this 死死的绑定
 * 在原对象中，无法重新绑定
 *
 * 注意2：类继承的时候不要在函数中调用 super，toObject 之后是扁平的，没有 super 之说
 */
export declare const toObject: (something: any, options?: ClassInstanceToObjectOptions) => {
    [key: string]: any;
};
export declare const isPlainObject: (something: any) => boolean;
