<template>
  <view>
    <t-slider
      :value="35"
      disabled
    />

    <view class="wrapper">
      <t-slider
        show-extreme-value
        label="${value}"
        :value="[40, 60]"
        range
        disabled
      />
    </view>

    <view class="wrapper">
      <t-slider
        range
        :value="[20, 60]"
        :marks="marks"
        :step="20"
        disabled
      />
    </view>
  </view>
</template>

<script>
import TSlider from '@tdesign/uniapp/slider/slider.vue';
export default {
  components: {
    TSlider,
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
.wrapper {
    margin-top: 32rpx;
    background: var(--bg-color-demo);
    padding: 40rpx 12rpx 0;
}
</style>
