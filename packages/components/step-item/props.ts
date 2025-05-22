/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdStepItemProps } from './type';
const props: TdStepItemProps = {
  /** 步骤描述 */
  content: {
    type: String,
    value: '',
  },
  /** 图标。传入 slot 代表使用插槽，其他字符串代表使用内置图标 */
  icon: {
    type: String,
  },
  /** 当前步骤的状态：默认状态（未开始）、进行中状态、完成状态、错误状态 */
  status: {
    type: String,
    value: 'default',
  },
  /** 标题 */
  title: {
    type: String,
    value: '',
  },
};

export default props;
