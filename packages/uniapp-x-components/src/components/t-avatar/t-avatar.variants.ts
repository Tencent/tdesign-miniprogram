/**
 * Avatar 的变体配置（基于 cva）
 */

import { cva } from '../../utils/cva';

export const avatarVariants = cva('t-avatar', {
  variants: {
    shape: {
      circle: 't-avatar--circle',
      round: 't-avatar--round',
    },
    size: {
      small: 't-avatar--small',
      medium: 't-avatar--medium',
      large: 't-avatar--large',
    },
  },
  defaultVariants: {
    shape: 'circle',
    size: 'medium',
  },
});
