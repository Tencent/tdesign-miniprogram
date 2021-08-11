/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-08-10 14:31:10
 * */

import { TdCheckboxProps } from './type';
const props: TdCheckboxProps = {
  /** 复选框和内容相对位置 */
  align: {
    type: String,
    value: 'left',
  },
  /** 是否选中 */
  checked: {
    type: Boolean,
    value: false,
  },
  /** 复选框内容 */
  content: {
    type: String,
  },
  /** 是否禁用组件内容（content）触发选中 */
  contentDisabled: {
    type: Boolean,
  },
  /** 是否禁用组件 */
  disabled: {
    type: Boolean,
    value: undefined,
  },
  /** 组件类名，分别用于设置 组件外层、复选框图标、主文案、内容 等元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 自定义选中图标和非选中图标。示例：[选中态图标地址，非选中态图标地址] */
  icon: {
    type: Array,
  },
  /** 是否为半选 */
  indeterminate: {
    type: Boolean,
    value: false,
  },
  /** 主文案 */
  label: {
    type: String,
  },
  /** 内容最大行数限制 */
  maxContentRow: {
    type: Number,
    value: 5,
  },
  /** 主文案最大行数限制 */
  maxLabelRow: {
    type: Number,
    value: 3,
  },
  /** HTM 元素原生属性 */
  name: {
    type: String,
    value: '',
  },
  /** 组件是否只读 */
  readonly: {
    type: Boolean,
    value: false,
  },
  /** 复选框的值 */
  value: {
    type: String,
    optionalTypes: [Number],
  },
};

export default props;
