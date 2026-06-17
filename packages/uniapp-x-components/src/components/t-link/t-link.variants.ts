/**
 * Link 变体配置
 */

import { cva } from '../../utils/cva';

export const linkVariants = cva('t-link', {
  variants: {
    theme: {
      default: 't-link--default',
      primary: 't-link--primary',
      danger: 't-link--danger',
      warning: 't-link--warning',
      success: 't-link--success',
    },
    size: {
      small: 't-link--small',
      medium: 't-link--medium',
      large: 't-link--large',
    },
    underline: { true: 't-link--underline' },
    disabled: { true: 't-link--disabled' },
    hover: { true: 't-link--hover' },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
