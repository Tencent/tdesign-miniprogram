<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="Popup"
      left-arrow
    />
    <!-- #endif -->
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo-title">
        Popup 弹出层
      </view>
      <view class="demo-desc">
        由其他控件触发，屏幕滑出或弹出一块自定义内容区域。
      </view>
      <view class="tdesign-demo-popup">
        <t-demo
          title="01 组件类型"
          desc="基础弹出层"
          padding
        >
          <baseDemo />
        </t-demo>
        <t-demo
          title="02 组件示例"
          desc="应用示例"
          padding
        >
          <with-title />
          <custom-close style="display: block; margin-top: 32rpx" />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import baseDemo from '../base/index.vue';
import withTitle from '../with-title/index.vue';
import customClose from '../custom-close/index.vue';
export default {
  components: {
    tNavbar,
    baseDemo,
    withTitle,
    customClose,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './popup.less';
</style>
