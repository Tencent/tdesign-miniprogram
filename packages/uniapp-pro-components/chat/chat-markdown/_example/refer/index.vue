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
下面是引用示例

> TDesign distills Tencent's years of design experience into professional design guideline, providing universal design solutions that assist product managers, designers, developers, and other roles in efficiently completing the design and development of enterprise-level products, while maintaining consistent design language and style to meet user experience requirements.
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
