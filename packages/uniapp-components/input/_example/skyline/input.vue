<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="block"
      title="Input"
      left-arrow
    />
    <!-- #endif -->
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="input-example">
        <view class="demo-title">
          Input 输入框
        </view>
        <view class="demo-desc">
          用于单行文本信息输入。
        </view>
        <t-demo
          title="01 组件类型"
          desc="基础输入框"
        >
          <baseDemo />
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
    </scroll-view>
  </view>
</template>

<script>

import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import baseDemo from '../base/index.vue';
import suffix from '../suffix/index.vue';
import prefix from '../prefix/index.vue';
import layout from '../layout/index.vue';
import bordered from '../bordered/index.vue';
import align from '../align/index.vue';
import maxlength from '../maxlength/index.vue';
import special from '../special/index.vue';
import status from '../status/index.vue';
import custom from '../custom/index.vue';
import labelDemo from '../label/index.vue';
import banner from '../banner/index.vue';
export default {
  components: {
    tNavbar,
    baseDemo,
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
