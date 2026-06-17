import { cva } from '../../utils/cva';

/**
 * t-dialog 根节点变体
 *  - buttonLayout: horizontal / vertical
 */
export const dialogVariants = cva('t-dialog', {
  variants: {
    buttonLayout: {
      horizontal: 't-dialog--horizontal',
      vertical: 't-dialog--vertical',
    },
  },
  defaultVariants: {
    buttonLayout: 'horizontal',
  },
});
