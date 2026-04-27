<template>
  <view
    :class="classPrefix"
    @click="nodeClick"
  >
    <view :class="classPrefix + '__container'">
      <view :class="classPrefix + '__thead'">
        <view :class="classPrefix + '__tr'">
          <block
            v-for="(th, j) in node.header"
            :key="j"
          >
            <view
              :class="classPrefix + '__th'"
              :style="'text-align:' + node.align[j] || 'left' + ';'"
            >
              <chat-markdown-node :nodes="th.tokens" />
            </view>
          </block>
        </view>
      </view>
      <view :class="classPrefix + '__tbody'">
        <block
          v-for="(row, k) in node.rows"
          :key="k"
        >
          <view :class="classPrefix + '__tr'">
            <block
              v-for="(cell, l) in row"
              :key="l"
            >
              <view
                :class="classPrefix + '__td'"
                :style="'text-align:' + node.align[l] || 'left' + ';'"
              >
                <chat-markdown-node :nodes="cell.tokens" />
              </view>
            </block>
          </view>
        </block>
      </view>
    </view>
  </view>
</template>

<script>
// 循环引用，未真正使用！
import chatMarkdownNode from '../chat-markdown-node/chat-markdown-node';
import { prefix } from '@tdesign/uniapp/common/config';
import { uniComponent } from '@tdesign/uniapp/common/src/index';


const name = `${prefix}-chat-markdown-table`;


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
      node: {
        type: Object,
        default: () => ({}),
      },
    },

    data() {
      return {
        classPrefix: name,
      };
    },

    methods: {
      nodeClick(e) {
        const target = this.getCareMarkdown();
        if (!target) return;
        target.$emit('click', {
          event: e,
          node: this.node,
        });
      },

      getCareMarkdown() {
        if (this.careMarkdown) return this.careMarkdown;
        const markdownName = `${prefix}-chat-markdown`;
        this.careMarkdown = this.$parent;
        while (this.careMarkdown && this.careMarkdown.name !== markdownName) {
          this.careMarkdown = this.careMarkdown.$parent;
        }
        return this.careMarkdown;
      },
    },
  }),
};
</script>
<style scoped src="./chat-markdown-table.css"></style>
