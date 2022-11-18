/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdSwitchProps {
  /**
   * 用于自定义开关的值，[打开时的值，关闭时的值]。默认为 [true, false]。示例：[1, 0]、['open', 'close']
   * @default [true, false]
   */
  customValue?: {
    type: ArrayConstructor;
    value?: Array<SwitchValue>;
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
   * 开关的图标；[打开时的图标，关闭时的图标]
   * @default []
   */
  icon?: {
    type: ArrayConstructor;
    value?: string[];
  };
  /**
   * 开关的标签；[打开时的标签，关闭时的标签]
   * @default []
   */
  label?: {
    type: ArrayConstructor;
    value?: string[];
  };
  /**
   * 是否处于加载中状态
   * @default false
   */
  loading?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 开关尺寸
   * @default medium
   */
  size?: {
    type: StringConstructor;
    value?: 'small' | 'medium' | 'large';
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  style?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 开关值
   * @default null
   */
  value?: {
    type: null;
    value?: SwitchValue;
  };
  /**
   * 开关值，非受控属性
   * @default null
   */
  defaultValue?: {
    type: null;
    value?: SwitchValue;
  };
}

export type SwitchValue = string | number | boolean;
