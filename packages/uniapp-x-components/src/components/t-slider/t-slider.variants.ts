import { cva } from '../../utils/cva';
import type { SliderTheme, SliderSize } from './t-slider.types';

export const sliderVariants = cva('t-slider', {
  variants: {
    theme: {
      default: 't-slider--default',
      primary: 't-slider--primary',
      success: 't-slider--success',
      warning: 't-slider--warning',
      error: 't-slider--error',
    },
    size: {
      small: 't-slider--small',
      medium: 't-slider--medium',
      large: 't-slider--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
