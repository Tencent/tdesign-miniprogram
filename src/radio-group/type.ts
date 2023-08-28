/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */
import { RadioValue } from '../radio/type';
import { KeysType } from '../common/common';

export interface TdRadioGroupProps<T = RadioValue> {
  /**
   * 复选框和内容相对位置；仅在使用 options 时生效
   * @default left
   */
  placement?: {
    type: StringConstructor;
    value?: 'left' | 'right';
  };
  /**
   * 是否开启无边框模式
   * @default false
   */
  borderless?: {
    type: BooleanConstructor;
    value?: boolean;
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
   * 是否禁用全部子单选框
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 自定义选中图标和非选中图标。示例：[选中态图标，非选中态图标]。值为 fill-circle 表示图标为填充型图标，值为 stroke-line 表示图标为描边型图标；仅在使用 options 时生效
   * @default 'fill-circle'
   */
  icon?: {
    type: null;
    value?: 'circle' | 'line' | 'dot' | Array<string>;
  };
  /**
   * 用来定义 value / label 在 `options` 中对应的字段别名
   */
  keys?: {
    type: ObjectConstructor;
    value?: KeysType;
  };
  /**
   * HTML 元素原生属性
   * @default ''
   */
  name?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同
   */
  options?: {
    type: ArrayConstructor;
    value?: Array<RadioOption>;
  };
  /**
   * 选中的值
   */
  value?: {
    type: null;
    value?: T;
  };
  /**
   * 选中的值，非受控属性
   */
  defaultValue?: {
    type: null;
    value?: T;
  };
}

export type RadioOption = string | number | RadioOptionObj;

export interface RadioOptionObj {
  label?: string;
  value?: string | number;
  readonly?: boolean;
  disabled?: boolean;
  allowUncheck?: boolean;
}
