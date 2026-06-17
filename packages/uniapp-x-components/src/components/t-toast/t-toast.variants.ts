import { cva } from '../../utils/cva';

/**
 * t-toast 根节点变体
 *  - placement: top/middle/bottom 决定 inline top% 与外层位置 class
 *  - direction: row（横排，icon 左 message 右）/ column（竖排）
 *  - theme: loading / success / warning / error
 */
export const toastVariants = cva('t-toast', {
  variants: {
    placement: {
      top: 't-toast--top',
      middle: 't-toast--middle',
      bottom: 't-toast--bottom',
    },
    direction: {
      row: 't-toast--row',
      column: 't-toast--column',
    },
    theme: {
      loading: 't-toast--loading',
      success: 't-toast--success',
      warning: 't-toast--warning',
      error: 't-toast--error',
      none: '',
    },
  },
  defaultVariants: {
    placement: 'middle',
    direction: 'row',
    theme: 'none',
  },
});
