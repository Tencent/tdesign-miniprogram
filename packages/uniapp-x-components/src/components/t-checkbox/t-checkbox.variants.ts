import { cva } from '../../utils/cva';
import type { CheckboxTheme, CheckboxSize } from './t-checkbox.types';

export const checkboxVariants = cva('t-checkbox', {
  variants: {
    theme: {
      default: 't-checkbox--default',
      primary: 't-checkbox--primary',
      success: 't-checkbox--success',
      warning: 't-checkbox--warning',
      error: 't-checkbox--error',
    },
    size: {
      small: 't-checkbox--small',
      medium: 't-checkbox--medium',
      large: 't-checkbox--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
