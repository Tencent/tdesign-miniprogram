type ControlInstance = {
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
  change(newVal: any, customChangeData?: any, customUpdateFn?: any): void;
};

type ControlOption = {
  /**
   * 自定义value的key。默认为value
   */
  valueKey?: string;
  /**
   * 自定义value默认值的key。默认为defaultValue
   */
  defaultValueKey?: string;
  /**
   * 自定义change事件名称。默认为change
   */
  changeEventName?: string;
  /**
   * 是否严格受控。默认true为完全受控模式。半受控模式为false。
   */
  strict?: boolean;
};

const defaultOption: ControlOption = {
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
function useControl(this: any, option: ControlOption = {}): ControlInstance {
  const { valueKey, defaultValueKey, changeEventName, strict } = {
    ...defaultOption,
    ...option,
  };
  const props = this.properties || {};
  const value = props[valueKey];
  // 半受控时，不需要defaultValueKey，默认值与valueKey相同
  const defaultValue = props[strict ? defaultValueKey : valueKey];
  let controlled = false;
  // 完全受控模式：检查受控属性，判断是否受控
  if (strict && typeof value !== 'undefined' && value !== null) {
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
      // 完全受控模式，使用了受控属性，必须配合change事件来更新
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

export { ControlOption, ControlInstance, useControl };
