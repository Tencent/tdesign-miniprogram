<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="Drawer"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="Drawer 抽屉"
        desc="用作一组平行关系页面/内容的切换器，相较于Tab，同屏可展示更多的选项数量。"
        notice="渲染框架支持情况：Skyline、WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础抽屉"
        padding
      >
        <BaseDemo />
      </t-demo>
      <t-demo
        desc="带图标抽屉"
        padding
      >
        <icon-drawer />
      </t-demo>
      <t-demo
        title="02 组件样式"
        desc="带标题样式"
        padding
      >
        <titleDemo />
      </t-demo>
      <t-demo
        desc="带底部插槽样式"
        padding
      >
        <footerDemo />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import titleDemo from './title/index.vue';
import iconDrawer from './icon-drawer/index.vue';
import footerDemo from './footer/index.vue';
export default {
  components: {
    BaseDemo,
    titleDemo,
    iconDrawer,
    footerDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './drawer.less';
</style>
