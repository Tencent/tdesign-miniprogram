/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdStepperProps } from './type';
export default {
  /** 禁用输入框 */
  disableInput: Boolean,
  /** 禁用全部操作 */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /** 输入框宽度，默认单位 `px` */
  inputWidth: {
    type: Number,
  },
  /** 是否整型 */
  integer: {
    type: Boolean,
    default: true,
  },
  /** 最大值 */
  max: {
    type: Number,
    default: 100,
  },
  /** 最小值 */
  min: {
    type: Number,
    default: 0,
  },
  /** 组件尺寸 */
  size: {
    type: String,
    default: 'medium' as TdStepperProps['size'],
    validator(val: TdStepperProps['size']): boolean {
      if (!val) return true;
      return ['small', 'medium', 'large'].includes(val);
    },
  },
  /** 步长 */
  step: {
    type: Number,
    default: 1,
  },
  /** 组件风格 */
  theme: {
    type: String,
    default: 'normal' as TdStepperProps['theme'],
    validator(val: TdStepperProps['theme']): boolean {
      if (!val) return true;
      return ['normal', 'filled', 'outline'].includes(val);
    },
  },
  /** 值 */
  value: {
    type: [String, Number],
    default: 0 as TdStepperProps['value'],
  },
  /** 值，非受控属性 */
  defaultValue: {
    type: [String, Number],
    default: 0 as TdStepperProps['defaultValue'],
  },
  /** 输入框失去焦点时触发 */
  onBlur: {
    type: Function,
    default: () => ({}),
  },
  /** 数值发生变更时触发 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
  /** 输入框聚焦时触发 */
  onFocus: {
    type: Function,
    default: () => ({}),
  },
  /** 数值超出限制时触发 */
  onOverlimit: {
    type: Function,
    default: () => ({}),
  },
};
