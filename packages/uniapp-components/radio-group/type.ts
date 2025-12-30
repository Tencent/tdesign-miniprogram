/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { RadioValue } from '../radio/type';
import type { KeysType } from '../common/common';

export interface TdRadioGroupProps<T = RadioValue> {
  /**
   * 是否允许取消选中
   * @default false
   */
  allowUncheck?: boolean;
  /**
   * 是否开启无边框模式
   * @default false
   */
  borderless?: boolean;
  /**
   * 是否禁用全部子单选框
   */
  disabled?: boolean;
  /**
   * 自定义选中图标和非选中图标。示例：[选中态图标，非选中态图标]。使用 String 时，值为 circle 表示填充型图标、值为 line 表示描边型图标、值为 dot 表示圆点图标；仅在使用 options 时生效
   * @default 'circle'
   */
  icon?: 'circle' | 'line' | 'dot' | Array<string>;
  /**
   * 用来定义 value / label / disabled 在 `options` 中对应的字段别名
   */
  keys?: KeysType;
  /**
   * HTML 元素原生属性
   * @default ''
   */
  name?: string;
  /**
   * 单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同
   */
  options?: Array<RadioOption>;
  /**
   * 复选框和内容相对位置。优先级低于 Radio.placement
   * @default left
   */
  placement?: 'left' | 'right';
  /**
   * 只读状态
   */
  readonly?: boolean;
  /**
   * -1 时代表独立，不再寻找 parent，用于头条小程序
   * @default ''
   */
  relationKey?: string;
  /**
   * 选中的值
   */
  value?: T;
  /**
   * 选中的值，非受控属性
   */
  defaultValue?: T;
  /**
   * 选中值发生变化时触发
   */
  onChange?: (context: { value: RadioValue }) => void;
}

export type RadioOption = string | number | RadioOptionObj;

export interface RadioOptionObj {
  label?: string;
  value?: string | number;
  readonly?: boolean;
  disabled?: boolean;
  allowUncheck?: boolean;
}
