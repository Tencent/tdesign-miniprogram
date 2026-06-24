import { cva } from '../../utils/cva';
import type { TableTheme, TableSize } from './t-table.types';

export const tableVariants = cva('t-table', {
  variants: {
    theme: {
      default: 't-table--default',
      primary: 't-table--primary',
      success: 't-table--success',
      warning: 't-table--warning',
      error: 't-table--error',
    },
    size: {
      small: 't-table--small',
      medium: 't-table--medium',
      large: 't-table--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
