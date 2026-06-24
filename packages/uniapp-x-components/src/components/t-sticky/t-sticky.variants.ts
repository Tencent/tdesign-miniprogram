import { cva } from '../../utils/cva';
import type { StickyTheme, StickySize } from './t-sticky.types';

export const stickyVariants = cva('t-sticky', {
  variants: {
    theme: {
      default: 't-sticky--default',
      primary: 't-sticky--primary',
      success: 't-sticky--success',
      warning: 't-sticky--warning',
      error: 't-sticky--error',
    },
    size: {
      small: 't-sticky--small',
      medium: 't-sticky--medium',
      large: 't-sticky--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
