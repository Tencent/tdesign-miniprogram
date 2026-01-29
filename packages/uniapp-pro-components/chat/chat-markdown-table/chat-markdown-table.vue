<template>
  <view :class="classPrefix">
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
});
</script>
<style scoped>
@import './chat-markdown-table.css';
</style>
