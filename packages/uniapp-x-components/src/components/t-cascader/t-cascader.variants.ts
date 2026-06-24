import { cva } from '../../utils/cva';
import type { CascaderTheme, CascaderSize } from './t-cascader.types';

export const cascaderVariants = cva('t-cascader', {
  variants: {
    theme: {
      default: 't-cascader--default',
      primary: 't-cascader--primary',
      success: 't-cascader--success',
      warning: 't-cascader--warning',
      error: 't-cascader--error',
    },
    size: {
      small: 't-cascader--small',
      medium: 't-cascader--medium',
      large: 't-cascader--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
