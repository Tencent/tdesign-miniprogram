<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="NoticeBar"
    />
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
        <base-demo />
      </t-demo>
      <t-demo desc="带图标的公告栏">
        <icon-demo />
      </t-demo>
      <t-demo desc="带关闭的公告栏">
        <suffix-icon />
      </t-demo>
      <t-demo desc="带入口的公告栏">
        <event-demo />
      </t-demo>
      <t-demo desc="自定义样式的公告栏">
        <custom-demo />
      </t-demo>
      <t-demo desc="自定义内容的公告栏">
        <customization-demo />
      </t-demo>

      <t-demo
        title="02 组件状态"
        desc="公告栏类型有普通（info）、警示（warning）、成功（success）、错误（error）"
      >
        <theme-demo />
      </t-demo>

      <t-demo
        title="03 可滚动公告栏"
        desc="可滚动公告栏有水平（horizontal）和垂直（vertical）"
      >
        <scrolling-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import IconDemo from './iconDemo/index.vue';
import SuffixIcon from './suffixIcon/index.vue';
import EventDemo from './event/index.vue';
import CustomDemo from './custom/index.vue';
import ThemeDemo from './theme/index.vue';
import ScrollingDemo from './scrolling/index.vue';
import CustomizationDemo from './customization/index.vue';
export default {
  components: {
    BaseDemo,
    IconDemo,
    SuffixIcon,
    EventDemo,
    CustomDemo,
    ThemeDemo,
    ScrollingDemo,
    CustomizationDemo,
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
