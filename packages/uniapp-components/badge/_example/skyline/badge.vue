<template>
  <view class="skyline">
    <t-demo-navbar
      custom-class="block"
      title="Badge"
    />
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
        <base-demo />
      </t-demo>
      <t-demo title="02 组件样式">
        <theme-demo />
      </t-demo>
      <t-demo title="03 组件尺寸">
        <size-demo />
      </t-demo>
    </scroll-view>
  </view>
</template>

<script>

import BaseDemo from '../base/index.vue';
import ThemeDemo from '../theme/index.vue';
import SizeDemo from '../size/index.vue';

export default {
  components: {
    BaseDemo,
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
