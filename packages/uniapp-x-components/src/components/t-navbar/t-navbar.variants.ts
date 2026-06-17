/**
 * Navbar 变体配置
 */

import { cva } from '../../utils/cva';

export const navbarVariants = cva('t-navbar', {
  variants: {
    fixed: {
      true: 't-navbar--fixed',
      false: '',
    },
    visible: {
      true: 't-navbar--visible',
      false: 't-navbar--hide',
    },
  },
  defaultVariants: {
    fixed: true,
    visible: true,
  },
});
