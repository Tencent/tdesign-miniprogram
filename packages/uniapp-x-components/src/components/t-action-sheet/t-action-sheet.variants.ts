import { cva } from '../../utils/cva';

/**
 * t-action-sheet 根节点变体
 *  - theme: list / grid 两种展示形态
 *  - align: center / left 文本对齐
 */
export const actionSheetVariants = cva('t-action-sheet', {
  variants: {
    theme: {
      list: 't-action-sheet--list',
      grid: 't-action-sheet--grid',
    },
    align: {
      center: 't-action-sheet--align-center',
      left: 't-action-sheet--align-left',
    },
  },
  defaultVariants: {
    theme: 'list',
    align: 'center',
  },
});
