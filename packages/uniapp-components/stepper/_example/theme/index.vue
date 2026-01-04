<template>
  <view class="stepper-example">
    <t-stepper
      default-value="3"
      theme="filled"
    />
    <t-stepper
      default-value="3"
      theme="outline"
    />
    <t-stepper default-value="3" />
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
    display: flex;
    background-color: var(--bg-color-demo);
    justify-content: space-between;
}
</style>
