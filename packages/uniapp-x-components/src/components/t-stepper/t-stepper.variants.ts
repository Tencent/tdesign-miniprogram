import { cva } from '../../utils/cva';
import type { StepperTheme, StepperSize } from './t-stepper.types';

export const stepperVariants = cva('t-stepper', {
  variants: {
    theme: {
      default: 't-stepper--default',
      primary: 't-stepper--primary',
      success: 't-stepper--success',
      warning: 't-stepper--warning',
      error: 't-stepper--error',
    },
    size: {
      small: 't-stepper--small',
      medium: 't-stepper--medium',
      large: 't-stepper--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
