<template>
  <view class="skyline">
    <t-demo-navbar
      custom-class="demo-navbar"
      title="CountDown"
    />
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
        <base-demo />
      </t-demo>

      <t-demo
        padding
        title="02 组件尺寸"
        desc="倒计时 large/medium/small 尺寸"
      >
        <size-demo />
      </t-demo>
    </scroll-view>
  </view>
</template>

<script>

import BaseDemo from '../base/index.vue';
import SizeDemo from '../size/index.vue';

export default {
  components: {
    BaseDemo,
    SizeDemo,
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
