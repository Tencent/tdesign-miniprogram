<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Stepper"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="Stepper 步进器"
        desc="用于数量的增减。"
        notice="渲染框架支持情况：Skyline、WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础步进器"
      >
        <BaseDemo />
      </t-demo>
      <t-demo
        title="02 组件状态"
        desc="最大最小状态"
      >
        <min-max />
      </t-demo>
      <t-demo desc="禁用状态">
        <status />
      </t-demo>
      <t-demo
        title="03 组件样式"
        desc="步进器样式"
      >
        <theme />
      </t-demo>
      <t-demo desc="步进器尺寸">
        <size />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import minMax from './min-max/index.vue';
import status from './status/index.vue';
import theme from './theme/index.vue';
import size from './size/index.vue';
export default {
  components: {
    BaseDemo,
    minMax,
    status,
    theme,
    size,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './stepper.less';
</style>
