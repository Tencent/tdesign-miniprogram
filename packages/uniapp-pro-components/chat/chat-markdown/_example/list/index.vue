<template>
  <view class="chat-example-block">
    <t-chat-markdown
      :content="markdownContent"
      @click="handleNodeTap"
    />
  </view>
</template>

<script>
import TChatMarkdown from '@tdesign/uniapp-chat/chat-markdown/chat-markdown.vue';

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
    handleNodeTap(e) {
      const node = e.node;
      // 打印节点信息
      console.log('节点信息', node);
      // 图片节点预览
      if (node && node.type === 'image') {
        uni.previewImage({
          urls: [node.href],
          current: node.href,
        });
      }
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
