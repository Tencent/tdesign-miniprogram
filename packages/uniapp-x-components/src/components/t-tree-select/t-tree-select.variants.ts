import { cva } from '../../utils/cva';
import type { TreeSelectTheme, TreeSelectSize } from './t-tree-select.types';

export const treeSelectVariants = cva('t-tree-select', {
  variants: {
    theme: {
      default: 't-tree-select--default',
      primary: 't-tree-select--primary',
      success: 't-tree-select--success',
      warning: 't-tree-select--warning',
      error: 't-tree-select--error',
    },
    size: {
      small: 't-tree-select--small',
      medium: 't-tree-select--medium',
      large: 't-tree-select--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
