<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Popover"
    />
    <t-demo-header
      title="Popover 弹出气泡"
      desc="用于文字提示的气泡框。"
      notice="渲染框架支持情况：WebView"
    />
    <view class="tdesign-demo-popover">
      <t-demo
        title="01 组件类型"
        padding
      >
        <base-demo />
      </t-demo>
      <t-demo title="02 组件样式">
        <theme-demo />
      </t-demo>
      <t-demo>
        <placement-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseDemo from './base';
import ThemeDemo from './theme';
import PlacementDemo from './placement';


export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    BaseDemo,
    ThemeDemo,
    PlacementDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './popover.less';
</style>
