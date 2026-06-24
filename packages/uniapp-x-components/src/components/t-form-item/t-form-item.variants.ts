import { cva } from '../../utils/cva';
import type { FormItemTheme, FormItemSize } from './t-form-item.types';

export const formItemVariants = cva('t-form-item', {
  variants: {
    theme: {
      default: 't-form-item--default',
      primary: 't-form-item--primary',
      success: 't-form-item--success',
      warning: 't-form-item--warning',
      error: 't-form-item--error',
    },
    size: {
      small: 't-form-item--small',
      medium: 't-form-item--medium',
      large: 't-form-item--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
