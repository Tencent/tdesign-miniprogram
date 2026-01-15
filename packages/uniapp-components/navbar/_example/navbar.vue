<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="NavBar"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="NavBar 导航栏"
        desc="用于不同页面之间切换或者跳转，位于内容区的上方，系统状态栏的下方。"
        notice="渲染框架支持情况：Skyline、WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础小程序导航栏"
      >
        <BaseDemo class="block" />
        <back-home class="block" />
      </t-demo>
      <t-demo desc="带搜索的导航栏">
        <search />
      </t-demo>
      <t-demo desc="带图片的导航栏">
        <imgDemo />
      </t-demo>
      <t-demo
        title="02 组件样式"
        desc="标题对齐"
      >
        <left-title />
      </t-demo>
      <t-demo desc="自定义颜色">
        <custom-color />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import search from './search/index.vue';
import backHome from './back-home/index.vue';
import imgDemo from './img/index.vue';
import leftTitle from './left-title/index.vue';
import customColor from './custom-color/index.vue';
export default {
  components: {
    BaseDemo,
    search,
    backHome,
    imgDemo,
    leftTitle,
    customColor,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './navbar.less';
</style>
