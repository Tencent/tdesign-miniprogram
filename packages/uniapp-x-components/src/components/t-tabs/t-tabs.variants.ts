/**
 * Tabs 变体配置
 */

import { cva } from '../../utils/cva';

export const tabsVariants = cva('t-tabs', {
  variants: {
    theme: {
      line: 't-tabs--line',
      tag: 't-tabs--tag',
      card: 't-tabs--card',
    },
  },
  defaultVariants: {
    theme: 'line',
  },
});
