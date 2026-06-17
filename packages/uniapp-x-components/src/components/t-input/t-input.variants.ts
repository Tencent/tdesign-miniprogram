import { cva } from '../../utils/cva';

/**
 * Input 根容器的变体（与 @tdesign/uniapp 对齐）：
 *  - layout：horizontal / vertical
 *  - align：left / center / right（用于 input 文字对齐）
 *  - status：default / success / warning / error
 *  - borderless：true 去除底部分割线
 *  - disabled / readonly
 */
export const inputVariants = cva('t-input', {
  variants: {
    layout: {
      horizontal: 't-input--layout-horizontal',
      vertical: 't-input--layout-vertical',
    },
    align: {
      left: 't-input--left',
      center: 't-input--center',
      right: 't-input--right',
    },
    status: {
      default: 't-input--default',
      success: 't-input--success',
      warning: 't-input--warning',
      error: 't-input--error',
    },
    borderless: {
      true: '',
      false: 't-input--border',
    },
    disabled: { true: 't-input--disabled' },
    readonly: { true: 't-input--readonly' },
  },
  defaultVariants: {
    layout: 'horizontal',
    align: 'left',
    status: 'default',
    borderless: false,
  },
});

/**
 * input control（真正的 <input>）的类名（受 align / disabled 影响）
 */
export const inputControlVariants = cva('t-input__control', {
  variants: {
    align: {
      left: 't-input--left',
      center: 't-input--center',
      right: 't-input--right',
    },
    disabled: { true: 't-input__control--disabled' },
    readonly: { true: 't-input__control--read-only' },
  },
  defaultVariants: {
    align: 'left',
  },
});

/**
 * tips 节点的类名（受 align / status 影响）
 */
export const inputTipsVariants = cva('t-input__tips', {
  variants: {
    align: {
      left: 't-input--left',
      center: 't-input--center',
      right: 't-input--right',
    },
    status: {
      default: 't-input--default',
      success: 't-input--success',
      warning: 't-input--warning',
      error: 't-input--error',
    },
  },
  defaultVariants: {
    align: 'left',
    status: 'default',
  },
});
