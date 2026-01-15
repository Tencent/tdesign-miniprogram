<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="ColorPicker"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->

    <view class="demo">
      <t-demo-header
        title="ColorPicker 颜色选择器"
        desc="用于颜色选择，支持多种格式。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础颜色选择器"
      >
        <BaseDemo />
      </t-demo>

      <t-demo desc="带色板的颜色选择器">
        <multiple />
      </t-demo>

      <t-demo
        desc="弹窗形式的颜色选择器"
        padding
      >
        <usePopup />
      </t-demo>

      <t-demo
        title="02 组件状态"
        desc="组件模式选择"
      >
        <format />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import multiple from './multiple/index.vue';
import format from './format/index.vue';
import usePopup from './use-popup/index.vue';
export default {
  components: {
    BaseDemo,
    multiple,
    format,
    usePopup,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './color-picker.less';
</style>
