<template>
  <view>
    <t-watermark
      :watermark-content="watermark"
      :line-space="24"
      :x="56"
      :y="76"
      :width="120"
      :height="20"
      :alpha="0.3"
    >
      <view style="width: 100%; height: 300px" />
    </t-watermark>
  </view>
</template>

<script>
import TWatermark from '@tdesign/uniapp/watermark/watermark.vue';

export default {
  components: {
    TWatermark,
  },
  data() {
    return {
      watermark: [
        { text: '水印文本', fontColor: 'black' },
        { url: 'https://tdesign.gtimg.com/starter/brand-logo-light.png' },
      ],
    };
  },
};
</script>
<style scoped></style>
