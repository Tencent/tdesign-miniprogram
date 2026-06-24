import { cva } from '../../utils/cva';
import type { ConfigProviderTheme, ConfigProviderSize } from './t-config-provider.types';

export const configProviderVariants = cva('t-config-provider', {
  variants: {
    theme: {
      default: 't-config-provider--default',
      primary: 't-config-provider--primary',
      success: 't-config-provider--success',
      warning: 't-config-provider--warning',
      error: 't-config-provider--error',
    },
    size: {
      small: 't-config-provider--small',
      medium: 't-config-provider--medium',
      large: 't-config-provider--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
