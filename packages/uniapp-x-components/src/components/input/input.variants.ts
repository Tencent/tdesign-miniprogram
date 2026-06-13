import { cva } from '../../utils/cva';

export const inputVariants = cva('t-input', {
  variants: {
    size: {
      small: 't-input--small',
      medium: 't-input--medium',
      large: 't-input--large',
    },
    status: {
      default: 't-input--status-default',
      success: 't-input--status-success',
      warning: 't-input--status-warning',
      error: 't-input--status-error',
    },
    disabled: { true: 't-input--disabled' },
    readonly: { true: 't-input--readonly' },
  },
  defaultVariants: {
    size: 'medium',
    status: 'default',
  },
});
