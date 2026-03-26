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
    handleNodeTap(e) {
      const { node } = e;
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
