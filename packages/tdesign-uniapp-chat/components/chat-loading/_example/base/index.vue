<template>
  <view class="chat-example">
    <!-- <view class="chat-example-block">
    <t-chat-loading animation="skeleton" />
  </view> -->
    <view class="chat-example-block">
      <t-chat-loading animation="gradient" />
    </view>
    <view class="chat-example-block">
      <t-chat-loading animation="moving" />
    </view>
    <view class="chat-example-block">
      <t-chat-loading animation="dots" />
    </view>
  </view>
</template>

<script>
import tChatLoading from 'tdesign-uniapp-chat/chat-loading/chat-loading.vue';


export default {
  components: {
    tChatLoading,
  },

  data() {
    return {
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.chat-example {
    background-color: var(--td-bg-color-container);
    padding: 32rpx;
    display: flex;
    align-items: center;
    gap: 48rpx;
}
</style>
