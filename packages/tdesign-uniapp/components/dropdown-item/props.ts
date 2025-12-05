/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdDropdownItemProps } from './type';
export default {
  /** 是否禁用操作项 */
  disabled: Boolean,
  /** 用来定义 value / label / disabled 在 `options` 中对应的字段别名 */
  keys: {
    type: Object,
  },
  /** 标题 */
  label: {
    type: String,
    default: '',
  },
  /** 是否多选 */
  multiple: Boolean,
  /** 选项数据 */
  options: {
    type: Array,
    default: (): TdDropdownItemProps['options'] => [],
  },
  /** 选项分栏（1-3） */
  optionsColumns: {
    type: [String, Number],
    default: 1 as TdDropdownItemProps['optionsColumns'],
  },
  /** 复选框和内容相对位置，仅单选菜单栏有效 */
  placement: {
    type: String,
    default: 'left' as TdDropdownItemProps['placement'],
    validator(val: TdDropdownItemProps['placement']): boolean {
      if (!val) return true;
      return ['left', 'right'].includes(val);
    },
  },
  /** 选中值 */
  value: {
    type: [String, Number, Array],
    default: undefined as TdDropdownItemProps['value'],
  },
  /** 选中值，非受控属性 */
  defaultValue: {
    type: [String, Number, Array],
    default: undefined as TdDropdownItemProps['defaultValue'],
  },
  /** 值改变时触发 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
  /** 关闭时触发 */
  onClose: {
    type: Function,
    default: () => ({}),
  },
  /** 点击确认时触发 */
  onConfirm: {
    type: Function,
    default: () => ({}),
  },
  /** 点击重置时触发 */
  onReset: {
    type: Function,
    default: () => ({}),
  },
};
