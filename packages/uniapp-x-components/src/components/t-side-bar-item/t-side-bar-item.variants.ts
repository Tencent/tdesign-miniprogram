/**
 * SideBarItem 变体
 */

import { cva } from '../../utils/cva';

export const sideBarItemVariants = cva('t-side-bar-item', {
  variants: {
    active: {
      true: 't-side-bar-item--active',
      false: '',
    },
    disabled: {
      true: 't-side-bar-item--disabled',
      false: '',
    },
  },
  defaultVariants: {
    active: false,
    disabled: false,
  },
});
