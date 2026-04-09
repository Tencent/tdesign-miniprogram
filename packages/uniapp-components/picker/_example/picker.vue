<template>
  <view>
    <t-demo-navbar
      title="Picker"
    />
    <view class="area-picker-demo">
      <t-demo-header
        title="Picker 选择器"
        desc="用于一组预设数据中的选择。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础选择器"
      >
        <base-demo />
        <area-demo />
      </t-demo>
      <t-demo
        title="02 组件样式"
        desc="是否带标题"
      >
        <with-title />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import WithTitle from './with-title/index.vue';
import AreaDemo from './area/index.vue';

export default {
  components: {
    BaseDemo,
    WithTitle,
    AreaDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
@import './picker.less';
</style>
