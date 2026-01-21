<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Badge"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <t-demo-header
      title="Badge 徽标"
      desc="用于告知用户，该区域的状态变化或者待处理任务的数量。"
    />
    <t-demo title="01 组件类型">
      <baseComp />
    </t-demo>
    <t-demo title="02 组件样式">
      <theme />
    </t-demo>
    <t-demo title="03 组件尺寸">
      <size />
    </t-demo>
  </view>
</template>

<script>
import baseComp from './base/index.vue';
import theme from './theme/index.vue';
import size from './size/index.vue';
export default {
  components: {
    baseComp,
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
