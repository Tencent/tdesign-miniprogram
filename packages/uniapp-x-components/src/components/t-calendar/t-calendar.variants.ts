import { cva } from '../../utils/cva';
import type { CalendarTheme, CalendarSize } from './t-calendar.types';

export const calendarVariants = cva('t-calendar', {
  variants: {
    theme: {
      default: 't-calendar--default',
      primary: 't-calendar--primary',
      success: 't-calendar--success',
      warning: 't-calendar--warning',
      error: 't-calendar--error',
    },
    size: {
      small: 't-calendar--small',
      medium: 't-calendar--medium',
      large: 't-calendar--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
