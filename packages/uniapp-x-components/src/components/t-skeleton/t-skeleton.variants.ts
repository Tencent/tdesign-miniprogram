/**
 * Skeleton 变体配置
 */

import { cva } from '../../utils/cva';

export const skeletonVariants = cva('t-skeleton', {
  variants: {
    animation: {
      gradient: 't-skeleton--animation-gradient',
      flashed: 't-skeleton--animation-flashed',
      none: '',
    },
  },
  defaultVariants: {
    animation: 'none',
  },
});
