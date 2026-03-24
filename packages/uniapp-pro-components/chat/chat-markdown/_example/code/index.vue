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
\`\`\`TDesign-登录表单.jsx
import { Form, Input, Button, Message } from 'tdesign-react';
const LoginForm = () => { const [loading, setLoading] = useState(false);
\`\`\`
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
