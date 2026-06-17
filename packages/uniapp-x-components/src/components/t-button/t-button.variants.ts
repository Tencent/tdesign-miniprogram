/**
 * Button 的变体配置（基于 cva）
 *
 * 类名前缀：t-button
 * 命名约定：
 *  - 互斥变体（variant/theme）使用 `t-button--variant-*` / `t-button--theme-*` 命名空间
 *  - size / shape 是经典枚举，使用扁平命名 `t-button--{value}`
 *  - boolean 修饰使用 `t-button--{flag}`
 */

import { cva } from '../../utils/cva';

export const buttonVariants = cva('t-button', {
  variants: {
    variant: {
      base: 't-button--variant-base',
      outline: 't-button--variant-outline',
      dashed: 't-button--variant-dashed',
      text: 't-button--variant-text',
    },
    theme: {
      default: 't-button--theme-default',
      primary: 't-button--theme-primary',
      danger: 't-button--theme-danger',
      warning: 't-button--theme-warning',
      success: 't-button--theme-success',
    },
    size: {
      'extra-small': 't-button--extra-small',
      small: 't-button--small',
      medium: 't-button--medium',
      large: 't-button--large',
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
