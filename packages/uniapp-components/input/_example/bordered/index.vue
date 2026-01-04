<template>
  <view class="input-example--bordered">
    <view class="input-example__label">
      标签文字
    </view>

    <t-input
      placeholder="请输入文字"
      :borderless="true"
      :custom-style="style"
      :suffix-icon="{ name: 'info-circle-filled', ariaLabel: '提示' }"
    />
  </view>
</template>

<script>
import tInput from 'tdesign-uniapp/input/input.vue';
export default {
  components: {
    tInput,
  },
  data() {
    return {
      style: 'border: 2rpx solid var(--td-component-border);border-radius: 12rpx;',
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.input-example--bordered {
    --td-input-vertical-padding: 24rpx;
    background-color: var(--bg-color-demo);
    padding: 32rpx 32rpx 16rpx;
}

.input-example__label {
    color: var(--td-text-color-primary);
    font-size: 24rpx;
    line-height: 40rpx;
    margin: 0 8rpx 16rpx;
}
</style>
