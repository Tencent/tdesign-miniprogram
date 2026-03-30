<template>
  <view
    :class="classPrefix + ' ' + classPrefix + '--normal'"
    :style="'' + tools._style([customStyle])"
  >
    <chat-markdown-node :nodes="nodes" />
  </view>
</template>
<script>
import './polyfill';
import chatMarkdownNode from '../chat-markdown-node/chat-markdown-node.vue';
// #ifdef APP-PLUS
import { Lexer as LexerUni } from '../npm/marked/uniapp';
// #endif

// #ifndef APP-PLUS
import { Lexer } from '../npm/marked';
// #endif

import { prefix } from '@tdesign/uniapp/common/config';
import props from './props';
import tools from '@tdesign/uniapp/common/utils.wxs';
import { uniComponent } from '@tdesign/uniapp/common/src/index';

const name = `${prefix}-chat-markdown`;

const DEFAULT_TAIL_CONTENT = '▋';

function resolveTailContent(tail) {
  if (!tail) return null;
  if (typeof tail === 'boolean') return DEFAULT_TAIL_CONTENT;
  return tail.content || DEFAULT_TAIL_CONTENT;
}

function flatListItems(items) {
  return items.reduce((result, item) => {
    if (item.tokens?.length) result.push(...item.tokens);
    return result;
  }, []);
}

function injectTailToTokens(tokens, tailChar) {
  for (let i = tokens.length - 1; i >= 0; i -= 1) {
    const token = tokens[i];
    let children = null;
    if (token.tokens?.length) {
      children = token.tokens;
    } else if (token.items?.length) {
      children = flatListItems(token.items);
    }
    if (children?.length) {
      if (injectTailToTokens(children, tailChar)) return true;
    }
    if (token.type === 'text' && (token.text || token.raw)?.trim()) {
      token.isTail = true;
      token.tailContent = tailChar;
      return true;
    }
  }
  return false;
}

export default {
  components: {
    chatMarkdownNode,
  },
  ...uniComponent({
    name,
    options: {
      multipleSlots: true,
      styleIsolation: 'shared',
    },

    props: {
      ...props,
    },
    data() {
      return {
        classPrefix: name,
        nodes: [], // 解析后的节点
        name, // 用于子组件查询父组件时的标识符
        tools,
      };
    },

    watch: {
      content: {
        handler(markdown) {
          this.parseMarkdown(markdown);
        },
        immediate: true,
        deep: true,
      },
      streaming: {
        handler() {
          this.parseMarkdown(this.content);
        },
        deep: true,
      },
    },

    methods: {
    // 解析markdown文本
      parseMarkdown(markdown) {
        try {
          let lexer;
          // #ifdef APP-PLUS
          lexer = new LexerUni(this.options);
          // #endif
          // #ifndef APP-PLUS
          lexer = new Lexer(this.options);
          // #endif

          const tokens = lexer.lex(markdown);

          // 尾部光标注入
          const tailChar = resolveTailContent(this.streaming?.tail);
          if (this.streaming?.hasNextChunk && tailChar) {
            injectTailToTokens(tokens, tailChar);
          }

          this.nodes = tokens;
        } catch (error) {
          // 解析失败时，将原始文本作为普通文本显示
          this.nodes = [
            {
              type: 'text',
              raw: markdown,
              text: markdown,
            },
          ];
        }
      },
    },

  }),
};
</script>
<style scoped src="./chat-markdown.css"></style>
