<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Cascader"
      left-arrow
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="Cascader 级联选择器"
        desc="用于多层级数据的逐级选择。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 类型"
        desc=""
      >
        <BaseDemo />
      </t-demo>
      <t-demo desc="选项卡风格">
        <theme-tab />
      </t-demo>

      <t-demo
        title="02 进阶"
        desc="带初始值"
      >
        <with-value />
      </t-demo>

      <t-demo desc="自定义 keys">
        <keys />
      </t-demo>

      <t-demo desc="使用次级标题">
        <with-title />
      </t-demo>

      <t-demo desc="选择任意一项">
        <check-strictly />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseDemo from './base';
import themeTab from './theme-tab';
import withValue from './with-value';
import keys from './keys';
import withTitle from './with-title';
import checkStrictly from './check-strictly';
export default {
  components: {
    BaseDemo,
    themeTab,
    withValue,
    keys,
    withTitle,
    checkStrictly,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
</style>
