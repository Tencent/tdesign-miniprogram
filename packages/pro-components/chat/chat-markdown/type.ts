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
  /**
   * 是否还有后续分片输出（流式输出中为 true，结束时为 false）
   */
  hasNextChunk?: boolean;
  /**
   * 流式输出时是否补全/隐藏末尾未闭合的 markdown 语法（如链接、图片、加粗等），
   * 避免渲染过程中暴露原始符号与 URL；默认关闭以保持原有渲染效果
   * @default false
   */
  completeSyntax?: boolean;
  tail?: boolean | { content?: string };
}
