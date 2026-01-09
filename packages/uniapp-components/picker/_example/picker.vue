<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Picker"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="area-picker-demo">
      <t-demo-header
        title="Picker 选择器"
        desc="用于一组预设数据中的选择。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础选择器"
      >
        <BaseDemo />
        <area>
      </t-demo>
      <t-demo
        title="02 组件样式"
        desc="是否带标题"
      >
        <with-title />
      </t-demo>

      <!-- <areaDemo /> -->
      <!-- <withoutPopup /> -->
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import withTitle from './with-title/index.vue';
// import areaDemo from './area/index.vue';
// import withoutPopup from './without-popup/index.vue';
export default {
  components: {
    BaseDemo,
    withTitle,
    // areaDemo,
    // withoutPopup,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
@import './picker.less';
</style>
