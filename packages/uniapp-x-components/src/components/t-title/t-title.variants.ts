import { cva } from '../../utils/cva';
import type { TitleTheme, TitleSize } from './t-title.types';

export const titleVariants = cva('t-title', {
  variants: {
    theme: {
      default: 't-title--default',
      primary: 't-title--primary',
      success: 't-title--success',
      warning: 't-title--warning',
      error: 't-title--error',
    },
    size: {
      small: 't-title--small',
      medium: 't-title--medium',
      large: 't-title--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
