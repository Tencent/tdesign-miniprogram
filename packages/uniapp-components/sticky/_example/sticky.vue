<template>
  <view>
    <view class="custom-navbar">
      <t-demo-navbar
        title="Sticky"
      />
    </view>
    <view class="demo tdesign-demo-sticky-base">
      <t-demo-header
        title="Sticky 吸顶容器"
        desc="用于常驻页面顶部的信息、操作展示。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 类型"
        desc="基础吸顶"
        padding
      >
        <base-demo :navbar-height="navbarHeight" />
      </t-demo>
      <t-demo
        title=""
        desc="吸顶距离"
      >
        <offset-demo :navbar-height="navbarHeight" />
      </t-demo>
      <t-demo
        title=""
        desc="指定容器"
      >
        <container-demo :navbar-height="navbarHeight" />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import OffsetDemo from './offset/index.vue';
import ContainerDemo from './container/index.vue';
import { handlePageScroll } from '@tdesign/uniapp/mixins/page-scroll';


export default {
  onPageScroll(e) {
    handlePageScroll(e);
  },
  components: {
    BaseDemo,
    OffsetDemo,
    ContainerDemo,
  },
  data() {
    return {
      navbarHeight: 0,
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
        this.navbarHeight = height;
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import './sticky.less';
</style>
