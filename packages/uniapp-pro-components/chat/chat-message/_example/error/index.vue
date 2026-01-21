<template>
  <view class="chat-example">
    <view class="chat-example-block">
      <TChatMessage
        avatar="https://tdesign.gtimg.com/site/chat-avatar.png"
        :content="message.content"
        :role="message.role"
        status="error"
      />
    </view>
  </view>
</template>

<script>
import TChatMessage from 'tdesign-uniapp-chat/chat-message/chat-message.vue';


export default {
  components: {
    TChatMessage,
  },
  data() {
    return {
      message: {
        role: 'assistant',
        status: 'error',
        content: [
          {
            type: 'text',
            data: '´• •`!!!请求出错',
          },
        ],
      },
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.chat-example {
    display: flex;
    flex-direction: column;
    gap: 32rpx;
}

.chat-example-block {
    background-color: var(--td-bg-color-container);
    padding: 32rpx 32rpx 0 32rpx;
}
</style>
