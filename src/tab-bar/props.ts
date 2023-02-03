/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdTabBarProps } from './type';
const props: TdTabBarProps = {
  /** 是否显示外边框 */
  bordered: {
    type: Boolean,
    value: true,
  },
  /** 组件类名，用于设置外层元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 是否固定在底部 */
  fixed: {
    type: Boolean,
    value: true,
  },
  /** 是否为 iPhoneX 留出底部安全距离 */
  safeAreaInsetBottom: {
    type: Boolean,
    value: true,
  },
  /** 标签栏的形状 */
  shape: {
    type: String,
    value: 'normal',
  },
  /** 是否需要分割线 */
  split: {
    type: Boolean,
    value: true,
  },
  /** 选项风格 */
  theme: {
    type: String,
    value: 'normal',
  },
  /** 当前选中标签的索引 */
  value: {
    type: null,
    value: null,
  },
  /** 当前选中标签的索引，非受控属性 */
  defaultValue: {
    type: null,
    value: null,
  },
};

export default props;
