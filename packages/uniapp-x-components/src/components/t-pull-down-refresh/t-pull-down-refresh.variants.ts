import { cva } from '../../utils/cva';
import type { PullDownRefreshTheme, PullDownRefreshSize } from './t-pull-down-refresh.types';

export const pullDownRefreshVariants = cva('t-pull-down-refresh', {
  variants: {
    theme: {
      default: 't-pull-down-refresh--default',
      primary: 't-pull-down-refresh--primary',
      success: 't-pull-down-refresh--success',
      warning: 't-pull-down-refresh--warning',
      error: 't-pull-down-refresh--error',
    },
    size: {
      small: 't-pull-down-refresh--small',
      medium: 't-pull-down-refresh--medium',
      large: 't-pull-down-refresh--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
