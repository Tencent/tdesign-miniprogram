type ControlOption = {
  /**
   * 受控状态
   */
  controlled: boolean;
  /**
   * 初始值
   */
  initValue: any;
  /**
   * 更新受控属性值
   * @param val 新值
   * @param extObj 其他待更新数据
   * @param fn 更新成功回调函数
   */
  set(newVal: any, extObj?: Object, fn?: any): void;
  /**
   * 返回受控属性值
   */
  get(): any;
  /**
   * 触发受控属性更新
   * @param newVal 新值
   * @param customChangeData 自定义change数据，默认同newVal
   * @param customUpdateFn 自定义更新函数，默认使用set()
   */
  change(newVal: any, customChangeData: any, customUpdateFn: any): void;
};

/**
 * 受控函数
 * 注意事项：
 * 1：命名规范：约束value等命名，一般不需要改。内部属性统一命名以_开头。
 * 2：value默认值：小程序number类型未传值（undefined）会初始化为0，导致无法判断。建议默认值设置为null
 * 3：prop变化：需要开发者自己监听，observers = { value(val):{ this.control.set(val) } }
 * @param this 页面实例
 * @param valueKey 自定义value的可以
 * @param defaultValueKey 自定义value默认key
 * @param changeEventName 自定义change事件名称
 * @returns
 */
function useControl(
  this: any,
  valueKey = 'value',
  defaultValueKey = 'defaultValue',
  changeEventName = 'change',
): ControlOption {
  const props = this.properties || {};
  const value = props[valueKey];
  const defaultValue = props[defaultValueKey];
  let controlled = false;
  // 检查受控属性，判断是否受控
  if (typeof value !== 'undefined' && value !== null) {
    controlled = true;
  }
  const set = (newVal, extObj?, fn?) => {
    this.setData(
      {
        [`_${valueKey}`]: newVal,
        ...extObj,
      },
      fn,
    );
  };
  return {
    controlled,
    initValue: controlled ? value : defaultValue,
    set,
    get: () => {
      return this.data[`_${valueKey}`];
    },
    change: (newVal, customChangeData, customUpdateFn) => {
      this.triggerEvent(
        changeEventName,
        typeof customChangeData !== 'undefined' ? customChangeData : newVal,
      );
      // 使用了受控属性，必须配合change事件来更新
      if (controlled) {
        return;
      }
      if (typeof customUpdateFn === 'function') {
        customUpdateFn();
      } else {
        set(newVal);
      }
    },
  };
}

export { ControlOption, useControl };
