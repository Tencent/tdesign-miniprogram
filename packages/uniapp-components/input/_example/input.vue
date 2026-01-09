<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Input"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="input-example">
      <t-demo-header
        title="Input 输入框"
        desc="用于单行文本信息输入。"
        notice="渲染框架支持情况：Skyline、WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础输入框"
      >
        <BaseDemo />
      </t-demo>
      <t-demo desc="带字数限制输入框">
        <maxlength />
      </t-demo>
      <t-demo desc="带操作输入框">
        <suffix />
      </t-demo>
      <t-demo desc="带图标输入框">
        <prefix />
      </t-demo>
      <t-demo desc="特定类型输入框">
        <special />
      </t-demo>

      <t-demo
        title="02 组件状态"
        desc="输入框状态"
      >
        <status />
      </t-demo>
      <t-demo desc="信息超长状态">
        <labelDemo />
      </t-demo>

      <t-demo
        title="03 组件样式"
        desc="内容位置"
      >
        <align />
      </t-demo>
      <t-demo desc="竖排样式">
        <layout />
      </t-demo>
      <t-demo desc="非通栏样式">
        <banner />
      </t-demo>
      <t-demo desc="标签外置样式">
        <bordered />
      </t-demo>
      <t-demo desc="自定义样式输入框">
        <custom />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import maxlength from './maxlength/index.vue';
import suffix from './suffix/index.vue';
import prefix from './prefix/index.vue';
import layout from './layout/index.vue';
import bordered from './bordered/index.vue';
import align from './align/index.vue';
import special from './special/index.vue';
import status from './status/index.vue';
import custom from './custom/index.vue';
import labelDemo from './label/index.vue';
import banner from './banner/index.vue';
export default {
  components: {
    BaseDemo,
    suffix,
    prefix,
    layout,
    bordered,
    align,
    maxlength,
    special,
    status,
    custom,
    labelDemo,
    banner,
  },
  data() {
    return {
      firstValue: '',
      textPassword: '123456',
      phoneError: false,
      phoneNumber: '17600600600',
      price: '10.2',
      priceError: false,
    };
  },
  methods: {
  },
};
</script>
<style lang="less">
@import './input.less';
</style>
