import { cva } from '../../utils/cva';
import type { PickerTheme, PickerSize } from './t-picker.types';

export const pickerVariants = cva('t-picker', {
  variants: {
    theme: {
      default: 't-picker--default',
      primary: 't-picker--primary',
      success: 't-picker--success',
      warning: 't-picker--warning',
      error: 't-picker--error',
    },
    size: {
      small: 't-picker--small',
      medium: 't-picker--medium',
      large: 't-picker--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
