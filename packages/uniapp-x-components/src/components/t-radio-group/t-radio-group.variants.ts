import { cva } from '../../utils/cva';
import type { RadioGroupTheme, RadioGroupSize } from './t-radio-group.types';

export const radioGroupVariants = cva('t-radio-group', {
  variants: {
    theme: {
      default: 't-radio-group--default',
      primary: 't-radio-group--primary',
      success: 't-radio-group--success',
      warning: 't-radio-group--warning',
      error: 't-radio-group--error',
    },
    size: {
      small: 't-radio-group--small',
      medium: 't-radio-group--medium',
      large: 't-radio-group--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
