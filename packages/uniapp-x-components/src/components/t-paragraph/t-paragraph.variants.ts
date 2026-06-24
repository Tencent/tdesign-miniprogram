import { cva } from '../../utils/cva';
import type { ParagraphTheme, ParagraphSize } from './t-paragraph.types';

export const paragraphVariants = cva('t-paragraph', {
  variants: {
    theme: {
      default: 't-paragraph--default',
      primary: 't-paragraph--primary',
      success: 't-paragraph--success',
      warning: 't-paragraph--warning',
      error: 't-paragraph--error',
    },
    size: {
      small: 't-paragraph--small',
      medium: 't-paragraph--medium',
      large: 't-paragraph--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
