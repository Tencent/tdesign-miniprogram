/**
 * Grid 变体配置
 */

import { cva } from '../../utils/cva';

export const gridVariants = cva('t-grid', {
  variants: {
    theme: {
      default: 't-grid--default',
      card: 't-grid--card',
    },
    align: {
      left: 't-grid--left',
      center: 't-grid--center',
    },
  },
  defaultVariants: {
    theme: 'default',
    align: 'center',
  },
});
