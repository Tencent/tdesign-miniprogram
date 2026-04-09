<template>
  <view class="skyline">
    <t-demo-navbar
      custom-class="demo-navbar block"
      title="Divider"
    />
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo">
        <view class="demo-title">
          Divider 分割线
        </view>
        <view class="demo-desc">
          用于分割、组织、细化有一定逻辑的组织元素内容和页面结构。
        </view>
        <t-demo
          title="01 组件类型"
          desc="水平分割线"
        >
          <base-demo />
        </t-demo>
        <t-demo
          title="02 组件状态"
          desc="虚线样式"
        >
          <theme-demo />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import BaseDemo from '../base/index.vue';
import ThemeDemo from '../theme/index.vue';

export default {
  components: {
    BaseDemo,
    ThemeDemo,
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
