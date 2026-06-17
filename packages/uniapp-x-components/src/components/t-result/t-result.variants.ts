/**
 * Result 变体配置
 */

import { cva } from '../../utils/cva';

export const resultVariants = cva('t-result', {
  variants: {
    theme: {
      default: 't-result--theme-default',
      success: 't-result--theme-success',
      warning: 't-result--theme-warning',
      error: 't-result--theme-error',
    },
  },
  defaultVariants: {
    theme: 'default',
  },
});
