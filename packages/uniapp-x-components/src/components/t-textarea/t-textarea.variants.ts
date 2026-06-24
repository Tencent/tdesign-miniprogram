import { cva } from '../../utils/cva';
import type { TextareaTheme, TextareaSize } from './t-textarea.types';

export const textareaVariants = cva('t-textarea', {
  variants: {
    theme: {
      default: 't-textarea--default',
      primary: 't-textarea--primary',
      success: 't-textarea--success',
      warning: 't-textarea--warning',
      error: 't-textarea--error',
    },
    size: {
      small: 't-textarea--small',
      medium: 't-textarea--medium',
      large: 't-textarea--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
