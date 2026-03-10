<template>
  <view class="skyline">
    <t-demo-navbar
      custom-class="block"
      title="Slider"
    />
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
          <base-demo />
        </t-demo>

        <t-demo desc="双游标滑块">
          <range-demo />
        </t-demo>

        <t-demo desc="带数值滑动选择器">
          <label-demo />
        </t-demo>
        <!--
      <t-demo desc="起始非零滑动选择器">
        <max />
      </t-demo> -->

        <t-demo desc="带刻度滑动选择器">
          <step-demo />
        </t-demo>

        <t-demo
          title="02 组件状态"
          desc="滑块禁用状态"
        >
          <disabled-demo />
        </t-demo>

        <t-demo
          title="03 特殊样式"
          desc="胶囊型滑块"
        >
          <capsule-demo />
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
import BaseDemo from '../base/index.vue';
import LabelDemo from '../label/index.vue';
import StepDemo from '../step/index.vue';
import RangeDemo from '../range/index.vue';
import DisabledDemo from '../disabled/index.vue';
import CapsuleDemo from '../capsule/index.vue';

export default {
  components: {
    BaseDemo,
    LabelDemo,
    StepDemo,
    RangeDemo,
    DisabledDemo,
    CapsuleDemo,
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
