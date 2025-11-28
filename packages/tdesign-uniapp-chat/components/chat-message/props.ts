/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdChatMessageProps } from './type';
export default {
  /** 动画效果 */
  animation: {
    type: String,
    default: 'skeleton' as TdChatMessageProps['animation'],
    validator(val: TdChatMessageProps['animation']): boolean {
      if (!val) return true;
      return ['skeleton', 'moving', 'gradient', 'dots'].includes(val);
    },
  },
  /** 自定义的头像配置 */
  avatar: {
    type: String,
  },
  /** 聊天内容组件的属性 */
  chatContentProps: {
    type: Object,
  },
  /** 聊天消息的唯一标识 */
  chatId: {
    type: String,
    default: '',
  },
  /** 消息内容，数组中的每一项为一个消息内容对象 */
  content: {
    type: Array,
  },
  /** 对话单元的时间配置 */
  datetime: {
    type: String,
  },
  /** 自定义的昵称 */
  name: {
    type: String,
  },
  /** 消息显示位置 */
  placement: {
    type: String,
    validator(val: TdChatMessageProps['placement']): boolean {
      if (!val) return true;
      return ['left', 'right'].includes(val);
    },
  },
  /** 消息角色 */
  role: {
    type: String,
    default: 'user' as TdChatMessageProps['role'],
    validator(val: TdChatMessageProps['role']): boolean {
      if (!val) return true;
      return ['user', 'assistant', 'system'].includes(val);
    },
  },
  /** 消息状态 */
  status: {
    type: String,
    validator(val: TdChatMessageProps['status']): boolean {
      if (!val) return true;
      return ['pending', 'streaming', 'complete', 'stop', 'error'].includes(val);
    },
  },
  /** 气泡框样式，支持基础、线框、文字三种类型 */
  variant: {
    type: String,
    default: 'base' as TdChatMessageProps['variant'],
    validator(val: TdChatMessageProps['variant']): boolean {
      if (!val) return true;
      return ['base', 'outline', 'text'].includes(val);
    },
  },
  /** null */
  onLongpress: {
    type: Function,
    default: () => ({}),
  },
};
