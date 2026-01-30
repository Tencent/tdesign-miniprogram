<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="ImageViewer"
    />
    <view class="demo">
      <t-demo-header
        title="ImageViewer 图片预览"
        desc="用于图片内容的缩略展示与查看。"
        notice="渲染框架支持情况：Skyline、WebView"
      />
      <t-demo
        title="01 组件类型"
        description="基础图片预览"
        padding
      >
        <base-comp />
      </t-demo>

      <t-demo
        title="带操作图片预览"
        padding
      >
        <delete-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseComp from './base/index.vue';
import DeleteDemo from './delete/index.vue';
export default {
  components: {
    BaseComp,
    DeleteDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './image-viewer.less';
</style>
