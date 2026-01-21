<template>
  <view class="skyline">
    <t-navbar
      title="DateTimePicker"
      left-arrow
    />
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo">
        <view class="demo-title">
          DateTimePicker 时间选择器
        </view>
        <view class="demo-desc">
          用于选择一个时间点或者一个时间段。
        </view>
        <t-demo
          title="01 组件类型"
          desc="年月日选择器"
        />
        <year-month-date />
        <t-demo desc="年月选择器" />
        <year-month />
        <!-- <t-demo desc="月日选择器" /> -->
        <timeDemo />

        <t-demo desc="年月日时分秒选择器" />
        <date-all />

        <t-demo
          title="01 组件用法"
          desc="调整步数"
        >
          <steps />
        </t-demo>

        <t-demo desc="不使用 Popup">
          <without-popup />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import yearMonthDate from '../year-month-date/index.vue';
import yearMonth from '../year-month/index.vue';
import timeDemo from '../time/index.vue';
import dateAll from '../date-all/index.vue';
import steps from '../steps/index.vue';
import withoutPopup from '../without-popup/index.vue';
export default {
  components: {
    tNavbar,
    yearMonthDate,
    yearMonth,
    timeDemo,
    dateAll,
    steps,
    withoutPopup,
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
