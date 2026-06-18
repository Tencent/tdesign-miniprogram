/**
 * Button 的变体配置（基于 cva）
 *
 * 类名前缀：t-button
 * 命名约定（与 @tdesign/uniapp 端 button.less 对齐）：
 *  - variant：base 不输出 class；outline / dashed / text 直接用 `t-button--{value}`
 *  - theme：直接用 `t-button--{value}`，例如 `t-button--primary`
 *  - size：使用 `t-button--size-{value}` 前缀（与 uniapp 端 .button-size mixin 一致）
 *  - shape：使用 `t-button--{value}`，例如 `t-button--round`
 *  - boolean 修饰：使用 `t-button--{flag}`
 */

import { cva } from '../../utils/cva';

export const buttonVariants = cva('t-button', {
  variants: {
    variant: {
      base: '',
      outline: 't-button--outline',
      dashed: 't-button--dashed',
      text: 't-button--text',
    },
    theme: {
      default: 't-button--default',
      primary: 't-button--primary',
      danger: 't-button--danger',
      warning: 't-button--warning',
      success: 't-button--success',
    },
    size: {
      'extra-small': 't-button--size-extra-small',
      small: 't-button--size-small',
      medium: 't-button--size-medium',
      large: 't-button--size-large',
    },
    shape: {
      rectangle: 't-button--rectangle',
      square: 't-button--square',
      round: 't-button--round',
      circle: 't-button--circle',
    },
    block: {
      true: 't-button--block',
    },
    disabled: {
      true: 't-button--disabled',
    },
    loading: {
      true: 't-button--loading',
    },
    ghost: {
      true: 't-button--ghost',
    },
  },
  defaultVariants: {
    variant: 'base',
    theme: 'default',
    size: 'medium',
    shape: 'rectangle',
  },
});
