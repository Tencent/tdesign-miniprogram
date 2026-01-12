<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="Icon"
      left-arrow
    />
    <!-- #endif -->
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo">
        <view class="demo-title">
          Icon 图标
        </view>
        <view class="demo-desc">
          用于界面中的操作、入口、功能、服务等视觉表达，icon风格与品牌风格需要保持一致的感受，从而增加一致性
        </view>
        <t-demo title="01 基础组件图标">
          <baseDemo />
        </t-demo>
        <t-demo title="02 自定义组件图标">
          <custom />
        </t-demo>
        <t-demo title="03 图片链接">
          <iconImage />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import baseDemo from '../base/index.vue';
import custom from '../custom/index.vue';
import iconImage from '../iconImage/index.vue';
export default {
  components: {
    tNavbar,
    baseDemo,
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
