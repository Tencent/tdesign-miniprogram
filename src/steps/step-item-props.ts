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
  /** 组件类名，用于设置组件外层元素元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 图标。传入 slot 代表使用插槽，其他字符串代表使用内置图标 */
  icon: {
    type: String,
  },
  /** 当前步骤的状态 */
  status: {
    type: String,
    value: 'default',
  },
  /** 子步骤条，仅支持 layout  = 'vertical' 时 */
  subStepItems: {
    type: Array,
    value: [],
  },
  /** 标题 */
  title: {
    type: String,
    value: '',
  },
};

export default props;
