import { cva } from '../../utils/cva';
import type { DraggableTheme, DraggableSize } from './t-draggable.types';

export const draggableVariants = cva('t-draggable', {
  variants: {
    theme: {
      default: 't-draggable--default',
      primary: 't-draggable--primary',
      success: 't-draggable--success',
      warning: 't-draggable--warning',
      error: 't-draggable--error',
    },
    size: {
      small: 't-draggable--small',
      medium: 't-draggable--medium',
      large: 't-draggable--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
