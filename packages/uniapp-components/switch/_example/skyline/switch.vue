<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Switch"
      left-arrow
    />
    <!-- #endif -->
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo-title">
        Switch 开关
      </view>
      <view class="demo-desc">
        用于控制某个功能的开启和关闭。
      </view>

      <t-demo
        title="01 组件类型"
        desc="基础开关"
      >
        <baseDemo />
      </t-demo>

      <t-demo desc="带描述开关">
        <labelDemo />
      </t-demo>

      <t-demo desc="自定义颜色开关">
        <color />
      </t-demo>

      <t-demo title="02 组件状态">
        <status />
      </t-demo>

      <t-demo
        title="03 组件样式"
        desc="开关尺寸"
      >
        <size />
      </t-demo>
    </scroll-view>
  </view>
</template>

<script>

import baseDemo from '../base/index.vue';
import labelDemo from '../label/index.vue';
import color from '../color/index.vue';
import status from '../status/index.vue';
import size from '../size/index.vue';
export default {
  components: {
    baseDemo,
    labelDemo,
    color,
    status,
    size,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './switch.less';
</style>
