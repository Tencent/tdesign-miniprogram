<template>
  <view>
    <t-demo-navbar
      title="Calendar"
    />
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
        <base-demo />
      </t-demo>

      <t-demo desc="">
        <multiple-demo />
      </t-demo>

      <t-demo desc="带单行描述的日历">
        <custom-text />
      </t-demo>

      <t-demo desc="带翻页功能的日历">
        <switch-mode />
      </t-demo>

      <t-demo desc="可选择区间日期的日历">
        <range-demo />
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
import MultipleDemo from './multiple';
import CustomText from './custom-text';
import SwitchMode from './switch-mode';
import RangeDemo from './range';
import LocalText from './local-text';
import CustomRange from './custom-range';
import WithoutPopup from './without-popup';
export default {
  components: {
    BaseDemo,
    MultipleDemo,
    CustomText,
    SwitchMode,
    RangeDemo,
    LocalText,
    CustomRange,
    WithoutPopup,
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
