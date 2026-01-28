<template>
  <view>
    <view class="wrapper">
      <t-slider
        :default-value="60"
        :marks="marks"
        :step="20"
        @change="handleChange"
      />
    </view>

    <view class="demo-desc">
      带刻度双游标滑块
    </view>

    <view class="wrapper">
      <t-slider
        range
        :default-value="[20, 60]"
        :marks="marks"
        :step="20"
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
  methods: {
    handleChange(e) {
      console.log(e);
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
