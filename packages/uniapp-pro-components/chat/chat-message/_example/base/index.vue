<template>
  <view class="chat-example">
    <view class="chat-example-block">
      <t-chat-message
        :content="userMessage.content"
        :role="userMessage.role"
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
  props: {
    userMessage: {
      type: Object,
      default: () => ({
        role: 'user',

        content: [
          {
            type: 'text',
            data: '牛顿第一定律是否适用于所有参考系？',
          },
        ],
      }),
    },
  },
  data() {
    return {};
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
