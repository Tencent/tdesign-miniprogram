<template>
  <view>
    <t-demo-navbar
      title="DateTimePicker"
    />
    <view class="demo">
      <t-demo-header
        title="DateTimePicker 时间选择器"
        desc="用于选择一个时间点或者一个时间段。"
        notice="渲染框架支持情况：WebView"
      />

      <t-demo
        title="01 组件类型"
        desc="年月日选择器"
      />

      <year-month-date />

      <t-demo desc="年月选择器" />

      <year-month />

      <!-- <t-demo desc="月日选择器" /> -->

      <time-demo />

      <t-demo desc="年月日时分秒选择器" />

      <date-all />

      <t-demo
        title="01 组件用法"
        desc="调整步数"
      >
        <steps-demo />
      </t-demo>

      <t-demo desc="不使用 Popup">
        <without-popup />
      </t-demo>
    </view>
  </view>
</template>

<script>

import YearMonthDate from './year-month-date/index.vue';
import YearMonth from './year-month/index.vue';
import TimeDemo from './time/index.vue';
import DateAll from './date-all/index.vue';
import StepsDemo from './steps/index.vue';
import WithoutPopup from './without-popup/index.vue';
export default {
  components: {
    YearMonthDate,
    YearMonth,
    TimeDemo,
    DateAll,
    StepsDemo,
    WithoutPopup,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './date-time-picker.less';
</style>
