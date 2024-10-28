/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { SizeEnum } from '../common/common';

export interface TdStepperProps {
  /**
   * 禁用输入框
   * @default false
   */
  disableInput?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 禁用全部操作
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 组件类名，分别用于表示组件外层元素、输入框、右侧递增号、左侧递减号等元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-input', 't-class-add', 't-class-minus'];
  };
  /**
   * 输入框宽度，默认单位 `px`
   */
  inputWidth?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 是否整型
   * @default true
   */
  integer?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 最大值
   * @default 100
   */
  max?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 最小值
   * @default 0
   */
  min?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 组件尺寸
   * @default medium
   */
  size?: {
    type: StringConstructor;
    value?: SizeEnum;
  };
  /**
   * 步长
   * @default 1
   */
  step?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 组件风格
   * @default normal
   */
  theme?: {
    type: StringConstructor;
    value?: 'normal' | 'filled' | 'outline';
  };
  /**
   * 值
   * @default 0
   */
  value?: {
    type: null;
    value?: string | number;
  };
  /**
   * 值，非受控属性
   * @default 0
   */
  defaultValue?: {
    type: null;
    value?: string | number;
  };
}
