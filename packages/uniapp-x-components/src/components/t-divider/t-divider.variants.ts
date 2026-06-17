/**
 * Divider 的变体配置（基于 cva）
 *
 * 类名前缀：t-divider
 * 命名约定：
 *  - 互斥变体（layout / align）使用 `t-divider--{value}`
 *  - boolean 修饰使用 `t-divider--{flag}`
 */

import { cva } from '../../utils/cva';

export const dividerVariants = cva('t-divider', {
  variants: {
    layout: {
      horizontal: 't-divider--horizontal',
      vertical: 't-divider--vertical',
    },
    align: {
      left: 't-divider--left',
      center: 't-divider--center',
      right: 't-divider--right',
    },
    dashed: {
      true: 't-divider--dashed',
    },
  },
  defaultVariants: {
    layout: 'horizontal',
    align: 'center',
  },
});
