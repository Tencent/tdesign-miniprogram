/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdBadgeProps } from './type';
export default {
  /** 颜色 */
  color: {
    type: String,
    default: '',
  },
  /** 徽标内容，示例：`content='自定义内容'`。也可以使用默认插槽定义 */
  content: {
    type: String,
    default: '',
  },
  /** 徽标右上角内容。可以是数字，也可以是文字。如：'new'/3/99+。特殊：值为空表示使用插槽渲染 */
  count: {
    type: [String, Number],
    default: 0 as TdBadgeProps['count'],
  },
  /** 是否为红点 */
  dot: Boolean,
  /** 封顶的数字值 */
  maxCount: {
    type: Number,
    default: 99,
  },
  /** 设置状态点的位置偏移，示例：[-10, 20] 或 ['10em', '8rem'] */
  offset: {
    type: Array,
  },
  /** 形状 */
  shape: {
    type: String,
    default: 'circle' as TdBadgeProps['shape'],
    validator(val: TdBadgeProps['shape']): boolean {
      if (!val) return true;
      return ['circle', 'square', 'bubble', 'ribbon'].includes(val);
    },
  },
  /** 当数值为 0 时，是否展示徽标 */
  showZero: Boolean,
  /** 尺寸 */
  size: {
    type: String,
    default: 'medium' as TdBadgeProps['size'],
    validator(val: TdBadgeProps['size']): boolean {
      if (!val) return true;
      return ['medium', 'large'].includes(val);
    },
  },
};
