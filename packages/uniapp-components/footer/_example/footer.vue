<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Footer"
    />
    <t-demo-header
      title="Footer 页脚"
      desc="用于基础列表展示，可附带文字、品牌logo、操作，常用商详、个人中心、设置等页面。"
      notice="渲染框架支持情况：Skyline、WebView"
    />
    <t-demo
      title="01 类型"
      desc="基础页脚"
    >
      <base-demo />
    </t-demo>
    <t-demo desc="基础加链接页脚">
      <link-demo />
    </t-demo>
    <t-demo desc="品牌页脚">
      <logo-demo />
    </t-demo>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import LinkDemo from './link/index.vue';
import LogoDemo from './logo/index.vue';
export default {
  components: {
    BaseDemo,
    LinkDemo,
    LogoDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './footer.less';
</style>
