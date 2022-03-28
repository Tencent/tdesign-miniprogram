/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 10:58:05
 * */

import { TdStepsProps } from './type';
const props: TdStepsProps = {
  /** 当前步骤, 默认0 */
  current: {
    type: String,
    optionalTypes: [Number],
    value: 0,
  },
  /** 当前步骤的状态，有四种：process / finish / error / default ，默认process */
  currentStatus: {
    type: String,
    value: 'process',
  },
  /** 当前步骤 */
  defaultCurrent: {
    type: null,
    value: undefined,
  },
  /** 组件类名，用于设置组件外层元素元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 步骤条方向，有两种：横向和纵向 */
  layout: {
    type: String,
    value: 'horizontal',
  },
  /** 是否只读 */
  readonly: {
    type: Boolean,
    value: false,
  },
  /** 步骤条风格 */
  theme: {
    type: String,
    value: 'default',
  },
};

export default props;
