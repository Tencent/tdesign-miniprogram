/**
 * Tag 的变体配置（基于 cva）
 *
 * 类名前缀：t-tag
 * 命名约定：
 *  - 互斥变体（theme / variant / shape / size）使用 `t-tag--{value}`
 *  - boolean 修饰使用 `t-tag--{flag}`
 *
 * 注意：theme × variant 的具体颜色矩阵在 t-tag.theme.less 中通过 less mixin 展开，
 *      此处仅负责给根节点贴出对应的标识 class。
 */

import { cva } from '../../utils/cva';

export const tagVariants = cva('t-tag', {
  variants: {
    theme: {
      default: 't-tag--default',
      primary: 't-tag--primary',
      warning: 't-tag--warning',
      danger: 't-tag--danger',
      success: 't-tag--success',
    },
    variant: {
      dark: 't-tag--dark',
      light: 't-tag--light',
      outline: 't-tag--outline',
      'light-outline': 't-tag--light-outline',
    },
    shape: {
      square: 't-tag--square',
      round: 't-tag--round',
      mark: 't-tag--mark',
    },
    size: {
      small: 't-tag--small',
      medium: 't-tag--medium',
      large: 't-tag--large',
      'extra-large': 't-tag--extra-large',
    },
    closable: {
      true: 't-tag--closable',
    },
    disabled: {
      true: 't-tag--disabled',
    },
  },
  defaultVariants: {
    theme: 'default',
    variant: 'dark',
    shape: 'square',
    size: 'medium',
  },
});
