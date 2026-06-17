/**
 * Badge 的变体配置（基于 cva）
 *
 * 类名前缀：t-badge
 *
 * 注意：badge 的"小圆点 + 数字徽标"两个 inner 节点共享同一根 root，
 *      `t-badge--{shape/size}` 仅作用于 inner（即 `__count` 节点的容器）。
 */

import { cva } from '../../utils/cva';

// 根容器：仅作为相对定位锚点
export const badgeVariants = cva('t-badge', {
  variants: {
    hasContent: {
      true: 't-badge--has-content',
    },
  },
});

// 内层 badge（点 / 数字 / 文字徽标本体）
export const badgeInnerVariants = cva('t-badge__inner', {
  variants: {
    shape: {
      circle: 't-badge--circle',
      square: 't-badge--square',
      bubble: 't-badge--bubble',
      ribbon: 't-badge--ribbon',
      'ribbon-right': 't-badge--ribbon-right',
      'ribbon-left': 't-badge--ribbon-left',
      'triangle-right': 't-badge--triangle-right',
      'triangle-left': 't-badge--triangle-left',
    },
    size: {
      medium: 't-badge--medium',
      large: 't-badge--large',
    },
    dot: {
      true: 't-badge--dot',
    },
    floating: {
      true: 't-badge--floating',
    },
  },
  defaultVariants: {
    shape: 'circle',
    size: 'medium',
  },
});
