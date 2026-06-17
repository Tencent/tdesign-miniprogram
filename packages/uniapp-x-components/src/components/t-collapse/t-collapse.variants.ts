/**
 * Collapse 变体配置
 */

import { cva } from '../../utils/cva';

export const collapseVariants = cva('t-collapse', {
  variants: {
    theme: {
      default: 't-collapse--default',
      card: 't-collapse--card',
    },
  },
  defaultVariants: {
    theme: 'default',
  },
});
