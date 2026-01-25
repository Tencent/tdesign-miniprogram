<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="CountDown"
    />
    <t-demo-header
      title="CountDown 倒计时"
      desc="用于实时展示倒计时数值。"
      notice="渲染框架支持情况：Skyline、WebView"
    />
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
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import SizeDemo from './size/index.vue';
export default {
  components: {
    BaseDemo,
    SizeDemo,
  },
  data() {
    return {
      time: 5760000,
      time1: 2760000,
      timeData: {},
      counting: false,
    };
  },
  methods: {
  },
};
</script>
<style lang="less">
@import './count-down.less';
</style>
