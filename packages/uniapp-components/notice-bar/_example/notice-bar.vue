<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="NoticeBar"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="NoticeBar 公告栏"
        desc="在导航栏下方，用于给用户显示提示消息。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="纯文字的公告栏"
      >
        <BaseDemo />
      </t-demo>
      <t-demo desc="带图标的公告栏">
        <iconDemo />
      </t-demo>
      <t-demo desc="带关闭的公告栏">
        <suffixIcon />
      </t-demo>
      <t-demo desc="带入口的公告栏">
        <event />
      </t-demo>
      <t-demo desc="自定义样式的公告栏">
        <custom />
      </t-demo>
      <t-demo desc="自定义内容的公告栏">
        <customization />
      </t-demo>

      <t-demo
        title="02 组件状态"
        desc="公告栏类型有普通（info）、警示（warning）、成功（success）、错误（error）"
      >
        <theme />
      </t-demo>

      <t-demo
        title="03 可滚动公告栏"
        desc="可滚动公告栏有水平（horizontal）和垂直（vertical）"
      >
        <scrolling />
      </t-demo>
    </view>
  </view>
</template>

<script>

// import tNoticeBar from 'tdesign-uniapp/notice-bar/notice-bar.vue';
import BaseDemo from './base/index.vue';
import iconDemo from './iconDemo/index.vue';
import suffixIcon from './suffixIcon/index.vue';
import event from './event/index.vue';
import custom from './custom/index.vue';
import theme from './theme/index.vue';
import scrolling from './scrolling/index.vue';
import customization from './customization/index.vue';
export default {
  components: {
    // tNoticeBar,
    BaseDemo,
    iconDemo,
    suffixIcon,
    event,
    custom,
    theme,
    scrolling,
    customization,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './notice-bar.less';
</style>
