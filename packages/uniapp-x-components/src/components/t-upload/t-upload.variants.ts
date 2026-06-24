import { cva } from '../../utils/cva';
import type { UploadTheme, UploadSize } from './t-upload.types';

export const uploadVariants = cva('t-upload', {
  variants: {
    theme: {
      default: 't-upload--default',
      primary: 't-upload--primary',
      success: 't-upload--success',
      warning: 't-upload--warning',
      error: 't-upload--error',
    },
    size: {
      small: 't-upload--small',
      medium: 't-upload--medium',
      large: 't-upload--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
