<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="Image"
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
          Image 图片
        </view>
        <view class="demo-desc">
          用于展示效果，主要为上下左右居中裁切、拉伸、平铺等方式。
        </view>
        <t-demo title="01 组件类型">
          <baseDemo />
        </t-demo>

        <t-demo title="02 组件状态">
          <status />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import baseDemo from '../base/index.vue';
import status from '../status/index.vue';
export default {
  components: {
    tNavbar,
    baseDemo,
    status,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './image.less';
</style>
