/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdChatListProps } from './type';
export default {
  /** 动画效果，支持「渐变加载动画」,「闪烁加载动画」, 「骨架屏」三种 */
  animation: {
    type: String,
    default: 'skeleton' as TdChatListProps['animation'],
    validator(val: TdChatListProps['animation']): boolean {
      if (!val) return true;
      return ['skeleton', 'moving', 'gradient', 'dot'].includes(val);
    },
  },
  /** 对话列表的数据 */
  data: {
    type: Array,
  },
  /** 对话布局形式，支持两侧对齐与左对齐。使用插槽自定义对话内容时不生效，得用`t-chat-message`的`placement`属性 */
  layout: {
    type: String,
    default: 'both' as TdChatListProps['layout'],
    validator(val: TdChatListProps['layout']): boolean {
      if (!val) return true;
      return ['both', 'single'].includes(val);
    },
  },
  /** 是否表现为倒序 */
  reverse: {
    type: Boolean,
    default: true,
  },
  /** 滚动事件的回调 */
  onScroll: {
    type: Function,
    default: () => ({}),
  },
};
