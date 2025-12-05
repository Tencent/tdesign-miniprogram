<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Calendar"
      left-arrow
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="Calendar 日历"
        desc="按照日历形式展示数据或日期的容器"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础日历"
      >
        <BaseDemo />
      </t-demo>

      <t-demo desc="">
        <multiple />
      </t-demo>

      <t-demo desc="带单行描述的日历">
        <custom-text />
      </t-demo>

      <t-demo desc="带翻页功能的日历">
        <switch-mode />
      </t-demo>

      <t-demo desc="可选择区间日期的日历">
        <range />
      </t-demo>

      <t-demo
        title="02 组件样式"
        desc="国际化"
      >
        <local-text />
      </t-demo>

      <t-demo desc="含不可选的日历">
        <custom-range />
      </t-demo>

      <t-demo desc="不使用 Popup">
        <without-popup />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseDemo from './base';
import multiple from './multiple';
import customText from './custom-text';
import switchMode from './switch-mode';
import range from './range';
import localText from './local-text';
import customRange from './custom-range';
import withoutPopup from './without-popup';
export default {
  components: {
    BaseDemo,
    multiple,
    customText,
    switchMode,
    range,
    localText,
    customRange,
    withoutPopup,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
@import './calendar.css';
</style>
