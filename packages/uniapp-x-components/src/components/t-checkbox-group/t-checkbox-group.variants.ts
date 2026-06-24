import { cva } from '../../utils/cva';
import type { CheckboxGroupTheme, CheckboxGroupSize } from './t-checkbox-group.types';

export const checkboxGroupVariants = cva('t-checkbox-group', {
  variants: {
    theme: {
      default: 't-checkbox-group--default',
      primary: 't-checkbox-group--primary',
      success: 't-checkbox-group--success',
      warning: 't-checkbox-group--warning',
      error: 't-checkbox-group--error',
    },
    size: {
      small: 't-checkbox-group--small',
      medium: 't-checkbox-group--medium',
      large: 't-checkbox-group--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
