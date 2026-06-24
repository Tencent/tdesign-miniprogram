import { cva } from '../../utils/cva';
import type { TextTheme, TextSize } from './t-text.types';

export const textVariants = cva('t-text', {
  variants: {
    theme: {
      default: 't-text--default',
      primary: 't-text--primary',
      success: 't-text--success',
      warning: 't-text--warning',
      error: 't-text--error',
    },
    size: {
      small: 't-text--small',
      medium: 't-text--medium',
      large: 't-text--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
