<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="CountDown"
      left-arrow
    />
    <!-- #endif -->
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo-title">
        CountDown 倒计时
      </view>
      <view class="demo-desc">
        用于实时展示倒计时数值。
      </view>

      <t-demo
        padding
        title="01 组件类型"
      >
        <baseDemo />
      </t-demo>

      <t-demo
        padding
        title="02 组件尺寸"
        desc="倒计时 large/medium/small 尺寸"
      >
        <size />
      </t-demo>
    </scroll-view>
  </view>
</template>

<script>

import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import baseDemo from '../base/index.vue';
import size from '../size/index.vue';
export default {
  components: {
    tNavbar,
    baseDemo,
    size,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './count-down.less';
</style>
