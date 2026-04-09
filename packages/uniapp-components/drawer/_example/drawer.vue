<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Drawer"
    />
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
        <base-demo />
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
        <title-demo />
      </t-demo>
      <t-demo
        desc="带底部插槽样式"
        padding
      >
        <footer-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import TitleDemo from './title/index.vue';
import IconDrawer from './icon-drawer/index.vue';
import FooterDemo from './footer/index.vue';
export default {
  components: {
    BaseDemo,
    TitleDemo,
    IconDrawer,
    FooterDemo,
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
