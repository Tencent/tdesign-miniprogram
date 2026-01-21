<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="Icon"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="Icon 图标"
        desc="用于界面中的操作、入口、功能、服务等视觉表达，icon风格与品牌风格需要保持一致的感受，从而增加一致性"
        notice="渲染框架支持情况：Skyline、WebView"
      />
      <t-demo title="01 基础组件图标">
        <baseComp />
      </t-demo>
      <t-demo title="02 自定义组件图标">
        <custom />
      </t-demo>
      <t-demo title="03 图片链接">
        <iconImage />
      </t-demo>
    </view>
  </view>
</template>

<script>
import baseComp from './base/index.vue';
import custom from './custom/index.vue';
import iconImage from './iconImage/index.vue';
export default {
  components: {
    baseComp,
    custom,
    iconImage,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './icon.less';
</style>
