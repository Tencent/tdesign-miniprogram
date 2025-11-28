<template>
  <view>
    <t-watermark
      :watermark-content="watermark"
      :y="56"
      :x="56"
      :width="68"
      :height="52"
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
