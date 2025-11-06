/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { ChatMarkdownProps } from '../chat-markdown/index';

export interface TdChatContentProps {
  /**
   * 聊天内容对象
   */
  content: {
    type: ObjectConstructor;
    value?: TdChatContentType;
    required?: boolean;
  };
  /**
   * marked 解析器的配置选项
   */
  markdownProps?: {
    type: ObjectConstructor;
    value?: ChatMarkdownProps;
  };
  /**
   * 消息角色，用于区分用户和助手的消息样式
   */
  role: {
    type: StringConstructor;
    value?: 'user' | 'assistant' | 'system';
    required?: boolean;
  };
  /**
   * 正文状态
   */
  status?: {
    type: StringConstructor;
    value?: 'error' | '';
  };
}

export interface TdChatContentType {
  type: 'text' | 'markdown';
  data: string;
}
