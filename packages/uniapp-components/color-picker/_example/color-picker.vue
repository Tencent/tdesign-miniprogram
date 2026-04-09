<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="ColorPicker"
    />

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
        <base-demo />
      </t-demo>

      <t-demo desc="带色板的颜色选择器">
        <multiple-demo />
      </t-demo>

      <t-demo
        desc="弹窗形式的颜色选择器"
        padding
      >
        <use-popup />
      </t-demo>

      <t-demo
        title="02 组件状态"
        desc="组件模式选择"
      >
        <format-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import MultipleDemo from './multiple/index.vue';
import FormatDemo from './format/index.vue';
import UsePopup from './use-popup/index.vue';
export default {
  components: {
    BaseDemo,
    MultipleDemo,
    FormatDemo,
    UsePopup,
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
