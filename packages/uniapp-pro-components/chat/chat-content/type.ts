/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdChatMarkdownProps as ChatMarkdownProps } from '../chat-markdown/type';

export interface TdChatContentProps {
  /**
   * 聊天内容对象
   */
  content: TdChatContentType;
  /**
   * marked 解析器的配置选项
   */
  markdownProps?: ChatMarkdownProps;
  /**
   * 消息角色，用于区分用户和助手的消息样式
   */
  role: 'user' | 'assistant' | 'system';
  /**
   * 正文状态
   */
  status?: 'error' | '';
  /**
   * 点击链接时触发
   */
  onClick?: (context: { detail: { event; node }; currentTarget; target }) => void;
}

export interface TdChatContentType {
  type: 'text' | 'markdown';
  data: string;
}
