/**
 * Overlay 变体
 *
 * 进出场动画 class 切换：t-fade-enter / t-fade-leave-to（与 uniapp 原版一致）
 */

import { cva } from '../../utils/cva';

export const overlayVariants = cva('t-overlay', {
  variants: {
    state: {
      enter: 't-fade-enter',
      active: '',
      leave: 't-fade-leave-to',
    },
  },
  defaultVariants: {
    state: 'active',
  },
});
