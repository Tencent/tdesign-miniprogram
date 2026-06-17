import { cva } from '../../utils/cva';

/**
 * t-message 根节点变体
 *  - theme: info / success / warning / error 4 主题
 *  - align: left / center 文本对齐
 */
export const messageVariants = cva('t-message', {
  variants: {
    theme: {
      info: 't-message--info',
      success: 't-message--success',
      warning: 't-message--warning',
      error: 't-message--error',
    },
    align: {
      left: 't-message--align-left',
      center: 't-message--align-center',
    },
  },
  defaultVariants: {
    theme: 'info',
    align: 'left',
  },
});
