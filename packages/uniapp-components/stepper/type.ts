/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { SizeEnum } from '../common/common';

export interface TdStepperProps {
  /**
   * 禁用输入框
   * @default false
   */
  disableInput?: boolean;
  /**
   * 禁用全部操作
   */
  disabled?: boolean;
  /**
   * 输入框宽度，默认单位 `px`
   */
  inputWidth?: number;
  /**
   * 是否整型
   * @default true
   */
  integer?: boolean;
  /**
   * 最大值
   * @default 100
   */
  max?: number;
  /**
   * 最小值
   * @default 0
   */
  min?: number;
  /**
   * 组件尺寸
   * @default medium
   */
  size?: SizeEnum;
  /**
   * 步长
   * @default 1
   */
  step?: number;
  /**
   * 组件风格
   * @default normal
   */
  theme?: 'normal' | 'filled' | 'outline';
  /**
   * 值
   * @default 0
   */
  value?: string | number;
  /**
   * 值，非受控属性
   * @default 0
   */
  defaultValue?: string | number;
  /**
   * 输入框失去焦点时触发
   */
  onBlur?: (context: { type: string | number }) => void;
  /**
   * 数值发生变更时触发
   */
  onChange?: (context: { value: string | number }) => void;
  /**
   * 输入框聚焦时触发
   */
  onFocus?: (context: { value: string | number }) => void;
  /**
   * 数值超出限制时触发
   */
  onOverlimit?: (context: { type: 'minus' | 'plus' }) => void;
}
