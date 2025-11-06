/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdChatContentProps {
  /**
   * 聊天内容对象，包含 `type` 和 `data` 字段
   * @default {}
   */
  content: {
    type: ObjectConstructor;
    value?: object;
    required?: boolean;
  };
  /**
   * 详见 `ChatMarkdown` 的 `options` 属性
   * @default {options: { gfm: true, pedantic: false, breaks: true }}
   */
  markdownProps?: {
    type: ObjectConstructor;
    value?: object;
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
