import { cva } from '../../utils/cva';
import type { SwitchTheme, SwitchSize } from './t-switch.types';

export const switchVariants = cva('t-switch', {
  variants: {
    theme: {
      default: 't-switch--default',
      primary: 't-switch--primary',
      success: 't-switch--success',
      warning: 't-switch--warning',
      error: 't-switch--error',
    },
    size: {
      small: 't-switch--small',
      medium: 't-switch--medium',
      large: 't-switch--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
