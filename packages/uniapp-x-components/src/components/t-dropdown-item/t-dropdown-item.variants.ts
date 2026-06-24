import { cva } from '../../utils/cva';
import type { DropdownItemTheme, DropdownItemSize } from './t-dropdown-item.types';

export const dropdownItemVariants = cva('t-dropdown-item', {
  variants: {
    theme: {
      default: 't-dropdown-item--default',
      primary: 't-dropdown-item--primary',
      success: 't-dropdown-item--success',
      warning: 't-dropdown-item--warning',
      error: 't-dropdown-item--error',
    },
    size: {
      small: 't-dropdown-item--small',
      medium: 't-dropdown-item--medium',
      large: 't-dropdown-item--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
