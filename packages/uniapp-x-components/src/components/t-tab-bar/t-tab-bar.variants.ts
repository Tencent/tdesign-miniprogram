/**
 * TabBar 变体配置
 */

import { cva } from '../../utils/cva';

export const tabBarVariants = cva('t-tab-bar', {
  variants: {
    shape: {
      normal: 't-tab-bar--normal',
      round: 't-tab-bar--round',
    },
    fixed: {
      true: 't-tab-bar--fixed',
      false: '',
    },
    bordered: {
      true: 't-tab-bar--border',
      false: '',
    },
    safeAreaInsetBottom: {
      true: 't-tab-bar--safe',
      false: '',
    },
  },
  defaultVariants: {
    shape: 'normal',
    fixed: true,
    bordered: true,
    safeAreaInsetBottom: true,
  },
});
