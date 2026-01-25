<template>
  <t-qrcode
    value="https://tdesign.tencent.com/"
    icon="https://tdesign.gtimg.com/site/tdesign-logo.png"
  />
</template>

<script>
import TQrcode from 'tdesign-uniapp/qrcode/qrcode.vue';

export default {
  name: 'QRCodeIcon',
  components: {
    TQrcode,
  },
};
</script>

<style lang="less" scoped>
@import './index.less';
</style>
