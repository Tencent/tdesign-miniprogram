<template>
  <view class="chat-example">
    <view class="chat-example-block">
      <TChatMessage
        datetime="16:38"
        name="张三"
        :content="message.content"
        :role="message.role"
      />
    </view>
    <view class="chat-example-block">
      <TChatMessage
        avatar="https://tdesign.gtimg.com/site/chat-avatar.png"
        datetime="16:38"
        name="TDesignAI"
        :content="message.content"
        :role="message.role"
      />
    </view>
    <view class="chat-example-block">
      <TChatMessage
        avatar="https://tdesign.gtimg.com/site/chat-avatar.png"
        datetime="16:38"
        name="TDesignAI"
        :content="message.content"
        :role="message.role"
        placement="right"
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
        role: 'system',
        content: [
          {
            type: 'text',
            data: '牛顿第一定律是否适用于所有参考系？',
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
