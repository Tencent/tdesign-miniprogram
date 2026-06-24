import { cva } from '../../utils/cva';
import type { FormTheme, FormSize } from './t-form.types';

export const formVariants = cva('t-form', {
  variants: {
    theme: {
      default: 't-form--default',
      primary: 't-form--primary',
      success: 't-form--success',
      warning: 't-form--warning',
      error: 't-form--error',
    },
    size: {
      small: 't-form--small',
      medium: 't-form--medium',
      large: 't-form--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
