/**
 * NoticeBar 变体配置
 */

import { cva } from '../../utils/cva';

/**
 * t-notice-bar 根节点变体
 *  - theme: 决定文字色 + 背景色
 */
export const noticeBarVariants = cva('t-notice-bar', {
  variants: {
    theme: {
      info: 't-notice-bar--info',
      success: 't-notice-bar--success',
      warning: 't-notice-bar--warning',
      error: 't-notice-bar--error',
    },
  },
  defaultVariants: {
    theme: 'info',
  },
});
