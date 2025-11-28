<template>
  <view>
    <view class="demo-desc">
      单游标垂直滑块
    </view>
    <view class="wrapper">
      <t-slider
        vertical
        :value="singlevalue"
        label="${singlevalue}"
        @change="handleSingleChange"
      />
    </view>
    <view class="demo-desc">
      带刻度的双游标垂直滑块
    </view>
    <view class="wrapper">
      <t-slider
        vertical
        range
        :default-value="[20, 60]"
        :marks="marks"
        :step="20"
      />
    </view>
    <view class="demo-desc">
      胶囊型垂直滑块
    </view>
    <view class="wrapper">
      <t-slider
        vertical
        :value="capsuleValue"
        label="${capsuleValue}"
        theme="capsule"
        @change="handleCapsuleChange"
      />
    </view>
    <view class="demo-desc">
      带刻度的胶囊型垂直滑块
    </view>
    <view class="wrapper">
      <t-slider
        vertical
        :default-value="[20, 80]"
        range
        :marks="marks"
        :step="20"
        theme="capsule"
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
      singlevalue: 35,
      capsuleValue: 35,
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
    handleSingleChange(e) {
      this.singlevalue = e.value;
    },
    handleCapsuleChange(e) {
      this.capsuleValue = e.value;
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
    padding-top: 40rpx;
}
</style>
