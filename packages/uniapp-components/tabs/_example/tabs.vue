<template>
  <view class="demo-wrap">
    <view class="custom-navbar">
      <t-demo-navbar
        title="Tabs"
      />
    </view>
    <view class="demo">
      <t-demo-header
        title="Tabs 选项卡"
        desc="用于内容分类后的展示切换。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础选项卡"
      >
        <base-demo :sticky-offset="stickyOffset" />
      </t-demo>
      <t-demo desc="等距选项卡">
        <scroll-demo />
      </t-demo>
      <t-demo desc="带图标选项卡">
        <with-icon />
      </t-demo>
      <t-demo desc="带徽标选项卡">
        <with-badge />
      </t-demo>
      <t-demo desc="带内容区选项卡">
        <with-content />
      </t-demo>
      <t-demo
        title="02 组件状态"
        desc="选项卡状态"
      >
        <status-demo />
      </t-demo>
      <t-demo
        title="03 组件样式"
        desc="选项卡尺寸"
      >
        <size-demo />
      </t-demo>
      <t-demo desc="选项卡样式">
        <theme-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import ScrollDemo from './scroll/index.vue';
import SizeDemo from './size/index.vue';
import StatusDemo from './status/index.vue';
import WithIcon from './with-icon/index.vue';
import WithBadge from './with-badge/index.vue';
import ThemeDemo from './theme/index.vue';
import WithContent from './with-content/index.vue';
import { handlePageScroll } from '@tdesign/uniapp/mixins/page-scroll';


export default {
  onPageScroll(e) {
    handlePageScroll(e);
  },
  components: {
    BaseDemo,
    ScrollDemo,
    SizeDemo,
    StatusDemo,
    WithIcon,
    WithBadge,
    ThemeDemo,
    WithContent,
  },
  data() {
    return {
      stickyOffset: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.getCustomNavbarHeight();
    }, 30);
  },
  methods: {
    getCustomNavbarHeight() {
      const query = uni.createSelectorQuery().in(this);
      query.select('.custom-navbar').boundingClientRect();
      query.exec((res) => {
        const { height = 0 } = res[0] || {};
        this.stickyOffset = height;
      });
    },
  },
};
</script>
<style lang="less">
@import './tabs.less';
</style>
