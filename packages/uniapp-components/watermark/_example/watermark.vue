<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Watermark"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="Watermark 水印"
        desc="给页面的某个区域加上水印。"
      />
      <t-demo
        title="01 组件类型"
        desc="文字水印"
      >
        <base-watermark />
      </t-demo>
      <t-demo desc="图片水印">
        <image-watermark />
      </t-demo>
      <t-demo desc="图片灰阶水印">
        <gray-watermark />
      </t-demo>
      <t-demo desc="多行图文水印">
        <multi-line-watermark />
      </t-demo>
      <t-demo desc="多行图文灰阶水印">
        <multi-line-gray-watermark />
      </t-demo>
      <t-demo desc="运动文字水印">
        <move-text-watermark />
      </t-demo>
      <t-demo desc="运动图片水印">
        <move-image-watermark />
      </t-demo>
      <t-demo title="02 组件样式">
        <layout />
      </t-demo>
    </view>
  </view>
</template>

<script>
import baseWatermark from './base/index.vue';
import imageWatermark from './image/index.vue';
import grayWatermark from './gray/index.vue';
import multiLineWatermark from './multi-line/index.vue';
import multiLineGrayWatermark from './multi-line-gray/index.vue';
import moveTextWatermark from './move-text/index.vue';
import moveImageWatermark from './move-image/index.vue';
import layout from './layout/index.vue';

export default {
  components: {
    baseWatermark,
    imageWatermark,
    grayWatermark,
    multiLineWatermark,
    multiLineGrayWatermark,
    moveTextWatermark,
    moveImageWatermark,
    layout,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less"></style>
