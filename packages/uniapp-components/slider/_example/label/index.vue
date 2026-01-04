<template>
  <view>
    <view class="wrapper">
      <t-slider
        :value="value"
        label="${value}"
        @change="handleChange"
      />
    </view>

    <view class="demo-desc">
      带数值双游标滑块
    </view>

    <view class="wrapper">
      <t-slider
        show-extreme-value
        label="${value}"
        :default-value="[40, 60]"
        range
      />
    </view>
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
      value: 35,
    };
  },
  created() {},
  methods: {
    handleChange(e) {
      this.value = e.value;
    },
  },
};
</script>
<style>
.demo-desc {
    margin-top: 24rpx;
    margin-bottom: 16rpx;
}

.wrapper {
    background: var(--bg-color-demo);
    padding: 40rpx 12rpx 0;
}
</style>
