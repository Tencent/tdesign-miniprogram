import { Lexer } from 'marked';
import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../../components/common/src/index';
import config from '../../../components/common/config';

const { prefix } = config;
const name = `${prefix}-chat-markdown`;

@wxComponent()
export default class ChatMarkdown extends SuperComponent {
  options: ComponentsOptionsType = {
    multipleSlots: true,
    addGlobalClass: true,
    styleIsolation: 'shared',
  };

  properties = {
    theme: {
      type: String,
      value: 'normal',
    },
    content: {
      type: String,
      value: '',
    },
    // 新增：支持直接传入markdown文本
    isMarkdown: {
      type: Boolean,
      value: true,
    },
    // 新增：marked配置选项
    markedOptions: {
      type: Object,
      value: {
        gfm: true,
        pedantic: false,
        breaks: true,
      },
    },
  };

  data = {
    COMPONENT_NAME: name,
    nodes: [], // 解析后的节点
    name, // 用于子组件查询父组件时的标识符
  };

  observers = {
    // 监听markdown文本变化，自动解析
    content: function (markdown: string) {
      // 判断isMarkdown是否为true
      if (this.data.isMarkdown) {
        this.parseMarkdown(markdown);
      } else {
        this.setData({ nodes: [] });
      }
    },
  };

  methods = {
    // 解析markdown文本
    parseMarkdown(markdown: string) {
      try {
        const lexer = new Lexer(this.data.markedOptions);
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
    attached() {
      // 组件挂载后，如果有markdown文本，进行解析
      if (this.data.isMarkdown) {
        this.parseMarkdown(this.data.content);
      }
    },
  };
}
