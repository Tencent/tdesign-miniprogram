<template>
  <view class="container">
    <view class="button-group">
      <t-button
        class="button"
        variant="text"
        :disabled="size <= minSize"
        @click="() => changeSize(-10)"
      >
        - Smaller
      </t-button>
      <view class="line" />
      <t-button
        class="button"
        variant="text"
        :disabled="size >= maxSize"
        @click="() => changeSize(10)"
      >
        + Larger
      </t-button>
    </view>
    <view class="qrcode-container">
      <t-qrcode
        :size="size"
        value="https://tdesign.tencent.com/"
      />
    </view>
  </view>
</template>

<script>
import TQrcode from 'tdesign-uniapp/qrcode/qrcode.vue';
import TButton from 'tdesign-uniapp/button/button.vue';


export default {
  name: 'QRCodeSize',
  components: {
    TQrcode,
    TButton,
  },
  data() {
    return {
      size: 160,
      minSize: 80,
      maxSize: 240,
    };
  },
  methods: {
    changeSize(step) {
      const newSize = this.size + step;
      if (newSize >= this.minSize && newSize <= this.maxSize) {
        this.size = newSize;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import './index.less';
</style>
