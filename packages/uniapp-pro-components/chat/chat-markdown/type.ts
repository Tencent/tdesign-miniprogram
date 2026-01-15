/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdChatMarkdownProps {
  /**
   * markdown 内容文本
   * @default ''
   */
  content: string;
  /**
   * Markdown 解析器基础配置
   * @default () => ({ gfm: true, pedantic: false, breaks: true })
   */
  options?: TdChatContentMDOptions;
  /**
   * 点击链接时触发
   */
  onClick?: (context: { detail: { event; node }; currentTarget; target }) => void;
}

export interface TdChatContentMDOptions {
  gfm?: boolean;
  pedantic?: boolean;
  smartLists?: boolean;
  breaks?: boolean;
}
