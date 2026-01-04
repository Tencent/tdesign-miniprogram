/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdTabsProps } from './type';
export default {
  /** 动画效果设置。其中 duration 表示动画时长。（单位：秒） */
  animation: {
    type: Object,
  },
  /** 激活下划线的模式 */
  bottomLineMode: {
    type: String,
    default: 'fixed' as TdTabsProps['bottomLineMode'],
    validator(val: TdTabsProps['bottomLineMode']): boolean {
      if (!val) return true;
      return ['fixed', 'auto', 'full'].includes(val);
    },
  },
  /** 是否展示底部激活线条 */
  showBottomLine: {
    type: Boolean,
    default: true,
  },
  /** 选项卡头部空间是否均分 */
  spaceEvenly: {
    type: Boolean,
    default: true,
  },
  /** `1.1.10`。是否展示分割线 */
  split: {
    type: Boolean,
    default: true,
  },
  /** 是否开启粘性布局 */
  sticky: Boolean,
  /** 透传至 Sticky 组件 */
  stickyProps: {
    type: Object,
  },
  /** 是否可以滑动切换 */
  swipeable: {
    type: Boolean,
    default: true,
  },
  /** 标签的样式 */
  theme: {
    type: String,
    default: 'line' as TdTabsProps['theme'],
    validator(val: TdTabsProps['theme']): boolean {
      if (!val) return true;
      return ['line', 'tag', 'card'].includes(val);
    },
  },
  /** 激活的选项卡值 */
  value: {
    type: [String, Number],
  },
  /** 激活的选项卡值，非受控属性 */
  defaultValue: {
    type: [String, Number],
  },
  /** 激活的选项卡发生变化时触发 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
  /** 点击选项卡时触发 */
  onClick: {
    type: Function,
    default: () => ({}),
  },
  /** 页面滚动时触发 */
  onScroll: {
    type: Function,
    default: () => ({}),
  },
};
