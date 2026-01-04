<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="TreeSelect"
      left-arrow
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="TreeSelect 树形选择器"
        desc="用于多层级数据的逐级选择。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础树形选择器"
      >
        <BaseDemo />
      </t-demo>

      <t-demo desc="多选树形选择器">
        <multiple />
      </t-demo>

      <t-demo
        title="02 组件状态"
        desc="树形选择器-三列"
      >
        <normal />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseDemo from './base';
import multiple from './multiple';
import normal from './normal';
export default {
  components: {
    BaseDemo,
    multiple,
    normal,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
</style>
