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
    glyph: {
      // 自定义字体图标（glyphChar）模式：根节点放宽 font-family 强制，由外部 customStyle 决定
      true: 't-icon--glyph',
    },
  },
});
