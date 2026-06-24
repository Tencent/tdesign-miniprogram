import { cva } from '../../utils/cva';
import type { SearchTheme, SearchSize } from './t-search.types';

export const searchVariants = cva('t-search', {
  variants: {
    theme: {
      default: 't-search--default',
      primary: 't-search--primary',
      success: 't-search--success',
      warning: 't-search--warning',
      error: 't-search--error',
    },
    size: {
      small: 't-search--small',
      medium: 't-search--medium',
      large: 't-search--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
