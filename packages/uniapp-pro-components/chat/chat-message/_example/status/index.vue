<template>
  <view class="chat-example">
    <view class="chat-example-block">
      <t-chat-message
        avatar="https://tdesign.gtimg.com/site/chat-avatar.png"
        :content="message.content"
        :role="message.role"
        animation="gradient"
        :status="message.status"
      />
    </view>
    <view class="chat-example-block">
      <t-chat-message
        avatar="https://tdesign.gtimg.com/site/chat-avatar.png"
        :content="message.content"
        :role="message.role"
        animation="skeleton"
        :status="message.status"
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
        status: 'pending',
        content: [
          {
            type: 'text',
            data: '牛顿第一定律并不适用于所有参考系，它只适用于惯性参考系。在质点不受外力作用时，能够判断出质点静止或作匀速直线运动的参考系一定是惯性参考系，因此只有在惯性参考系中牛顿第一定律才适用。',
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
