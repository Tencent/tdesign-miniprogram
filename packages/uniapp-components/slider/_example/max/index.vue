<template>
  <view class="wrapper">
    <t-slider
      :default-value="30"
      :min="20"
      :max="100"
      :step="20"
      :marks="marks"
      @change="handleChange"
    />
  </view>
</template>

<script>
import TSlider from 'tdesign-uniapp/slider/slider.vue';
export default {
  components: {
    TSlider,
  },
  data() {
    return {
      marks: {
        20: '20',
        40: '40',
        60: '60',
        80: '80',
        100: '100',
      },
    };
  },
  created() {},
  methods: {
    handleChange(e) {
      console.log(e.value);
    },
  },
};
</script>
<style>
.wrapper {
    padding: 40rpx 12rpx 0;
    background: var(--bg-color-demo);
}
</style>
