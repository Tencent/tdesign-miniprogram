<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="block"
      title="Slider"
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
          Slider 滑动选择器
        </view>
        <view class="demo-desc">
          用于选择横轴上的数值、区间、档位。
        </view>
        <t-demo
          title="01 组件类型"
          desc="单游标滑块"
        >
          <baseDemo />
        </t-demo>

        <t-demo desc="双游标滑块">
          <range />
        </t-demo>

        <t-demo desc="带数值滑动选择器">
          <labelDemo />
        </t-demo>
        <!--
      <t-demo desc="起始非零滑动选择器">
        <max />
      </t-demo> -->

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

        <!-- skylne模式下，e.changedTouches返回的坐标为0 -->
        <!-- <t-demo title="04 垂直状态">
        <verticalDemo />
      </t-demo> -->
      </view>
    </scroll-view>
  </view>
</template>

<script>

import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import baseDemo from '../base/index.vue';
import labelDemo from '../label/index.vue';
import step from '../step/index.vue';
import range from '../range/index.vue';
import disabled from '../disabled/index.vue';
import capsule from '../capsule/index.vue';
// import verticalDemo from '../vertical/index.vue';
export default {
  components: {
    tNavbar,
    baseDemo,
    labelDemo,
    step,
    range,
    disabled,
    capsule,
    // verticalDemo,
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
