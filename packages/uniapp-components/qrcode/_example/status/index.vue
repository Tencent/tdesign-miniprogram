<template>
  <view>
    <t-qrcode
      value="https://tdesign.tencent.com/"
      status="active"
      @refresh="handleRefresh"
    />

    <view class="demo-summary">
      expired
    </view>
    <t-qrcode
      value="https://tdesign.tencent.com/"
      status="expired"
      @refresh="handleRefresh"
    />

    <view class="demo-summary">
      loading
    </view>
    <t-qrcode
      value="https://tdesign.tencent.com/"
      status="loading"
      @refresh="handleRefresh"
    />

    <view class="demo-summary">
      scanned
    </view>
    <t-qrcode
      value="https://tdesign.tencent.com/"
      status="scanned"
      @refresh="handleRefresh"
    />
  </view>
</template>

<script>
import TQrcode from 'tdesign-uniapp/qrcode/qrcode.vue';

export default {
  name: 'QRCodeStatus',
  components: {
    TQrcode,
  },
  methods: {
    handleRefresh() {
      console.log('Click Refresh');
    },
  },
};
</script>

<style lang="less" scoped>
@import './index.less';
</style>
