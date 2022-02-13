import { SuperComponent } from './superComponent';
/**
 * 将一个普通的 options 对象转化处理为 Component 支持的对象
 * 在这里需要对一些方法进行操作
 * @param options {}
 */
export declare const toComponent: (options: Record<string, any>) => Record<string, any>;
/**
 * 将一个继承了 BaseComponent 的类转化成 小程序 Component 的调用
 * 根据最新的微信 d.ts 描述文件，Component 在实例化的时候，会忽略不支持的自定义属性
 */
export declare const wxComponent: () => (constructor: new () => SuperComponent) => void;
