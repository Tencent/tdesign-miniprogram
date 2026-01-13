<template>
  <view class="chat-example">
    <view class="chat-example-block">
      <TChatLoading
        animation="dots"
        text="加载中..."
      />
    </view>
  </view>
</template>

<script>
import TChatLoading from 'tdesign-uniapp-chat/chat-loading/chat-loading.vue';
export default {
  components: {
    TChatLoading,
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
    background-color: var(--td-bg-color-container);
    padding: 32rpx;
}
</style>
