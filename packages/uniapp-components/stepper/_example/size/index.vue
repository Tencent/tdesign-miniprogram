<template>
  <view class="stepper-example">
    <t-stepper
      :value="value"
      size="large"
      theme="filled"
      @change="handleChange"
    />
    <t-stepper
      default-value="3"
      :max="99"
      theme="filled"
    />
    <t-stepper
      default-value="3"
      size="small"
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
    return {
      value: 3,
    };
  },
  created() {},
  methods: {
    handleChange(e) {
      const { value } = e;
      console.log(value);
      this.value = value;
    },
  },
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
