/**
 * Loading 的变体配置（基于 cva）
 *
 * 类名前缀：t-loading
 * 命名约定：
 *  - 互斥变体（theme/layout）使用 `t-loading--{value}`
 *  - boolean 修饰使用 `t-loading--{flag}`
 */

import { cva } from '../../utils/cva';

export const loadingVariants = cva('t-loading', {
  variants: {
    layout: {
      horizontal: 't-loading--horizontal',
      vertical: 't-loading--vertical',
    },
    fullscreen: {
      true: 't-loading--fullscreen',
    },
    inheritColor: {
      true: 't-loading--inherit-color',
    },
  },
  defaultVariants: {
    layout: 'horizontal',
  },
});

export const loadingSpinnerVariants = cva('t-loading__spinner', {
  variants: {
    theme: {
      circular: 't-loading__spinner--circular',
      spinner: 't-loading__spinner--spinner',
      dots: 't-loading__spinner--dots',
    },
    reverse: {
      true: 't-loading__spinner--reverse',
    },
  },
  defaultVariants: {
    theme: 'circular',
  },
});

export const loadingTextVariants = cva('t-loading__text', {
  variants: {
    layout: {
      horizontal: 't-loading__text--horizontal',
      vertical: 't-loading__text--vertical',
    },
  },
  defaultVariants: {
    layout: 'horizontal',
  },
});
