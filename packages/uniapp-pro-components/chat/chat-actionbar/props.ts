/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdChatActionbarProps } from './type';
export default {
  /** 操作栏配置 */
  actionBar: {
    type: Array,
    default: () => ['replay', 'copy', 'good', 'bad', 'share'],
  },
  /** 【实验】聊天消息的唯一标识 */
  chatId: {
    type: String,
    default: '',
  },
  /** 评价内容 */
  comment: {
    type: String,
    default: '',
  },
  /** 被复制的内容 */
  content: {
    type: String,
    default: '',
  },
  /** 【实验】复制内容的模式，可选 'markdown'（复制markdown原文）或 'text'（复制纯文本） */
  copyMode: {
    type: String,
    default: 'markdown' as TdChatActionbarProps['copyMode'],
    validator(val: TdChatActionbarProps['copyMode']): boolean {
      if (!val) return true;
      return ['markdown', 'text'].includes(val);
    },
  },
  /** 【讨论中】操作按钮是否可点击 */
  disabled: Boolean,
  /** 【实验】操作栏位置 */
  placement: {
    type: String,
    default: 'start' as TdChatActionbarProps['placement'],
    validator(val: TdChatActionbarProps['placement']): boolean {
      if (!val) return true;
      return ['start', 'end', 'space-around', 'space-between', 'longpress'].includes(val);
    },
  },
  /** 【实验】长按触发点的位置信息，用于定位 popover */
  longPressPosition: {
    type: Object,
    value: null,
  },
  /** 点击点赞，点踩，复制，分享，重新生成按钮时触发发 */
  onActions: {
    type: Function,
    default: () => ({}),
  },
};
