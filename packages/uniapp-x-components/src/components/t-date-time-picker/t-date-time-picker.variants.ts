import { cva } from '../../utils/cva';
import type { DateTimePickerTheme, DateTimePickerSize } from './t-date-time-picker.types';

export const dateTimePickerVariants = cva('t-date-time-picker', {
  variants: {
    theme: {
      default: 't-date-time-picker--default',
      primary: 't-date-time-picker--primary',
      success: 't-date-time-picker--success',
      warning: 't-date-time-picker--warning',
      error: 't-date-time-picker--error',
    },
    size: {
      small: 't-date-time-picker--small',
      medium: 't-date-time-picker--medium',
      large: 't-date-time-picker--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
