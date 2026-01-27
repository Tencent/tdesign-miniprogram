<template>
  <view>
    <t-watermark
      :watermark-content="watermark"
      :width="120"
      :height="20"
      :x="56"
      :y="76"
      :alpha="0.3"
    >
      <view style="width: 100%; height: 300px" />
    </t-watermark>
  </view>
</template>

<script>
import TWatermark from 'tdesign-uniapp/watermark/watermark.vue';

export default {
  components: {
    TWatermark,
  },
  data() {
    return {
      watermark: {
        url: 'https://tdesign.gtimg.com/starter/brand-logo-light.png',
        isGrayscale: true,
      },
    };
  },
};
</script>
<style scoped></style>
