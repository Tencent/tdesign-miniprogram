/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdStepItemProps {
  /**
   * 步骤描述
   * @default ''
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 组件类名，用于设置组件外层元素元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-content', 't-class-title', 't-class-description', 't-class-extra'];
  };
  /**
   * 图标。传入 slot 代表使用插槽，其他字符串代表使用内置图标
   */
  icon?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 当前步骤的状态：默认状态（未开始）、进行中状态、完成状态、错误状态
   * @default default
   */
  status?: {
    type: StringConstructor;
    value?: StepStatus;
  };
  /**
   * 子步骤条，仅支持 layout  = 'vertical' 时
   * @default []
   * @deprecated
   */
  subStepItems?: {
    type: ArrayConstructor;
    value?: SubStepItem[];
  };
  /**
   * 标题
   * @default ''
   */
  title?: {
    type: StringConstructor;
    value?: string;
  };
}

export type StepStatus = 'default' | 'process' | 'finish' | 'error';

export interface SubStepItem {
  status: StepStatus;
  title: string;
}
