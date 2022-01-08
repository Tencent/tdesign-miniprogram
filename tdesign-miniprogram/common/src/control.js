const defaultOption = {
    valueKey: 'value',
    defaultValueKey: 'defaultValue',
    changeEventName: 'change',
    strict: true,
};
/**
 * 受控函数
 * 用法示例：
 * {
 *  attached() {
 *    this.control = useControl.call(this);
 *  }
 * }
 * 注意事项：
 * 1：命名规范：约束value等命名，一般不需要改。内部属性统一命名以_开头。
 * 2：value默认值：小程序number类型未传值（undefined）会初始化为0，导致无法判断。建议默认值设置为null
 * 3：prop变化：需要开发者自己监听，observers = { value(val):{ this.control.set(val) } }
 * @param this 页面实例
 * @param option 配置项 参见ControlOption
 * @returns
 */
function useControl(option = {}) {
    const { valueKey, defaultValueKey, changeEventName, strict } = Object.assign(Object.assign({}, defaultOption), option);
    const props = this.properties || {};
    const value = props[valueKey];
    // 半受控时，不需要defaultValueKey，默认值与valueKey相同
    const defaultValue = props[strict ? defaultValueKey : valueKey];
    let controlled = false;
    // 完全受控模式：检查受控属性，判断是否受控
    if (strict && typeof value !== 'undefined' && value !== null) {
        controlled = true;
    }
    const set = (newVal, extObj, fn) => {
        this.setData(Object.assign({ [`_${valueKey}`]: newVal }, extObj), fn);
    };
    return {
        controlled,
        initValue: controlled ? value : defaultValue,
        set,
        get: () => {
            return this.data[`_${valueKey}`];
        },
        change: (newVal, customChangeData, customUpdateFn) => {
            this.triggerEvent(changeEventName, typeof customChangeData !== 'undefined' ? customChangeData : newVal);
            // 完全受控模式，使用了受控属性，必须配合change事件来更新
            if (controlled) {
                return;
            }
            if (typeof customUpdateFn === 'function') {
                customUpdateFn();
            }
            else {
                set(newVal);
            }
        },
    };
}
export { useControl };

//# sourceMappingURL=control.js.map
