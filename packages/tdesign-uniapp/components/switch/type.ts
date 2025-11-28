/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdSwitchProps<T = SwitchValue> {
  /**
   * 用于自定义开关的值，[打开时的值，关闭时的值]。默认为 [true, false]。示例：[1, 0]、['open', 'close']
   * @default [true, false]
   */
  customValue?: Array<SwitchValue>;
  /**
   * 是否禁用组件。优先级：Switch.disabled > Form.disabled
   */
  disabled?: boolean;
  /**
   * 开关的图标；[打开时的图标，关闭时的图标]
   * @default []
   */
  icon?: string[];
  /**
   * 开关内容，[开启时内容，关闭时内容]。示例：['开', '关']
   * @default []
   */
  label?: string[];
  /**
   * 是否处于加载中状态
   * @default false
   */
  loading?: boolean;
  /**
   * 开关尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 开关值
   */
  value?: SwitchValue;
  /**
   * 开关值，非受控属性
   */
  defaultValue?: SwitchValue;
  /**
   * 数据发生变化时触发
   */
  onChange?: (context: { value: SwitchValue }) => void;
}

export type SwitchValue = string | number | boolean;
