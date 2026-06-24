import { cva } from '../../utils/cva';
import type { SwiperTheme, SwiperSize } from './t-swiper.types';

export const swiperVariants = cva('t-swiper', {
  variants: {
    theme: {
      default: 't-swiper--default',
      primary: 't-swiper--primary',
      success: 't-swiper--success',
      warning: 't-swiper--warning',
      error: 't-swiper--error',
    },
    size: {
      small: 't-swiper--small',
      medium: 't-swiper--medium',
      large: 't-swiper--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
