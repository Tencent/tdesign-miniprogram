/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdStepItemProps {
  /**
   * 步骤描述
   * @default ''
   */
  content?: string;
  /**
   * 步骤条自定义内容
   */
  extra?: string;
  /**
   * 图标。传入 slot 代表使用插槽，其他字符串代表使用内置图标
   */
  icon?: string;
  /**
   * 当前步骤的状态：默认状态（未开始）、进行中状态、完成状态、错误状态
   * @default default
   */
  status?: StepStatus;
  /**
   * 标题
   * @default ''
   */
  title?: string;
}

export type StepStatus = 'default' | 'process' | 'finish' | 'error';
