/**
 * Progress 变体配置
 */

import { cva } from '../../utils/cva';

export const progressVariants = cva('t-progress', {
  variants: {
    theme: {
      line: 't-progress--thin',
      plump: 't-progress--plump',
      circle: 't-progress--circle',
    },
    status: {
      success: 't-progress--status--success',
      error: 't-progress--status--error',
      warning: 't-progress--status--warning',
      active: 't-progress--status--active',
      '': '',
    },
  },
  defaultVariants: {
    theme: 'line',
  },
});
