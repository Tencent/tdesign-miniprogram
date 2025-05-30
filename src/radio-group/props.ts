/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdRadioGroupProps } from './type';
const props: TdRadioGroupProps = {
  /** 是否允许取消选中 */
  allowUncheck: {
    type: Boolean,
    value: false,
  },
  /** 是否开启无边框模式 */
  borderless: {
    type: Boolean,
    value: false,
  },
  /** 是否禁用全部子单选框 */
  disabled: {
    type: null,
    value: undefined,
  },
  /** 自定义选中图标和非选中图标。示例：[选中态图标，非选中态图标]。使用 String 时，值为 circle 表示填充型图标、值为 line 表示描边型图标、值为 dot 表示圆点图标；仅在使用 options 时生效 */
  icon: {
    type: null,
    value: 'circle',
  },
  /** 用来定义 value / label 在 `options` 中对应的字段别名 */
  keys: {
    type: Object,
  },
  /** HTML 元素原生属性 */
  name: {
    type: String,
    value: '',
  },
  /** 单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同 */
  options: {
    type: Array,
  },
  /** 复选框和内容相对位置。优先级低于 Radio.placement */
  placement: {
    type: String,
    value: 'left',
  },
  /** 只读状态 */
  readonly: {
    type: null,
    value: undefined,
  },
  /** 选中的值 */
  value: {
    type: null,
    value: null,
  },
  /** 选中的值，非受控属性 */
  defaultValue: {
    type: null,
  },
};

export default props;
