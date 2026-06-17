/**
 * CountDown 变体配置
 */

import { cva } from '../../utils/cva';

export const countdownVariants = cva('t-count-down', {
  variants: {
    theme: {
      default: 't-count-down--default',
      round: 't-count-down--round',
      square: 't-count-down--square',
    },
    size: {
      small: 't-count-down--small',
      medium: 't-count-down--medium',
      large: 't-count-down--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
