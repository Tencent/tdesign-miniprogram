<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar block"
      title="Divider"
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
          Divider 分割线
        </view>
        <view class="demo-desc">
          用于分割、组织、细化有一定逻辑的组织元素内容和页面结构。
        </view>
        <t-demo
          title="01 组件类型"
          desc="水平分割线"
        >
          <baseDemo />
        </t-demo>
        <t-demo
          title="02 组件状态"
          desc="虚线样式"
        >
          <theme />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import baseDemo from '../base/index.vue';
import theme from '../theme/index.vue';
export default {
  components: {
    tNavbar,
    baseDemo,
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
