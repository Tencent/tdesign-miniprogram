/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdGridProps } from './type';
export default {
  /** 内容对齐方式 */
  align: {
    type: String,
    default: 'center' as TdGridProps['align'],
    validator(val: TdGridProps['align']): boolean {
      if (!val) return true;
      return ['left', 'center'].includes(val);
    },
  },
  /** 边框，默认不显示。值为 true 则显示默认边框，值类型为 object 则表示自定义边框样式 */
  border: {
    type: [Boolean, Object],
    default: false as TdGridProps['border'],
  },
  /** 每一行的列数量；为 0 时等于固定大小 */
  column: {
    type: Number,
    default: 4,
  },
  /** 间隔大小 */
  gutter: {
    type: Number,
  },
  /** 是否开启点击反馈 */
  hover: Boolean,
  /** 宫格的风格 */
  theme: {
    type: String,
    default: 'default' as TdGridProps['theme'],
    validator(val: TdGridProps['theme']): boolean {
      if (!val) return true;
      return ['default', 'card'].includes(val);
    },
  },
};
