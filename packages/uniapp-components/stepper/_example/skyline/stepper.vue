<template>
  <view class="skyline">
    <t-demo-navbar
      custom-class="block"
      title="Stepper"
    />
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
          <base-demo />
        </t-demo>
        <t-demo
          title="02 组件状态"
          desc="最大最小状态"
        >
          <min-max />
        </t-demo>
        <t-demo desc="禁用状态">
          <status-demo />
        </t-demo>
        <t-demo
          title="03 组件样式"
          desc="步进器样式"
        >
          <theme-demo />
        </t-demo>
        <t-demo desc="步进器尺寸">
          <size-demo />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import BaseDemo from '../base/index.vue';
import MinMax from '../min-max/index.vue';
import StatusDemo from '../status/index.vue';
import ThemeDemo from '../theme/index.vue';
import SizeDemo from '../size/index.vue';

export default {
  components: {
    BaseDemo,
    MinMax,
    StatusDemo,
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
@import './stepper.less';
</style>
