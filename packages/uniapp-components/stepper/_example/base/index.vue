<template>
  <view class="stepper-example">
    <t-stepper
      default-value="3"
      theme="filled"
    />
  </view>
</template>

<script>
import TStepper from 'tdesign-uniapp/stepper/stepper.vue';
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
    background-color: var(--bg-color-demo);
}
</style>
