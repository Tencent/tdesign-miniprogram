/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdRadioProps } from './type';
export default {
  /** 是否允许取消选中 */
  allowUncheck: Boolean,
  /** 是否为块级元素 */
  block: {
    type: Boolean,
    default: true,
  },
  /** 是否选中 */
  checked: {
    type: Boolean,
    default: undefined,
  },
  /** 是否选中，非受控属性 */
  defaultChecked: Boolean,
  /** 单选内容 */
  content: {
    type: String,
  },
  /** 是否禁用组件内容（content）触发选中 */
  contentDisabled: Boolean,
  /** 是否为禁用态 */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /** 自定义选中图标和非选中图标。使用 Array 时表示：`[选中态图标，非选中态图标]`。使用 String 时，值为 circle 表示填充型图标、值为 line 表示描边型图标、值为 dot 表示圆点图标，值为 slot 时使用插槽 */
  icon: {
    type: [String, Array],
    default: 'circle' as TdRadioProps['icon'],
  },
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
  /** 复选框和内容相对位置。优先级高于 RadioGroup.placement。Radio 单独存在时，默认值为 left。如果父组件存在 RadioGroup，默认值便由 RadioGroup.placement 决定 */
  placement: {
    type: String,
    validator(val: TdRadioProps['placement']): boolean {
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
  /** 单选按钮的值 */
  value: {
    type: [String, Number, Boolean],
    default: false as TdRadioProps['value'],
  },
  /** 值变化时触发 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
};
