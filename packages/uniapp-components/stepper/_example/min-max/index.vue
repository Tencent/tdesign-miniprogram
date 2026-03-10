<template>
  <view class="stepper-example">
    <t-stepper
      default-value="0"
      theme="filled"
    />
    <t-stepper
      default-value="99"
      theme="filled"
      :min="5"
      :max="999"
    />
    <t-stepper
      default-value="999"
      theme="filled"
      :max="999"
    />
  </view>
</template>

<script>
import TStepper from '@tdesign/uniapp/stepper/stepper.vue';
export default {
  components: {
    TStepper,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style>
.stepper-example {
    padding: 32rpx;
    display: flex;
    background-color: var(--bg-color-demo);
    justify-content: space-between;
}
</style>
