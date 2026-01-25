<template>
  <view class="skyline">
    <t-demo-navbar
      custom-class="block demo-navbar"
      title="Footer"
    />
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
        <base-demo />
      </t-demo>
      <t-demo desc="基础加链接页脚">
        <link-demo />
      </t-demo>
      <t-demo desc="品牌页脚">
        <logo-demo />
      </t-demo>
    </scroll-view>
  </view>
</template>

<script>
import BaseDemo from '../base/index.vue';
import LinkDemo from '../link/index.vue';
import LogoDemo from '../logo/index.vue';

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
