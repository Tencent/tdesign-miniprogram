/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdTabBarProps } from './type';
export default {
  /** 是否显示外边框 */
  bordered: {
    type: Boolean,
    default: true,
  },
  /** 是否固定在底部 */
  fixed: {
    type: Boolean,
    default: true,
  },
  /** 固定在底部时是否开启占位 */
  placeholder: Boolean,
  /** 是否开启底部安全区适配 */
  safeAreaInsetBottom: {
    type: Boolean,
    default: true,
  },
  /** 标签栏的形状 */
  shape: {
    type: String,
    default: 'normal' as TdTabBarProps['shape'],
    validator(val: TdTabBarProps['shape']): boolean {
      if (!val) return true;
      return ['normal', 'round'].includes(val);
    },
  },
  /** 是否需要分割线 */
  split: {
    type: Boolean,
    default: true,
  },
  /** 选项风格 */
  theme: {
    type: String,
    default: 'normal' as TdTabBarProps['theme'],
    validator(val: TdTabBarProps['theme']): boolean {
      if (!val) return true;
      return ['normal', 'tag'].includes(val);
    },
  },
  /** 当前选中标签的索引 */
  value: {
    type: [String, Number, Array],
  },
  /** 当前选中标签的索引，非受控属性 */
  defaultValue: {
    type: [String, Number, Array],
  },
  /** 标签栏层级 */
  zIndex: {
    type: Number,
    default: 1,
  },
};
