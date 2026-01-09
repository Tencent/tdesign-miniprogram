<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="block demo-navbar"
      title="Footer"
      left-arrow
    />
    <!-- #endif -->
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo-title">
        Footer 页脚
      </view>
      <view class="demo-desc">
        用于基础列表展示，可附带文字、品牌logo、操作，常用商详、个人中心、设置等页面。
      </view>
      <t-demo
        title="01 类型"
        desc="基础页脚"
      >
        <BaseDemo />
      </t-demo>
      <t-demo desc="基础加链接页脚">
        <LinkDemo />
      </t-demo>
      <t-demo desc="品牌页脚">
        <LogoDemo />
      </t-demo>
    </scroll-view>
  </view>
</template>

<script>

import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import BaseDemo from '../base/index.vue';
import LinkDemo from '../link/index.vue';
import LogoDemo from '../logo/index.vue';
export default {
  components: {
    tNavbar,
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
