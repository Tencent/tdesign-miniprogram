<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="Drawer"
      left-arrow
    />
    <!-- #endif -->
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo">
        <view class="demo-title">
          Drawer 抽屉
        </view>
        <view class="demo-desc">
          用作一组平行关系页面/内容的切换器，相较于Tab，同屏可展示更多的选项数量。
        </view>
        <t-demo
          title="01 组件类型"
          desc="基础抽屉"
          padding
        >
          <baseDemo />
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
    </scroll-view>
  </view>
</template>

<script>

import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import baseDemo from '../base/index.vue';
import titleDemo from '../title/index.vue';
import iconDrawer from '../icon-drawer/index.vue';
import footerDemo from '../footer/index.vue';
export default {
  components: {
    tNavbar,
    baseDemo,
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
