<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Image"
    />
    <view class="demo">
      <t-demo-header
        title="Image 图片"
        desc="用于展示效果，主要为上下左右居中裁切、拉伸、平铺等方式。"
      />
      <t-demo title="01 组件类型">
        <base-comp />
      </t-demo>

      <t-demo title="02 组件状态">
        <status-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseComp from './base/index.vue';
import StatusDemo from './status/index.vue';
export default {
  components: {
    BaseComp,
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
