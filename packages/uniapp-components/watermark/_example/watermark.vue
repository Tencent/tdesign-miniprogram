<template>
  <view>
    <t-demo-navbar
      title="Watermark"
    />
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
        <layout-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseWatermark from './base/index.vue';
import ImageWatermark from './image/index.vue';
import GrayWatermark from './gray/index.vue';
import MultiLineWatermark from './multi-line/index.vue';
import MultiLineGrayWatermark from './multi-line-gray/index.vue';
import MoveTextWatermark from './move-text/index.vue';
import MoveImageWatermark from './move-image/index.vue';
import LayoutDemo from './layout/index.vue';

export default {
  components: {
    BaseWatermark,
    ImageWatermark,
    GrayWatermark,
    MultiLineWatermark,
    MultiLineGrayWatermark,
    MoveTextWatermark,
    MoveImageWatermark,
    LayoutDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less"></style>
