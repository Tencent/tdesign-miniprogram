/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdStepItemProps } from './type';
export default {
  /** 步骤描述 */
  content: {
    type: String,
    default: '' as TdStepItemProps['content'],
  },
  /** 步骤条自定义内容 */
  extra: {
    type: String,
  },
  /** 图标。传入 slot 代表使用插槽，其他字符串代表使用内置图标 */
  icon: {
    type: String,
  },
  /** 当前步骤的状态：默认状态（未开始）、进行中状态、完成状态、错误状态 */
  status: {
    type: String,
    default: 'default' as TdStepItemProps['status'],
    validator(val: TdStepItemProps['status']): boolean {
      if (!val) return true;
      return ['default', 'process', 'finish', 'error'].includes(val);
    },
  },
  /** 标题 */
  title: {
    type: String,
    default: '' as TdStepItemProps['title'],
  },
};
