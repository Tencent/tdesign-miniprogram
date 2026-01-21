<template>
  <view>
    <view class="demo-desc" style="margin-bottom: 32rpx"
      >Rectangular Grid 矩形布局</view
    >
    <t-watermark
      :watermark-content="watermark"
      :width="56"
      :height="56"
      :x="68"
      :y="52"
    >
      <view style="width: 100%; height: 340px" />
    </t-watermark>

    <view class="demo-desc" style="margin-bottom: 32rpx"
      >Hexagonal Grid 六边形网格</view
    >
    <t-watermark
      :watermark-content="watermark"
      :width="68"
      :height="52"
      :x="56"
      :y="56"
      layout="hexagonal"
    >
      <view style="width: 100%; height: 340px" />
    </t-watermark>
  </view>
</template>

<script>
import tWatermark from 'tdesign-uniapp/watermark/watermark.vue';

export default {
  components: {
    tWatermark,
  },
  data() {
    return {
      watermark: { text: '文字水印' },
    };
  },
};
</script>
<style scoped></style>
