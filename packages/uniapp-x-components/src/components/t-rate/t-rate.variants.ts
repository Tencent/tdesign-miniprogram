import { cva } from '../../utils/cva';
import type { RateTheme, RateSize } from './t-rate.types';

export const rateVariants = cva('t-rate', {
  variants: {
    theme: {
      default: 't-rate--default',
      primary: 't-rate--primary',
      success: 't-rate--success',
      warning: 't-rate--warning',
      error: 't-rate--error',
    },
    size: {
      small: 't-rate--small',
      medium: 't-rate--medium',
      large: 't-rate--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
