/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdSwitchProps } from './type';
const props: TdSwitchProps = {
  /** 自定义颜色，[打开时的颜色，关闭时的颜色]。组件默认颜色为 ['#0052d9', 'rgba(0, 0, 0, .26']。示例：[blue, gray] */
  colors: {
    type: Array,
  },
  /** 开关内容，[打开时的值，关闭时的值]。默认为 [true, false]。示例：[1, 0] */
  customValue: {
    type: Array,
  },
  /** 是否禁用组件 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 开关的标签 */
  label: {
    type: String,
    value: '',
  },
  /** 是否处于加载中状态 */
  loading: {
    type: Boolean,
    value: false,
  },
  /** 开关尺寸 */
  size: {
    type: String,
    value: 'medium',
  },
  /** 开关值 */
  value: {
    type: String,
    optionalTypes: [Number, Boolean],
    value: undefined,
  },
  /** 开关值，非受控属性 */
  defaultValue: {
    type: String,
    optionalTypes: [Number, Boolean],
    value: undefined,
  },
};

export default props;
