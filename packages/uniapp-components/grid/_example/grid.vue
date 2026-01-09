<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Grid"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="Grid 宫格"
        desc="用于功能入口布局，将页面或特定区域切分成若干等大的区块，形成若干功能入口。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础宫格"
      >
        <BaseDemo />
      </t-demo>
      <t-demo desc="带说明的宫格">
        <description />
      </t-demo>
      <t-demo desc="带边框的宫格">
        <border />
      </t-demo>
      <t-demo desc="带徽标的宫格">
        <badge />
      </t-demo>
      <t-demo desc="可滑动的宫格">
        <scroll />
      </t-demo>
      <t-demo
        title="02 组件样式"
        desc="可传图标的宫格"
      >
        <icon-grid />
      </t-demo>
      <t-demo desc="通栏宫格">
        <multiple />
      </t-demo>
      <t-demo desc="卡片宫格">
        <card />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import border from './border/index.vue';
import description from './description/index.vue';
import badge from './badge/index.vue';
import scroll from './scroll/index.vue';
import multiple from './multiple/index.vue';
import card from './card/index.vue';
import iconGrid from './icon-grid/index.vue';

export default {
  components: {
    BaseDemo,
    border,
    description,
    badge,
    scroll,
    multiple,
    card,
    iconGrid,
  },
  data() {
    return {};
  },
  onShareAppMessage() {
    console.log('onShareAppMessage');
  },
  methods: {},
};
</script>
<style lang="less">
@import './grid.less';
</style>
