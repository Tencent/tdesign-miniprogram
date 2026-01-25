<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Icon"
    />
    <view class="demo">
      <t-demo-header
        title="Icon 图标"
        desc="用于界面中的操作、入口、功能、服务等视觉表达，icon风格与品牌风格需要保持一致的感受，从而增加一致性"
        notice="渲染框架支持情况：Skyline、WebView"
      />
      <t-demo title="01 基础组件图标">
        <base-comp />
      </t-demo>
      <t-demo title="02 自定义组件图标">
        <custom-demo />
      </t-demo>
      <t-demo title="03 图片链接">
        <icon-image />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseComp from './base/index.vue';
import CustomDemo from './custom/index.vue';
import IconImage from './iconImage/index.vue';
export default {
  components: {
    BaseComp,
    CustomDemo,
    IconImage,
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
