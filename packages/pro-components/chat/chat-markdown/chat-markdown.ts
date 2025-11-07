import { Lexer } from 'marked';
import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../../components/common/src/index';
import config from '../../../components/common/config';
import props from './props';
import { TdChatMarkdownProps } from './type';

const { prefix } = config;
const name = `${prefix}-chat-markdown`;

export interface ChatMarkdownProps extends TdChatMarkdownProps {}

@wxComponent()
export default class ChatMarkdown extends SuperComponent {
  options: ComponentsOptionsType = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    classPrefix: name,
    nodes: [], // 解析后的节点
    name, // 用于子组件查询父组件时的标识符
  };

  observers = {
    // 监听markdown文本变化，自动解析
    content: function (markdown: string) {
      this.parseMarkdown(markdown);
    },
  };

  methods = {
    // 解析markdown文本
    parseMarkdown(markdown: string) {
      try {
        const lexer = new Lexer(this.data.options);
        const tokens = lexer.lex(markdown);

        this.setData({ nodes: tokens });
      } catch (error) {
        console.error('Markdown parsing error:', error);
        // 解析失败时，将原始文本作为普通文本显示
        this.setData({
          nodes: [
            {
              type: 'text',
              raw: markdown,
              text: markdown,
            },
          ],
        });
      }
    },
  };

  lifetimes = {
    attached() {},
  };
}
