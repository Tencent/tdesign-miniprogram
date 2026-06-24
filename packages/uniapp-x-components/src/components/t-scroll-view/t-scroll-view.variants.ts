import { cva } from '../../utils/cva';
import type { ScrollViewTheme, ScrollViewSize } from './t-scroll-view.types';

export const scrollViewVariants = cva('t-scroll-view', {
  variants: {
    theme: {
      default: 't-scroll-view--default',
      primary: 't-scroll-view--primary',
      success: 't-scroll-view--success',
      warning: 't-scroll-view--warning',
      error: 't-scroll-view--error',
    },
    size: {
      small: 't-scroll-view--small',
      medium: 't-scroll-view--medium',
      large: 't-scroll-view--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
