/**
 * CollapsePanel 变体配置
 */

import { cva } from '../../utils/cva';

export const collapsePanelVariants = cva('t-collapse-panel', {
  variants: {
    placement: {
      top: 't-collapse-panel--top',
      bottom: 't-collapse-panel--bottom',
    },
    expanded: {
      true: 't-collapse-panel--expanded',
    },
    disabled: {
      true: 't-collapse-panel--disabled',
    },
  },
  defaultVariants: {
    placement: 'bottom',
  },
});
