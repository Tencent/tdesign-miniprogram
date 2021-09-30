/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-09-30 11:31:06
 * */

export interface TdStepsProps {
  /**
   * 当前步骤
   */
  current?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor>;
    value?: string | number;
    required?: boolean;
  };
  /**
   * 步骤条方向，有两种：横向和纵向
   * @default horizontal
   */
  direction?: {
    type: StringConstructor;
    value?: 'horizontal' | 'vertical';
    required?: boolean;
  };
  /**
   * 组件类名，用于设置组件外层元素元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class'];
    required?: boolean;
  };
  /**
   * 是否只读
   * @default false
   */
  readonly?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 步骤条风格
   * @default default
   */
  theme?: {
    type: StringConstructor;
    value?: 'default' | 'dot';
    required?: boolean;
  };
}

export interface TdStepItemProps {
  /**
   * 步骤描述
   * @default ''
   */
  content?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 组件类名，用于设置组件外层元素元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-content', 't-class-title', 't-class-description', 't-class-extra'];
    required?: boolean;
  };
  /**
   * 图标
   */
  icon?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 当前步骤的状态
   * @default default
   */
  status?: {
    type: StringConstructor;
    value?: StepStatus;
    required?: boolean;
  };
  /**
   * 标题
   * @default ''
   */
  title?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
}

export type StepStatus = 'default' | 'process' | 'finish' | 'error';
