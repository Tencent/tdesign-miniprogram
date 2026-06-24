import { cva } from '../../utils/cva';
import type { RadioTheme, RadioSize } from './t-radio.types';

export const radioVariants = cva('t-radio', {
  variants: {
    theme: {
      default: 't-radio--default',
      primary: 't-radio--primary',
      success: 't-radio--success',
      warning: 't-radio--warning',
      error: 't-radio--error',
    },
    size: {
      small: 't-radio--small',
      medium: 't-radio--medium',
      large: 't-radio--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
