/**
 * TabBarItem 变体配置
 */

import { cva } from '../../utils/cva';

export const tabBarItemVariants = cva('t-tab-bar-item', {
  variants: {
    shape: {
      normal: '',
      round: 't-tab-bar-item--round',
    },
    crowded: {
      true: 't-tab-bar-item--crowded',
      false: '',
    },
    split: {
      true: 't-tab-bar-item--split',
      false: '',
    },
  },
  defaultVariants: {
    shape: 'normal',
    crowded: false,
    split: true,
  },
});
