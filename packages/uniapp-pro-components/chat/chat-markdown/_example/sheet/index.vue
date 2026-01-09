<template>
  <view class="chat-example-block">
    <TChatMarkdown
      :content="markdownContent"
      @click="handleLinkTap"
    />
  </view>
</template>

<script>
import TChatMarkdown from 'tdesign-uniapp-chat/chat-markdown/chat-markdown.vue';
const markdownData = `
| 左对齐     | 居中对齐 | 右对齐 | 内容 |
| :--------- | :------: | -----: | ----- |
| 单元格     |  单元格  | 单元格 | 单元格 |
| 长文本示例| 长文本示例长文本示例长文本示例 |   $100 | 文本内容 |
| 文本示例 | 文本内容 | $100 |  文本内容 |
`;

export default {
  components: {
    TChatMarkdown,
  },
  data() {
    return {
      markdownContent: markdownData,
    };
  },
  methods: {
    handleLinkTap(e) {
      // 打开链接
      console.log('监听点击', e);
      uni.navigateTo({
        url: e.node.href,
      });
    },
  },
};
</script>
<style>
.chat-example-block {
    background-color: var(--td-bg-color-container);
    padding: 32rpx;
}

</style>
