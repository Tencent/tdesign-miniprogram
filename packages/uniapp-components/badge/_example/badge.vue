<template>
  <view>
    <t-demo-navbar
      title="Badge"
    />
    <t-demo-header
      title="Badge 徽标"
      desc="用于告知用户，该区域的状态变化或者待处理任务的数量。"
    />
    <t-demo title="01 组件类型">
      <base-comp />
    </t-demo>
    <t-demo title="02 组件样式">
      <theme-demo />
    </t-demo>
    <t-demo title="03 组件尺寸">
      <size-demo />
    </t-demo>
  </view>
</template>

<script>
import BaseComp from './base/index.vue';
import ThemeDemo from './theme/index.vue';
import SizeDemo from './size/index.vue';
export default {
  components: {
    BaseComp,
    ThemeDemo,
    SizeDemo,
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
