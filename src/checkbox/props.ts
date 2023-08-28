/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdCheckboxProps } from './type';
const props: TdCheckboxProps = {
  /** 是否为块级元素 */
  block: {
    type: Boolean,
    value: true,
  },
  /** 是否开启无边框模式 */
  borderless: {
    type: Boolean,
    value: false,
  },
  /** 用于标识是否为「全选选项」。单独使用无效，需在 CheckboxGroup 中使用 */
  checkAll: {
    type: Boolean,
    value: false,
  },
  /** 是否选中 */
  checked: {
    type: Boolean,
    value: null,
  },
  /** 是否选中，非受控属性 */
  defaultChecked: {
    type: Boolean,
    value: false,
  },
  /** 多选框内容 */
  content: {
    type: String,
  },
  /** 是否禁用组件内容（content）触发选中 */
  contentDisabled: {
    type: Boolean,
  },
  /** 是否禁用组件。如果父组件存在 CheckboxGroup，默认值由 CheckboxGroup.disabled 控制。优先级：Checkbox.disabled > CheckboxGroup.disabled > Form.disabled */
  disabled: {
    type: null,
    value: undefined,
  },
  /** 组件类名，分别用于设置 组件外层、多选框图标、主文案、内容 等元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 自定义选中图标和非选中图标。使用 Array 时表示：`[选中态图标，非选中态图标，半选中态图标]`。使用 String 时，值为 circle 表示填充圆形图标、值为 line 表示描边型图标、值为 rectangle 表示填充矩形图标 */
  icon: {
    type: null,
    value: 'circle',
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
  /** HTML 元素原生属性 */
  name: {
    type: String,
    value: '',
  },
  /** 多选框和内容相对位置 */
  placement: {
    type: String,
    value: 'left',
  },
  /** 只读状态 */
  readonly: {
    type: Boolean,
    value: false,
  },
  /** 多选框的值 */
  value: {
    type: null,
  },
};

export default props;
