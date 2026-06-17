/**
 * Icon 的变体配置（基于 cva）
 *
 * 类名前缀：t-icon
 * Icon 没有传统枚举变体，仅承担基础 class，预留布尔变体扩展位。
 */

import { cva } from '../../utils/cva';

export const iconVariants = cva('t-icon', {
  variants: {
    image: {
      true: 't-icon--image',
    },
  },
});
