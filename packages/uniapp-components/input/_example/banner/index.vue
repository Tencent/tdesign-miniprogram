<template>
  <view class="input-example--banner">
    <t-input
      :custom-style="style"
      label="标签文字"
      placeholder="请输入文字"
      borderless
    />
  </view>
</template>

<script>
import TInput from '@tdesign/uniapp/input/input.vue';
export default {
  components: {
    TInput,
  },
  data() {
    return {
      style: 'border-radius: 18rpx;',
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.input-example--banner {
    margin: 0 32rpx;
}
</style>
