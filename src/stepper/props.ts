/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 10:58:05
 * */

import { TdStepperProps } from './type';
const props: TdStepperProps = {
  /** 禁用全部操作 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 禁用输入框 */
  disableInput: {
    type: Boolean,
    value: false,
  },
  /** 组件类名，分别用于表示组件外层元素、输入框、右侧递增号、左侧递减号等元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 输入框宽度 */
  inputWidth: {
    type: Number,
  },
  /** 最大值 */
  max: {
    type: Number,
    value: 100,
  },
  /** 最小值 */
  min: {
    type: Number,
    value: 0,
  },
  /** 步长 */
  step: {
    type: Number,
    value: 1,
  },
  /** 组件风格 */
  theme: {
    type: String,
    value: 'normal',
  },
  /** 值 */
  value: {
    type: String,
    optionalTypes: [Number],
    value: 0,
  },
};

export default props;
