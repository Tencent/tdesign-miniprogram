<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="block"
      title="Stepper"
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
          Stepper 步进器
        </view>
        <view class="demo-desc">
          用于数量的增减。
        </view>
        <t-demo
          title="01 组件类型"
          desc="基础步进器"
        >
          <baseDemo />
        </t-demo>
        <t-demo
          title="02 组件状态"
          desc="最大最小状态"
        >
          <min-max />
        </t-demo>
        <t-demo desc="禁用状态">
          <status />
        </t-demo>
        <t-demo
          title="03 组件样式"
          desc="步进器样式"
        >
          <theme />
        </t-demo>
        <t-demo desc="步进器尺寸">
          <size />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import baseDemo from '../base/index.vue';
import minMax from '../min-max/index.vue';
import status from '../status/index.vue';
import theme from '../theme/index.vue';
import size from '../size/index.vue';
export default {
  components: {
    tNavbar,
    baseDemo,
    minMax,
    status,
    theme,
    size,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './stepper.less';
</style>
