/**
 * StepItem 变体配置
 */

import { cva } from '../../utils/cva';

export const stepItemVariants = cva('t-steps-item', {
  variants: {
    layout: {
      horizontal: 't-steps-item--horizontal',
      vertical: 't-steps-item--vertical',
    },
  },
  defaultVariants: {
    layout: 'horizontal',
  },
});
