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
  /** 流式输出配置，控制尾部光标的显示与隐藏。尾部光标配置，true 使用默认光标 ▋，传对象可自定义光标字符 */
  streaming: {
    type: Object,
  },
};

export default props;
