/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdSegmentedProps } from './type';
export default {
  /** 是否撑满父元素宽度 */
  block: Boolean,
  /** 是否禁用 */
  disabled: Boolean,
  /** 数据化配置选项内容 */
  options: {
    type: Object,
    default: (): TdSegmentedProps['options'] => [],
  },
  /** 当前选中的值 */
  value: {
    type: [String, Number],
  },
  /** 当前选中的值，非受控属性 */
  defaultValue: {
    type: [String, Number],
  },
  /** 选项值发生变化时触发 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
};
