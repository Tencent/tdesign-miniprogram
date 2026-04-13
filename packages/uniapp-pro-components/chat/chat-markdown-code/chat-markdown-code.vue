<template>
  <view
    :class="classPrefix"
    @click="nodeClick"
  >
    <!-- 代码语言标签 -->
    <view
      v-if="node.lang"
      :class="classPrefix + '__header'"
    >
      <text :class="classPrefix + '__lang'">
        {{ node.lang }}
      </text>
    </view>

    <!-- 代码内容区域 -->
    <scroll-view
      :class="classPrefix + '__content'"
      :scroll-x="true"
    >
      <text
        :class="classPrefix + '__text'"
        :decode="true"
      >
        {{ node.text }}
      </text>
    </scroll-view>
  </view>
</template>

<script>
import { uniComponent } from '@tdesign/uniapp/common/src/index';
import { prefix } from '@tdesign/uniapp/common/config';

const name = `${prefix}-chat-markdown-code`;

export default {
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
<style scoped src="./chat-markdown-code.css"></style>
