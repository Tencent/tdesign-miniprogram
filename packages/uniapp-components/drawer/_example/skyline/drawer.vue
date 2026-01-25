<template>
  <view class="skyline">
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Drawer"
    />
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
    </scroll-view>
  </view>
</template>

<script>

import BaseDemo from '../base/index.vue';
import TitleDemo from '../title/index.vue';
import IconDrawer from '../icon-drawer/index.vue';
import FooterDemo from '../footer/index.vue';

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
