<template>
  <view
    :class="classPrefix + ' ' + classPrefix + '--normal'"
    :style="_._style([customStyle])"
  >
    <chat-markdown-node :nodes="nodes" />
  </view>
</template>
<script>
import chatMarkdownNode from '../chat-markdown-node/chat-markdown-node.vue';
import { Lexer } from '../npm/marked';
import { prefix } from 'tdesign-uniapp/common/config';
import props from './props';
import _ from 'tdesign-uniapp/common/utils.wxs';
import { uniComponent } from 'tdesign-uniapp/common/src/index';


const name = `${prefix}-chat-markdown`;

export default uniComponent({
  name,
  options: {
    multipleSlots: true,
    styleIsolation: 'shared',
  },

  components: {
    chatMarkdownNode,
  },

  props: {
    ...props,
  },

  data() {
    return {
      classPrefix: name,
      nodes: [], // 解析后的节点
      name, // 用于子组件查询父组件时的标识符
      _,
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
  },

  methods: {
    // 解析markdown文本
    parseMarkdown(markdown) {
      try {
        const lexer = new Lexer(this.options);
        const tokens = lexer.lex(markdown);

        this.nodes = tokens;
      } catch (error) {
        console.error('Markdown parsing error:', error);
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

});
</script>
<style scoped>
@import './chat-markdown.css';
</style>
