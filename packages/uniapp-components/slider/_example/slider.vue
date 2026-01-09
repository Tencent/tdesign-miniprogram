<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Slider"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="Slider 滑动选择器"
        desc="用于选择横轴上的数值、区间、档位。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="单游标滑块"
      >
        <BaseDemo />
      </t-demo>

      <t-demo desc="双游标滑块">
        <range />
      </t-demo>

      <t-demo desc="带数值滑动选择器">
        <labelDemo />
      </t-demo>

      <t-demo desc="起始非零滑动选择器">
        <maxDemo />
      </t-demo>

      <t-demo desc="带刻度滑动选择器">
        <step />
      </t-demo>

      <t-demo
        title="02 组件状态"
        desc="滑块禁用状态"
      >
        <disabled />
      </t-demo>

      <t-demo
        title="03 特殊样式"
        desc="胶囊型滑块"
      >
        <capsule />
      </t-demo>

      <t-demo title="04 垂直状态">
        <vertical />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import range from './range/index.vue';
import labelDemo from './label/index.vue';
import maxDemo from './max/index.vue';
import step from './step/index.vue';
import disabled from './disabled/index.vue';
import capsule from './capsule/index.vue';
import vertical from './vertical/index.vue';
export default {
  components: {
    BaseDemo,
    range,
    labelDemo,
    maxDemo,
    step,
    disabled,
    capsule,
    vertical,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './slider.less';
</style>
