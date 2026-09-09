import { Lexer } from 'marked';
import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../../components/common/src/index';
import config from '../../../components/common/config';
import props from './props';
import { TdChatMarkdownProps } from './type';
import completeUnclosedInlineSyntax from './utils/stream-syntax';
import { resolveTailContent, injectTailToTokens } from './utils/tail-cursor';
import { hasLeakedInlineFormatting, maskInlineCodes, restoreMaskedInlineCodes } from './utils/marked-fallback';

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
    // streaming 变化时重新解析（如 hasNextChunk 从 true 变 false，光标消失）
    streaming: function () {
      this.parseMarkdown(this.data.content);
    },
  };

  methods = {
    // 解析markdown文本
    parseMarkdown(markdown: string) {
      try {
        const { streaming } = this.data;
        // 流式输出时对末尾未闭合语法做补全/隐藏（需显式开启 streaming.completeSyntax）
        const syntaxCompletionEnabled = streaming?.completeSyntax === true;
        const shouldComplete = streaming?.hasNextChunk && syntaxCompletionEnabled;
        const lexer = new Lexer(this.data.options);
        const originalTokens = lexer.lex(markdown);
        const source = shouldComplete ? completeUnclosedInlineSyntax(markdown, originalTokens.links) : markdown;
        let tokens = source === markdown ? originalTokens : new Lexer(this.data.options).lex(source);

        // 修正 marked 对“强调语法内包含行内代码”场景的 token 泄漏；与流式语法补全开关无关。
        if (hasLeakedInlineFormatting(tokens)) {
          const { source: maskedSource, masks } = maskInlineCodes(source);
          tokens = new Lexer(this.data.options).lex(maskedSource);
          restoreMaskedInlineCodes(tokens, masks);
        }

        // 尾部光标注入
        const tailChar = resolveTailContent(streaming?.tail);
        if (streaming?.hasNextChunk && tailChar) {
          injectTailToTokens(tokens, tailChar);
        }

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
