/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdRadioProps } from './type';
const props: TdRadioProps = {
  /** 复选框和内容相对位置 */
  placement: {
    type: String,
    value: null,
  },
  /** 是否允许取消选中 */
  allowUncheck: {
    type: Boolean,
    value: false,
  },
  /** 是否为块级元素 */
  block: {
    type: Boolean,
    value: true,
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
  /** 单选内容 */
  content: {
    type: String,
  },
  /** 是否禁用组件内容（content）触发选中 */
  contentDisabled: {
    type: Boolean,
    value: false,
  },
  /** 只读状态 */
  readonly: {
    type: Boolean,
    value: false,
  },
  /** 是否为禁用态 */
  disabled: {
    type: Boolean,
    value: undefined,
  },
  /** 组件类名，分别用于设置 组件外层、单选图标、主文案、内容 等元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 自定义选中图标和非选中图标。示例：[选中态图标，非选中态图标]。值为 circle 表示图标为填充型图标，值为 line 表示图标为描边型图标 */
  icon: {
    type: null,
    value: 'circle',
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
  /** 单选按钮的值 */
  value: {
    type: null,
    value: false,
  },
};

export default props;
