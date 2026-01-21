<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Switch"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="Switch 开关"
        desc="用于控制某个功能的开启和关闭。"
        notice="渲染框架支持情况：Skyline、WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础开关"
      >
        <BaseDemo />
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
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import labelDemo from './label/index.vue';
import color from './color/index.vue';
import status from './status/index.vue';
import size from './size/index.vue';
export default {
  components: {
    BaseDemo,
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
