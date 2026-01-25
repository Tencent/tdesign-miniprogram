<template>
  <view>
    <t-slider
      :value="value"
      :min="0"
      :max="3"
      :step="1"
      :marks="marks"
      @change="handleSliderChange"
    />
    <view class="qrcode-content">
      <t-qrcode
        value="https://tdesign.gtimg.com/site/tdesign-logo.png"
        :level="currentLevel"
        status="active"
      />
    </view>
  </view>
</template>

<script>
import TQrcode from 'tdesign-uniapp/qrcode/qrcode.vue';
import TSlider from 'tdesign-uniapp/slider/slider.vue';

export default {
  name: 'QRCodeLevel',
  components: {
    TQrcode,
    TSlider,
  },
  data() {
    return {
      value: 1,
      marks: {
        0: '7%',
        1: '15%',
        2: '25%',
        3: '35%',
      },
      currentLevel: 'M',
    };
  },
  methods: {
    handleSliderChange(e) {
      const { value } = e;
      const levels = ['L', 'M', 'Q', 'H'];
      this.value = value;
      this.currentLevel = levels[value];
    },
  },
};
</script>

<style lang="less" scoped>
@import './index.less';
</style>
