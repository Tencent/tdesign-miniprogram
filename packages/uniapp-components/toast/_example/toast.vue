<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Toast"
    />
    <view class="demo">
      <t-demo-header
        title="Toast 轻提示"
        desc="用于轻量级反馈或提示，不会打断用户操作。"
        notice="渲染框架支持情况：Skyline、WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础提示"
        padding
      >
        <base-demo />
      </t-demo>
      <t-demo
        title="02 组件状态"
        desc="内置主题"
        padding
      >
        <theme-demo />
      </t-demo>
      <t-demo
        title="03 显示遮罩"
        desc="弹窗可显示遮罩，禁止滑动和点击"
        padding
      >
        <cover-demo />
      </t-demo>
      <t-demo
        title="04 手动关闭"
        desc="手动关闭轻提示"
        padding
      >
        <close-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import ThemeDemo from './theme/index.vue';
import CoverDemo from './cover/index.vue';
import CloseDemo from './close/index.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    BaseDemo,
    ThemeDemo,
    CoverDemo,
    CloseDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './toast.less';
</style>
