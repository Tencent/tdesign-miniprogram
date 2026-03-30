import { Lexer } from 'marked';
import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../../components/common/src/index';
import config from '../../../components/common/config';
import props from './props';
import { TdChatMarkdownProps } from './type';

const { prefix } = config;
const name = `${prefix}-chat-markdown`;

const DEFAULT_TAIL_CONTENT = '▋';

/** 解析 tail 参数，返回光标字符；不需要显示时返回 null */
function resolveTailContent(tail?: boolean | { content?: string }): string | null {
  if (!tail) return null;
  if (typeof tail === 'boolean') return DEFAULT_TAIL_CONTENT;
  return tail.content || DEFAULT_TAIL_CONTENT;
}

/**
 * 将列表项的子 tokens 展平，供 injectTailToTokens 递归使用。
 * marked 的 list token 结构：list.items[].tokens（而非 list.tokens）
 */
function flatListItems(items: any[]): any[] {
  return items.reduce((result: any[], item: any) => {
    if (item.tokens?.length) result.push(...item.tokens);
    return result;
  }, []);
}

/**
 * 从后往前遍历 token 树，找到最后一个非空 text 叶子节点，打上 isTail 标记。
 * - 有子节点（tokens / items）时优先递归
 * - 末尾是 code / table / image 等非 text 节点时静默跳过，不注入
 * @returns 是否成功注入
 */
function injectTailToTokens(tokens: any[], tailChar: string): boolean {
  for (let i = tokens.length - 1; i >= 0; i -= 1) {
    const token = tokens[i];
    // 优先递归子节点
    let children: any[] | null = null;
    if (token.tokens?.length) {
      children = token.tokens;
    } else if (token.items?.length) {
      children = flatListItems(token.items);
    }
    if (children?.length) {
      if (injectTailToTokens(children, tailChar)) return true;
    }
    // 叶子文本节点且内容非空
    if (token.type === 'text' && (token.text || token.raw)?.trim()) {
      token.isTail = true;
      token.tailContent = tailChar;
      return true;
    }
  }
  return false;
}

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
        const lexer = new Lexer(this.data.options);
        const tokens = lexer.lex(markdown);

        // 尾部光标注入
        const { streaming } = this.data;
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
