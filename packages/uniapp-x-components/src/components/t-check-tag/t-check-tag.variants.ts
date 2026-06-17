/**
 * CheckTag 变体配置
 *
 * 复用 t-tag 的视觉风格 class（共用 .t-tag.theme.less），
 * 这里加 t-check-tag 标记 + 选中态修饰符。
 */

import { cva } from '../../utils/cva';

export const checkTagVariants = cva('t-tag t-check-tag', {
  variants: {
    shape: {
      square: 't-tag--square',
      round: 't-tag--round',
      mark: 't-tag--mark',
    },
    size: {
      small: 't-tag--small',
      medium: 't-tag--medium',
      large: 't-tag--large',
    },
    variant: {
      dark: 't-tag--dark',
      light: 't-tag--light',
      outline: 't-tag--outline',
      'light-outline': 't-tag--light-outline',
    },
    /** 选中（即 default theme）/ 未选中 */
    checked: {
      true: 't-tag--primary t-check-tag--checked',
      false: 't-tag--default',
    },
    closable: { true: 't-tag--closable' },
    disabled: { true: 't-tag--disabled' },
  },
  defaultVariants: {
    shape: 'square',
    size: 'medium',
    variant: 'dark',
    checked: false,
  },
});
