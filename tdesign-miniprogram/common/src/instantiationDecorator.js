import { isPlainObject, toObject } from './flatTool';
// 将 on 开头的生命周期函数转变成非 on 开头的
const RawLifeCycles = ['Created', 'Attached', 'Ready', 'Moved', 'Detached'];
const NativeLifeCycles = RawLifeCycles.map((k) => k.toLowerCase());
const ComponentNativeProps = [
    'externalClasses',
    'properties',
    'data',
    'options',
    'relations',
    'behaviors',
];
/**
 * 将一个普通的 options 对象转化处理为 Component 支持的对象
 * 在这里需要对一些方法进行操作
 * @param options {}
 */
export const toComponent = function toComponent(options) {
    // 处理 properties 属性
    if (options.properties) {
        Object.keys(options.properties).forEach((k) => {
            let opt = options.properties[k];
            // 如何不是 Object 类型，则默认指定 type = options.properties[k]；
            if (!isPlainObject(opt)) {
                opt = { type: opt };
            }
            options.properties[k] = opt;
        });
    }
    // 处理自定义的方法和生命周期函数
    if (!options.methods)
        options.methods = {};
    const inits = {};
    Object.getOwnPropertyNames(options).forEach((k) => {
        const desc = Object.getOwnPropertyDescriptor(options, k);
        if (!desc)
            return;
        if (NativeLifeCycles.indexOf(k) < 0 && typeof desc.value === 'function') {
            // 非生命周期函数挂载到 methods 对象上面
            Object.defineProperty(options.methods, k, desc);
            delete options[k];
        }
        else if (ComponentNativeProps.indexOf(k) < 0) {
            // 非函数，也非组件内部属性
            // 由于小程序组件会忽略不能识别的字段，需要这里需要把这些字段配置在组件 created 的时候赋值
            inits[k] = desc;
        }
    });
    if (Object.keys(inits).length) {
        const oldCreated = options.created;
        options.created = function () {
            Object.defineProperties(this, inits);
            // eslint-disable-next-line prefer-rest-params
            if (oldCreated)
                oldCreated.apply(this, arguments);
        };
    }
    return options;
};
/**
 * 将一个继承了 BaseComponent 的类转化成 小程序 Component 的调用
 * 根据最新的微信 d.ts 描述文件，Component 在实例化的时候，会忽略不支持的自定义属性
 */
export const wxComponent = function wxComponent() {
    return function (constructor) {
        class WxComponent extends constructor {
            created() {
                super.created && super.created();
            }
            attached() {
                super.attached && super.attached();
            }
            detached() {
                super.detached && super.detached();
            }
        }
        const current = new WxComponent();
        // 所有组件默认都开启css作用域
        // 写到这里是为了防止组件设置 options 时无意覆盖掉了 addGlobalClass
        current.options = current.options || {};
        if (current.options.addGlobalClass === undefined) {
            current.options.addGlobalClass = true;
        }
        const obj = toComponent(toObject(current));
        Component(obj);
    };
};

//# sourceMappingURL=instantiationDecorator.js.map
