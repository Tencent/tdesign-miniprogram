import { cva } from '../../utils/cva';
import type { GuideTheme, GuideSize } from './t-guide.types';

export const guideVariants = cva('t-guide', {
  variants: {
    theme: {
      default: 't-guide--default',
      primary: 't-guide--primary',
      success: 't-guide--success',
      warning: 't-guide--warning',
      error: 't-guide--error',
    },
    size: {
      small: 't-guide--small',
      medium: 't-guide--medium',
      large: 't-guide--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
