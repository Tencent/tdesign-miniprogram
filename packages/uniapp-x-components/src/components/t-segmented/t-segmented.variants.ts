import { cva } from '../../utils/cva';
import type { SegmentedTheme, SegmentedSize } from './t-segmented.types';

export const segmentedVariants = cva('t-segmented', {
  variants: {
    theme: {
      default: 't-segmented--default',
      primary: 't-segmented--primary',
      success: 't-segmented--success',
      warning: 't-segmented--warning',
      error: 't-segmented--error',
    },
    size: {
      small: 't-segmented--small',
      medium: 't-segmented--medium',
      large: 't-segmented--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
