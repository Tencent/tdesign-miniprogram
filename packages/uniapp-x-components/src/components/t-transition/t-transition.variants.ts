import { cva } from '../../utils/cva';
import type { TransitionTheme, TransitionSize } from './t-transition.types';

export const transitionVariants = cva('t-transition', {
  variants: {
    theme: {
      default: 't-transition--default',
      primary: 't-transition--primary',
      success: 't-transition--success',
      warning: 't-transition--warning',
      error: 't-transition--error',
    },
    size: {
      small: 't-transition--small',
      medium: 't-transition--medium',
      large: 't-transition--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
