<template>
  <view :class="classPrefix">
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

export default uniComponent({
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
});

</script>
<style scoped>
@import './chat-markdown-code.css';
</style>
