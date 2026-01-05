<template>
  <view class="stepper-example">
    <t-stepper
      disabled
      theme="filled"
    />
  </view>
</template>

<script>
import tStepper from 'tdesign-uniapp/stepper/stepper.vue';
export default {
  components: {
    tStepper,
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
