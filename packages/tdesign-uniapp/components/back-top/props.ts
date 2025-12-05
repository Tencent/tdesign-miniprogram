/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdBackTopProps } from './type';
export default {
  /** 是否绝对定位固定到屏幕右下方 */
  fixed: {
    type: Boolean,
    default: true,
  },
  /** 图标。值为 `false` 表示不显示图标。不传表示使用默认图标 `'backtop'` */
  icon: {
    type: [String, Boolean, Object],
    default: true as TdBackTopProps['icon'],
  },
  /** 页面滚动距离 */
  scrollTop: {
    type: Number,
    default: 0,
  },
  /** 文案 */
  text: {
    type: String,
    default: '',
  },
  /** 预设的样式类型 */
  theme: {
    type: String,
    default: 'round' as TdBackTopProps['theme'],
    validator(val: TdBackTopProps['theme']): boolean {
      if (!val) return true;
      return ['round', 'half-round', 'round-dark', 'half-round-dark'].includes(val);
    },
  },
  /** 滚动高度达到此参数值才出现 */
  visibilityHeight: {
    type: Number,
    default: 200,
  },
  /** 点击触发 */
  onToTop: {
    type: Function,
    default: () => ({}),
  },
};
