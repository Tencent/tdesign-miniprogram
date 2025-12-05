<template>
  <view class="wrapper">
    <t-slider
      :default-value="30"
      theme="capsule"
    />

    <t-slider
      :default-value="[40, 60]"
      range
      theme="capsule"
    />

    <t-slider
      :default-value="[40, 60]"
      range
      label="${value}"
      theme="capsule"
    />

    <t-slider
      :default-value="60"
      :marks="marks"
      :step="20"
      theme="capsule"
    />

    <t-slider
      :default-value="[20, 80]"
      range
      :marks="marks"
      :step="20"
      theme="capsule"
    />
  </view>
</template>

<script>
import tSlider from 'tdesign-uniapp/slider/slider.vue';
export default {
  components: {
    tSlider,
  },
  data() {
    return {
      marks: {
        0: '0',
        20: '20',
        40: '40',
        60: '60',
        80: '80',
        100: '100',
      },
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.label {
    display: flex;
    align-items: center;
    width: 718rpx;
    padding-left: 32rpx;
}

.label-class {
    flex-grow: 1;
}

.wrapper {
    background: var(--bg-color-demo);
    padding: 0 12rpx;
}
</style>
