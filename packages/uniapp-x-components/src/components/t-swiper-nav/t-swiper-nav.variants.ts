import { cva } from '../../utils/cva';
import type { SwiperNavTheme, SwiperNavSize } from './t-swiper-nav.types';

export const swiperNavVariants = cva('t-swiper-nav', {
  variants: {
    theme: {
      default: 't-swiper-nav--default',
      primary: 't-swiper-nav--primary',
      success: 't-swiper-nav--success',
      warning: 't-swiper-nav--warning',
      error: 't-swiper-nav--error',
    },
    size: {
      small: 't-swiper-nav--small',
      medium: 't-swiper-nav--medium',
      large: 't-swiper-nav--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
