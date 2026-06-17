/**
 * Steps 变体配置
 */

import { cva } from '../../utils/cva';

export const stepsVariants = cva('t-steps', {
  variants: {
    layout: {
      horizontal: 't-steps--horizontal',
      vertical: 't-steps--vertical',
    },
    sequence: {
      positive: 't-steps--positive',
      reverse: 't-steps--reverse',
    },
    theme: {
      default: 't-steps--default',
      dot: 't-steps--dot',
    },
  },
  defaultVariants: {
    layout: 'horizontal',
    sequence: 'positive',
    theme: 'default',
  },
});
