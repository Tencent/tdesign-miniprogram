<template>
  <view>
    <t-watermark
      :watermark-content="watermark"
      :width="120"
      :height="60"
      :y="200"
      :x="210"
      movable
    >
      <view style="width: 100%; height: 300px" />
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
