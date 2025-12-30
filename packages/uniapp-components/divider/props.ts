/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdDividerProps } from './type';
export default {
  /** 文本位置（仅在水平分割线有效） */
  align: {
    type: String,
    default: 'center' as TdDividerProps['align'],
    validator(val: TdDividerProps['align']): boolean {
      if (!val) return true;
      return ['left', 'right', 'center'].includes(val);
    },
  },
  /** 子元素 */
  content: {
    type: String,
  },
  /** 是否虚线（仅在水平分割线有效） */
  dashed: Boolean,
  /** 分隔线类型有两种：水平和垂直 */
  layout: {
    type: String,
    default: 'horizontal' as TdDividerProps['layout'],
    validator(val: TdDividerProps['layout']): boolean {
      if (!val) return true;
      return ['horizontal', 'vertical'].includes(val);
    },
  },
};
