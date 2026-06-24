import { cva } from '../../utils/cva';
import type { ColorPickerTheme, ColorPickerSize } from './t-color-picker.types';

export const colorPickerVariants = cva('t-color-picker', {
  variants: {
    theme: {
      default: 't-color-picker--default',
      primary: 't-color-picker--primary',
      success: 't-color-picker--success',
      warning: 't-color-picker--warning',
      error: 't-color-picker--error',
    },
    size: {
      small: 't-color-picker--small',
      medium: 't-color-picker--medium',
      large: 't-color-picker--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
