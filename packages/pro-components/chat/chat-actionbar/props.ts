/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdChatActionbarProps } from './type';
const props: TdChatActionbarProps = {
  /** 操作栏配置 */
  actionBar: {
    type: Array,
    value: ['replay', 'copy', 'good', 'bad', 'share'],
  },
  /** 【实验】聊天消息的唯一标识 */
  chatId: {
    type: String,
    value: '',
  },
  /** 评价内容 */
  comment: {
    type: String,
    value: '',
  },
  /** 被复制的内容 */
  content: {
    type: String,
    value: '',
  },
  /** 【实验】复制内容的模式，可选 'markdown'（复制markdown原文）或 'text'（复制纯文本） */
  copyMode: {
    type: String,
    value: 'markdown',
  },
  /** 【讨论中】操作按钮是否可点击 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 【实验】操作栏位置 */
  placement: {
    type: String,
    value: 'start',
  },
};

export default props;
