/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdChatContentProps } from './type';
export default {
  /** 聊天内容对象 */
  content: {
    type: Object,
    required: true,
  },
  /** marked 解析器的配置选项 */
  markdownProps: {
    type: Object,
  },
  /** 消息角色，用于区分用户和助手的消息样式	 */
  role: {
    type: String,
    required: true,
    validator(val: TdChatContentProps['role']): boolean {
            return ['user', 'assistant', 'system'].includes(val);
    },
  },
  /** 正文状态 */
  status: {
    type: String,
    validator(val: TdChatContentProps['status']): boolean {
      if (!val) return true;
      return ['error', ''].includes(val);
    },
  },
  /** 点击链接时触发 */
  onClick: {
    type: Function,
    default: () => ({}),
  },
};
