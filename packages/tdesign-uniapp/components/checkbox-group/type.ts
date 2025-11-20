/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { KeysType } from '../common/common';

export interface TdCheckboxGroupProps<T = CheckboxGroupValue> {
  /**
   * 是否开启无边框模式。优先级低于 Checkbox.borderless
   * @default false
   */
  borderless?: boolean;
  /**
   * 是否禁用组件。优先级：Form.disabled < CheckboxGroup.disabled < Checkbox.disabled
   */
  disabled?: boolean;
  /**
   * 用来定义 value / label / disabled 在 `options` 中对应的字段别名
   */
  keys?: KeysType;
  /**
   * 支持最多选中的数量
   */
  max?: number;
  /**
   * 统一设置内部复选框 HTML 属性
   * @default ''
   */
  name?: string;
  /**
   * 以配置形式设置子元素。示例1：`['北京', '上海']` ，示例2: `[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]`。checkAll 值为 true 表示当前选项为「全选选项」
   * @default []
   */
  options?: Array<CheckboxOption>;
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
   * 选中值
   */
  value?: T;
  /**
   * 选中值，非受控属性
   */
  defaultValue?: T;
  /**
   * 值变化时触发。`context` 表示当前点击项内容
   */
  onChange?: (context: {
    value: CheckboxGroupValue;
    context: { value: boolean | number | string; label: boolean | number | string };
  }) => void;
}

export type CheckboxOption = string | number | CheckboxOptionObj;

export interface CheckboxOptionObj {
  label?: string;
  value?: string | number;
  disabled?: boolean;
  checkAll?: true;
}

export type CheckboxGroupValue = Array<string | number | boolean>;
