/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdSliderProps {
  /**
   * 自定义组件样式
   * @default ''
   */
  style?: {
    type: StringConstructor;
    value?: string;
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
    type: null;
    value?: string | boolean;
  };
  /**
   * 刻度标记，示例：`[0, 10, 40, 200]` 或者 `{ 5:  '5¥', 10: '10%' }`
   * @default {}
   */
  marks?: {
    type: null;
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
   * 滑块风格
   * @default default
   */
  theme?: {
    type: StringConstructor;
    value?: 'default' | 'capsule';
  };
  /**
   * 滑块值
   * @default 0
   */
  value?: {
    type: null;
    value?: SliderValue;
  };
  /**
   * 滑块值，非受控属性
   * @default 0
   */
  defaultValue?: {
    type: null;
    value?: SliderValue;
  };
  /**
   * 是否垂直展示
   * @default false
   */
  vertical?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}

export type SliderValue = number | Array<number>;
