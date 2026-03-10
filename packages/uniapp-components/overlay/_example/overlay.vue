<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Overlay"
    />
    <view class="demo">
      <t-demo-header
        title="Overlay 遮罩层"
        desc="通过遮罩层，可以强调部分内容。"
        notice="渲染框架支持情况：Skyline、WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础遮罩层"
        padding
      >
        <base-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
export default {
  components: {
    BaseDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './overlay.less';
</style>
