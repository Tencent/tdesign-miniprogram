/**
 * AvatarGroup 变体配置
 */

import { cva } from '../../utils/cva';

export const avatarGroupVariants = cva('t-avatar-group', {
  variants: {
    cascading: {
      'left-up': 't-avatar-group--offset-left',
      'right-up': 't-avatar-group--offset-right',
    },
    size: {
      small: 't-avatar-group--small',
      medium: 't-avatar-group--medium',
      large: 't-avatar-group--large',
    },
  },
  defaultVariants: {
    cascading: 'left-up',
  },
});
