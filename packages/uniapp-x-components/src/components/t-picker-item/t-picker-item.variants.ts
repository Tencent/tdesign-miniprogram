import { cva } from '../../utils/cva';
import type { PickerItemTheme, PickerItemSize } from './t-picker-item.types';

export const pickerItemVariants = cva('t-picker-item', {
  variants: {
    theme: {
      default: 't-picker-item--default',
      primary: 't-picker-item--primary',
      success: 't-picker-item--success',
      warning: 't-picker-item--warning',
      error: 't-picker-item--error',
    },
    size: {
      small: 't-picker-item--small',
      medium: 't-picker-item--medium',
      large: 't-picker-item--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
