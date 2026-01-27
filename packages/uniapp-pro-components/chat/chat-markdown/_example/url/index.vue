<template>
  <view class="chat-example-block">
    <t-chat-markdown
      :content="markdownContent"
      @click="handleLinkTap"
    />
  </view>
</template>

<script>
import TChatMarkdown from 'tdesign-uniapp-chat/chat-markdown/chat-markdown.vue';

const markdownData = `
![示例](https://tdesign.gtimg.com/demo/demo-image-1.png "示例")
这是一个链接 [Markdown语法](https://markdown.com.cn)。
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
    },
  },
};
</script>
<style>
.chat-example-block {
    background-color: var(--td-bg-color-container);
    padding: 32rpx;
}

.demo-container {
    padding: 32rpx;
    background-color: #fff;
}

.text {
    margin-left: 10rpx;
    margin-bottom: 32rpx;
}
</style>
