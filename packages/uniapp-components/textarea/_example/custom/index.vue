<template>
  <view class="textarea-example">
    <text class="textarea-example__label">
      标签文字
    </text>
    <t-textarea
      t-class="external-class"
      placeholder="请输入文字"
      bordered
      :maxlength="100"
      :disable-default-padding="true"
      indicator
      :custom-style="style"
    />
  </view>
</template>

<script>
import tTextarea from 'tdesign-uniapp/textarea/textarea.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tTextarea,
  },
  data() {
    return {
      style: 'height: 248rpx',
    };
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
.textarea-example {
    padding: 32rpx 32rpx 48rpx;
    background-color: var(--bg-color-demo);
}

:deep(.external-class){
    padding-top: 24rpx !important;
    padding-bottom: 24rpx !important;
}

.textarea-example__label {
    display: block;
    color: var(--td-text-color-primary);
    font-size: 24rpx;
    line-height: 40rpx;
    padding-bottom: 16rpx;
}
</style>
