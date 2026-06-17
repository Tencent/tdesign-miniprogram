/**
 * CellGroup 变体配置
 */

import { cva } from '../../utils/cva';

export const cellGroupVariants = cva('t-cell-group', {
  variants: {
    theme: {
      default: 't-cell-group--default',
      card: 't-cell-group--card',
    },
    bordered: {
      true: 't-cell-group--bordered',
    },
  },
  defaultVariants: {
    theme: 'default',
  },
});
