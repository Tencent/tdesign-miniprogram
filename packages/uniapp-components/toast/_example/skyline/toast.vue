<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="block demo-navbar"
      title="Toast"
      left-arrow
    />
    <!-- #endif -->
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo">
        <view class="demo-title">
          Toast 轻提示
        </view>
        <view class="demo-desc">
          用于轻量级反馈或提示，不会打断用户操作。
        </view>
        <t-demo
          title="01 组件类型"
          desc="基础提示"
        >
          <baseDemo />
        </t-demo>
        <t-demo
          title="02 组件状态"
          desc="内置主题"
        >
          <theme />
        </t-demo>
        <t-demo
          title="03 显示遮罩"
          desc="弹窗可显示遮罩，禁止滑动和点击"
        >
          <cover />
        </t-demo>
        <t-demo
          title="04 手动关闭"
          desc="手动关闭轻提示"
        >
          <close />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import baseDemo from '../base/index.vue';
import theme from '../theme/index.vue';
import cover from '../cover/index.vue';
import close from '../close/index.vue';
export default {
  components: {
    tNavbar,
    baseDemo,
    theme,
    cover,
    close,
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
