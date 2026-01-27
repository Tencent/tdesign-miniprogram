<template>
  <view class="wrapper">
    <t-slider
      :default-value="23"
      :step="0.1"
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
    return {};
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
    background: var(--bg-color-demo);
    padding: 0 12rpx;
}
</style>
