<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="block"
      title="Badge"
      left-arrow
    />
    <!-- #endif -->
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo-title">
        Badge 徽标
      </view>
      <view class="demo-desc">
        用于告知用户，该区域的状态变化或者待处理任务的数量。
      </view>
      <t-demo title="01 组件类型">
        <baseDemo />
      </t-demo>
      <t-demo title="02 组件样式">
        <theme />
      </t-demo>
      <t-demo title="03 组件尺寸">
        <size />
      </t-demo>
    </scroll-view>
  </view>
</template>

<script>

import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import baseDemo from '../base/index.vue';
import theme from '../theme/index.vue';
import size from '../size/index.vue';
export default {
  components: {
    tNavbar,
    baseDemo,
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
@import './badge.less';
</style>
