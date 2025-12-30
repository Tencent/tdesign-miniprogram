/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdChatThinkingProps } from './type';
export default {
  /** 内容区域最大高度，超出会自动滚动 */
  animation: {
    type: String,
    default: 'moving' as TdChatThinkingProps['animation'],
    validator(val: TdChatThinkingProps['animation']): boolean {
      if (!val) return true;
      return ['skeleton', 'moving', 'gradient', 'dot'].includes(val);
    },
  },
  /** 是否折叠 */
  collapsed: Boolean,
  /** 思考内容对象 */
  content: {
    type: Object,
    required: true,
  },
  /** 布局方式 */
  layout: {
    type: String,
    default: 'block' as TdChatThinkingProps['layout'],
    validator(val: TdChatThinkingProps['layout']): boolean {
      if (!val) return true;
      return ['block', 'border'].includes(val);
    },
  },
  /** 内容区域最大高度，超出会自动滚动 */
  maxHeight: {
    type: Number,
  },
  /** 思考状态 */
  status: {
    type: String,
    default: 'pending' as TdChatThinkingProps['status'],
    required: true,
    validator(val: TdChatThinkingProps['status']): boolean {
            return ['complete', 'stop', 'error', 'pending'].includes(val);
    },
  },
  /** 切换折叠面板时触发 */
  onCollapsedChange: {
    type: Function,
    default: () => ({}),
  },
};
