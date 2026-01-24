<template>
  <view>
    <t-demo-navbar
      class="demo-navbar"
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
        <baseDemo />
      </t-demo>
      <t-demo title="02 组件样式">
        <theme />
      </t-demo>
      <t-demo>
        <placement />
      </t-demo>
    </view>
  </view>
</template>

<script>
import baseDemo from './base';
import theme from './theme';
import placement from './placement';


export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    baseDemo,
    theme,
    placement,
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
