/**
 * Watermark 变体配置
 */

import { cva } from '../../utils/cva';

export const watermarkVariants = cva('t-watermark', {
  variants: {
    layout: {
      rectangular: 't-watermark--rectangular',
      hexagonal: 't-watermark--hexagonal',
    },
  },
  defaultVariants: {
    layout: 'rectangular',
  },
});
