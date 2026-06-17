/**
 * TabPanel 变体
 */

import { cva } from '../../utils/cva';

export const tabPanelVariants = cva('t-tab-panel', {
  variants: {
    active: {
      true: 't-tab-panel--active',
      false: 't-tab-panel--inactive',
    },
  },
  defaultVariants: {
    active: false,
  },
});
