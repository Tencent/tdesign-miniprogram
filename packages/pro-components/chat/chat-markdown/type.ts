/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdChatMarkdownProps {
  /**
   * markdown 内容文本
   * @default ''
   */
  content: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * Markdown 解析器基础配置
   * @default { gfm: true, pedantic: false, breaks: true }
   */
  options?: {
    type: ObjectConstructor;
    value?: TdChatContentMDOptions;
  };
  /**
   * 流式输出配置，控制尾部光标的显示与隐藏。尾部光标配置，true 使用默认光标 ▋，传对象可自定义光标字符
   */
  streaming?: {
    type: ObjectConstructor;
    value?: TdChatMarkdownStreamingOptions;
  };
}

export interface TdChatContentMDOptions {
  gfm?: boolean;
  pedantic?: boolean;
  smartLists?: boolean;
  breaks?: boolean;
}

export interface TdChatMarkdownStreamingOptions {
  hasNextChunk?: boolean;
  tail?: boolean | { content?: string };
}
