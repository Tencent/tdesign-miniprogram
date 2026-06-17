import { cva } from '../../utils/cva';

/**
 * t-popup 根节点变体（class 矩阵）
 *
 * - placement: 决定吸附方向 + 圆角形态
 * - state: 当前动画阶段，与 t-overlay 保持同形态
 *   · enter:  初始进入态（fade-enter，translateX/Y 100%、center scale 0.6）
 *   · active: 稳态（无变换 class）
 *   · leave:  离场态（同 fade-leave-to）
 */
export const popupVariants = cva('t-popup', {
  variants: {
    placement: {
      top: 't-popup--top',
      bottom: 't-popup--bottom',
      left: 't-popup--left',
      right: 't-popup--right',
      center: 't-popup--center',
    },
    state: {
      enter: 't-fade-enter',
      active: '',
      leave: 't-fade-leave-to',
    },
  },
  defaultVariants: {
    placement: 'top',
    state: 'enter',
  },
});
