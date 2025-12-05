/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdCheckboxProps } from './type';
export default {
  /** 是否为块级元素 */
  block: {
    type: Boolean,
    default: true,
  },
  /** 是否开启无边框模式 */
  borderless: {
    type: Boolean,
    default: undefined,
  },
  /** 用于标识是否为「全选选项」。单独使用无效，需在 CheckboxGroup 中使用 */
  checkAll: Boolean,
  /** 是否选中 */
  checked: Boolean,
  /** 是否选中，非受控属性 */
  defaultChecked: Boolean,
  /** 多选框内容 */
  content: {
    type: String,
  },
  /** 是否禁用组件内容（content）触发选中 */
  contentDisabled: Boolean,
  /** 是否禁用组件。如果父组件存在 CheckboxGroup，默认值由 CheckboxGroup.disabled 控制。优先级：Checkbox.disabled > CheckboxGroup.disabled > Form.disabled */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /** 自定义选中图标和非选中图标。使用 Array 时表示：`[选中态图标，非选中态图标，半选中态图标]`。使用 String 时，值为 circle 表示填充圆形图标、值为 line 表示描边型图标、值为 rectangle 表示填充矩形图标 */
  icon: {
    type: [String, Array],
    default: 'circle' as TdCheckboxProps['icon'],
  },
  /** 是否为半选 */
  indeterminate: Boolean,
  /** 主文案 */
  label: {
    type: String,
  },
  /** 内容最大行数限制 */
  maxContentRow: {
    type: Number,
    default: 5,
  },
  /** 主文案最大行数限制 */
  maxLabelRow: {
    type: Number,
    default: 3,
  },
  /** HTML 元素原生属性 */
  name: {
    type: String,
    default: '',
  },
  /** 多选框和内容相对位置 */
  placement: {
    type: String,
    default: 'left' as TdCheckboxProps['placement'],
    validator(val: TdCheckboxProps['placement']): boolean {
      if (!val) return true;
      return ['left', 'right'].includes(val);
    },
  },
  /** 只读状态 */
  readonly: {
    type: Boolean,
    default: undefined,
  },
  /** -1 时代表独立，不再寻找 parent，用于头条小程序 */
  relationKey: {
    type: String,
    default: '',
  },
  /** 多选框的值 */
  value: {
    type: [String, Number, Boolean],
  },
  /** 值变化时触发。`context` 表示当前点击项内容 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
};
