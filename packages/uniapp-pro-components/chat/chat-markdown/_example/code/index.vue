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
