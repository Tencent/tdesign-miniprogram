import { cva } from '../../utils/cva';
import type { DropdownMenuTheme, DropdownMenuSize } from './t-dropdown-menu.types';

export const dropdownMenuVariants = cva('t-dropdown-menu', {
  variants: {
    theme: {
      default: 't-dropdown-menu--default',
      primary: 't-dropdown-menu--primary',
      success: 't-dropdown-menu--success',
      warning: 't-dropdown-menu--warning',
      error: 't-dropdown-menu--error',
    },
    size: {
      small: 't-dropdown-menu--small',
      medium: 't-dropdown-menu--medium',
      large: 't-dropdown-menu--large',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'medium',
  },
});
