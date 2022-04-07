/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdSliderProps {
  /**
   * 颜色，[已选择, 未选择]
   * @default ['#0052D9', 'rgba(220, 220, 220, 1)']
   */
  colors?: {
    type: ArrayConstructor;
    value?: Array<string>;
  };
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 禁用状态滑动条的颜色，[已选, 未选]
   * @default ['#bbd3fb', '#dcdcdc']
   */
  disabledColor?: {
    type: ArrayConstructor;
    value?: Array<string>;
  };
  /**
   * 组件类名，分别用于设置 组件外层元素、滑道底部、滑道激活态、滑道禁用态、游标 等元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-bar', 't-class-bar-active', 't-class-bar-disabled', 't-class-cursor'];
  };
  /**
   * 滑块当前值文本。<br />值为 true 显示默认文案；值为 false 不显示滑块当前值文本；<br />值为 `${value}%` 则表示组件会根据占位符渲染文案；<br />值类型为函数时，参数 `value` 标识滑块值，参数 `position=start` 表示范围滑块的起始值，参数 `position=end` 表示范围滑块的终点值
   * @default false
   */
  label?: {
    type: StringConstructor;
    optionalTypes: Array<BooleanConstructor>;
    value?: string | boolean;
  };
  /**
   * 刻度标记，示例：`[0, 10, 40, 200]` 或者 `{ 5:  '5¥', 10: '10%' }`
   * @default {}
   */
  marks?: {
    type: ObjectConstructor;
    optionalTypes: Array<ArrayConstructor>;
    value?: Record<number, string> | Array<number>;
  };
  /**
   * 滑块范围最大值
   * @default 100
   */
  max?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 滑块范围最小值
   * @default 0
   */
  min?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 双游标滑块
   * @default false
   */
  range?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否边界值
   * @default false
   */
  showExtremeValue?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 步长
   * @default 1
   */
  step?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 滑块值
   */
  value?: {
    type: NumberConstructor;
    optionalTypes: Array<ArrayConstructor>;
    value?: SliderValue;
  };
  /**
   * 滑块值，非受控属性
   */
  defaultValue?: {
    type: NumberConstructor;
    optionalTypes: Array<ArrayConstructor>;
    value?: SliderValue;
  };
}

export type SliderValue = number | Array<number>;
