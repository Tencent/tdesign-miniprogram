<template>
  <view class="skyline">
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Image"
    />
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
          <base-demo />
        </t-demo>

        <t-demo title="02 组件状态">
          <status-demo />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import BaseDemo from '../base/index.vue';
import StatusDemo from '../status/index.vue';


export default {
  components: {
    BaseDemo,
    StatusDemo,
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
