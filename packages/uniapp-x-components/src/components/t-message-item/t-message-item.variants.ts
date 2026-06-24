import { cva } from '../../utils/cva';
import type { MessageItemTheme, MessageItemSize } from './t-message-item.types';

export const messageItemVariants = cva('t-message-item', {
  variants: {
    theme: {
      default: 't-message-item--default',
      primary: 't-message-item--primary',
      success: 't-message-item--success',
      warning: 't-message-item--warning',
      error: 't-message-item--error',
    },
    size: {
      small: 't-message-item--small',
      medium: 't-message-item--medium',
      large: 't-message-item--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
