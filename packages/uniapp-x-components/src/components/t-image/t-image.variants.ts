/**
 * Image 变体配置
 */

import { cva } from '../../utils/cva';

export const imageVariants = cva('t-image', {
  variants: {
    shape: {
      circle: 't-image--shape-circle',
      round: 't-image--shape-round',
      square: 't-image--shape-square',
    },
  },
  defaultVariants: {
    shape: 'square',
  },
});
