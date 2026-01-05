<template>
  <TQrcode
    value="https://tdesign.tencent.com/"
    :borderless="true"
  />
</template>

<script>
import TQrcode from 'tdesign-uniapp/qrcode/qrcode.vue';

export default {
  name: 'QRCodeBorderless',
  components: {
    TQrcode,
  },
};
</script>

<style lang="less" scoped>
@import './index.less';
</style>
