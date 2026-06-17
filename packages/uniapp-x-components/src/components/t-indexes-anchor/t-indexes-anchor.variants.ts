/**
 * IndexesAnchor 变体
 */

import { cva } from '../../utils/cva';

export const indexesAnchorVariants = cva('t-indexes-anchor', {
  variants: {
    active: {
      true: 't-indexes-anchor--active',
      false: '',
    },
  },
  defaultVariants: {
    active: false,
  },
});
