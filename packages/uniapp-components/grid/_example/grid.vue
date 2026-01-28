<template>
  <view>
    <t-demo-navbar
      title="Grid"
    />
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
        <base-demo />
      </t-demo>
      <t-demo desc="带说明的宫格">
        <description-demo />
      </t-demo>
      <t-demo desc="带边框的宫格">
        <border-demo />
      </t-demo>
      <t-demo desc="带徽标的宫格">
        <badge-demo />
      </t-demo>
      <t-demo desc="可滑动的宫格">
        <scroll-demo />
      </t-demo>
      <t-demo
        title="02 组件样式"
        desc="可传图标的宫格"
      >
        <icon-grid />
      </t-demo>
      <t-demo desc="通栏宫格">
        <multiple-demo />
      </t-demo>
      <t-demo desc="卡片宫格">
        <card-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import BorderDemo from './border/index.vue';
import DescriptionDemo from './description/index.vue';
import BadgeDemo from './badge/index.vue';
import ScrollDemo from './scroll/index.vue';
import MultipleDemo from './multiple/index.vue';
import CardDemo from './card/index.vue';
import IconGrid from './icon-grid/index.vue';

export default {
  components: {
    BaseDemo,
    BorderDemo,
    DescriptionDemo,
    BadgeDemo,
    ScrollDemo,
    MultipleDemo,
    CardDemo,
    IconGrid,
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
