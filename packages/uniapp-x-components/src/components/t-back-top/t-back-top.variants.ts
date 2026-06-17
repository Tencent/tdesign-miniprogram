/**
 * BackTop 变体配置
 */

import { cva } from '../../utils/cva';

export const backTopVariants = cva('t-back-top', {
  variants: {
    theme: {
      round: 't-back-top--round',
      'half-round': 't-back-top--half-round',
      'round-dark': 't-back-top--round-dark',
      'half-round-dark': 't-back-top--half-round-dark',
    },
    fixed: {
      true: 't-back-top--fixed',
      false: '',
    },
  },
  defaultVariants: {
    theme: 'round',
    fixed: true,
  },
});
