/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdChatMarkdownProps } from './type';
const props: TdChatMarkdownProps = {
  /** markdown 内容文本 */
  content: {
    type: String,
    value: '',
    required: true,
  },
  /** Markdown 解析器基础配置 */
  options: {
    type: Object,
    value: { gfm: true, pedantic: false, breaks: true },
  },
  /** 流式输出配置：`hasNextChunk` 表示是否还有后续分片（输出中为 true，结束时为 false）；`completeSyntax` 默认为 false，仅控制是否处理流式末尾未闭合的 Markdown 语法。设为 true 时，会对末尾未闭合的链接、图片、加粗、行内代码等语法进行补全或隐藏，避免暴露原始符号与 URL；`tail` 控制尾部光标，true 使用默认光标 ▋，传对象可自定义光标字符 */
  streaming: {
    type: Object,
  },
};

export default props;
