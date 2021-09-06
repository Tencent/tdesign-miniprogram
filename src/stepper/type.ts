/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-08-31 10:45:38
 * */

export interface TdStepperProps {
  /**
   * 禁用
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 禁用输入框
   * @default false
   */
  disableInput?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 输入框宽度
   */
  inputWidth?: {
    type: NumberConstructor;
    value?: number;
    required?: boolean;
  };
  /**
   * 标签
   * @default ''
   */
  label?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 最大值
   * @default 100
   */
  max?: {
    type: NumberConstructor;
    value?: number;
    required?: boolean;
  };
  /**
   * 最小值
   * @default 0
   */
  min?: {
    type: NumberConstructor;
    value?: number;
    required?: boolean;
  };
  /**
   * 步进
   * @default 1
   */
  step?: {
    type: NumberConstructor;
    value?: number;
    required?: boolean;
  };
  /**
   * 组件风格
   * @default normal
   */
  theme?: {
    type: StringConstructor;
    value?: 'normal' | 'mode';
    required?: boolean;
  };
  /**
   * 值
   * @default 0
   */
  value?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor>;
    value?: string | number;
    required?: boolean;
  };
}
