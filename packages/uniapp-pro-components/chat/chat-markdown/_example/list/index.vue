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
- 无序列表
- 无序列表
  - 嵌套列表
  - 嵌套列表

1. 有序列表
2. 有序列表
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
