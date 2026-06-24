import { cva } from '../../utils/cva';
import type { SwipeCellTheme, SwipeCellSize } from './t-swipe-cell.types';

export const swipeCellVariants = cva('t-swipe-cell', {
  variants: {
    theme: {
      default: 't-swipe-cell--default',
      primary: 't-swipe-cell--primary',
      success: 't-swipe-cell--success',
      warning: 't-swipe-cell--warning',
      error: 't-swipe-cell--error',
    },
    size: {
      small: 't-swipe-cell--small',
      medium: 't-swipe-cell--medium',
      large: 't-swipe-cell--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
