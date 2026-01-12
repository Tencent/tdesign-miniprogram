<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="Divider"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="Divider 分割线"
        desc="用于分割、组织、细化有一定逻辑的组织元素内容和页面结构。"
        notice="渲染框架支持情况：Skyline、WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="水平分割线"
      >
        <BaseDemo />
      </t-demo>
      <t-demo
        title="02 组件状态"
        desc="虚线样式"
      >
        <theme />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import theme from './theme/index.vue';

export default {
  components: {
    BaseDemo,
    theme,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './divider.less';
</style>
