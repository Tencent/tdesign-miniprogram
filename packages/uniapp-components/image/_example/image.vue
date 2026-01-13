<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="Image"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="Image 图片"
        desc="用于展示效果，主要为上下左右居中裁切、拉伸、平铺等方式。"
      />
      <t-demo title="01 组件类型">
        <baseComp />
      </t-demo>

      <t-demo title="02 组件状态">
        <status />
      </t-demo>
    </view>
  </view>
</template>

<script>
import baseComp from './base/index.vue';
import status from './status/index.vue';
export default {
  components: {
    baseComp,
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
