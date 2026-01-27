<template>
  <view class="skyline">
    <t-demo-navbar
      title="Switch"
    />
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
        <base-demo />
      </t-demo>

      <t-demo desc="带描述开关">
        <label-demo />
      </t-demo>

      <t-demo desc="自定义颜色开关">
        <color-demo />
      </t-demo>

      <t-demo title="02 组件状态">
        <status-demo />
      </t-demo>

      <t-demo
        title="03 组件样式"
        desc="开关尺寸"
      >
        <size-demo />
      </t-demo>
    </scroll-view>
  </view>
</template>

<script>

import BaseDemo from '../base/index.vue';
import LabelDemo from '../label/index.vue';
import ColorDemo from '../color/index.vue';
import StatusDemo from '../status/index.vue';
import SizeDemo from '../size/index.vue';
export default {
  components: {
    BaseDemo,
    LabelDemo,
    ColorDemo,
    StatusDemo,
    SizeDemo,
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
