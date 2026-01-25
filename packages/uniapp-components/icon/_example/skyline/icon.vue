<template>
  <view class="skyline">
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Icon"
    />
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
          <base-demo />
        </t-demo>
        <t-demo title="02 自定义组件图标">
          <custom-demo />
        </t-demo>
        <t-demo title="03 图片链接">
          <icon-image />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import BaseDemo from '../base/index.vue';
import CustomDemo from '../custom/index.vue';
import IconImage from '../iconImage/index.vue';

export default {
  components: {
    BaseDemo,
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
