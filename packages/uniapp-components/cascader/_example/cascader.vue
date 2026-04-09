<template>
  <view>
    <t-demo-navbar
      title="Cascader"
    />
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
        <base-demo />
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
        <keys-demo />
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
import ThemeTab from './theme-tab';
import WithValue from './with-value';
import KeysDemo from './keys';
import WithTitle from './with-title';
import CheckStrictly from './check-strictly';
export default {
  components: {
    BaseDemo,
    ThemeTab,
    WithValue,
    KeysDemo,
    WithTitle,
    CheckStrictly,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
</style>
