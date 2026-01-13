<template>
  <view class="demo-wrap">
    <view class="custom-navbar">
      <!-- #ifndef MP-ALIPAY -->
      <t-navbar
        title="Tabs"
        left-arrow
        :delta="-1"
        @go-back="onDemoGoBack"
      />
    <!-- #endif -->
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
        <BaseDemo :sticky-offset="stickyOffset" />
      </t-demo>
      <t-demo desc="等距选项卡">
        <scroll />
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
        <status />
      </t-demo>
      <t-demo
        title="03 组件样式"
        desc="选项卡尺寸"
      >
        <size />
      </t-demo>
      <t-demo desc="选项卡样式">
        <theme />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import scroll from './scroll/index.vue';
import size from './size/index.vue';
import status from './status/index.vue';
import withIcon from './with-icon/index.vue';
import withBadge from './with-badge/index.vue';
import theme from './theme/index.vue';
import withContent from './with-content/index.vue';
import { handlePageScroll } from 'tdesign-uniapp/mixins/page-scroll';


export default {
  onPageScroll(e) {
    handlePageScroll(e);
  },
  components: {
    BaseDemo,
    scroll,
    size,
    status,
    withIcon,
    withBadge,
    theme,
    withContent,
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
