import { cva } from '../../utils/cva';
import type { PopoverTheme, PopoverSize } from './t-popover.types';

export const popoverVariants = cva('t-popover', {
  variants: {
    theme: {
      default: 't-popover--default',
      primary: 't-popover--primary',
      success: 't-popover--success',
      warning: 't-popover--warning',
      error: 't-popover--error',
    },
    size: {
      small: 't-popover--small',
      medium: 't-popover--medium',
      large: 't-popover--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
