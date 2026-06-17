/**
 * GridItem 变体配置
 */

import { cva } from '../../utils/cva';

export const gridItemVariants = cva('t-grid-item', {
  variants: {
    layout: {
      vertical: 't-grid-item--vertical',
      horizontal: 't-grid-item--horizontal',
    },
  },
  defaultVariants: {
    layout: 'vertical',
  },
});
