import { cva } from '../../utils/cva';
import type { LocaleTheme, LocaleSize } from './t-locale.types';

export const localeVariants = cva('t-locale', {
  variants: {
    theme: {
      default: 't-locale--default',
      primary: 't-locale--primary',
      success: 't-locale--success',
      warning: 't-locale--warning',
      error: 't-locale--error',
    },
    size: {
      small: 't-locale--small',
      medium: 't-locale--medium',
      large: 't-locale--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
