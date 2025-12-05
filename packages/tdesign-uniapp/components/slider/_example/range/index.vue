<template>
  <view class="wrapper">
    <t-slider
      range
      :default-value="[35, 65]"
      @dragstart="onDragstart"
      @dragend="onDragend"
    />
  </view>
</template>

<script>
import tSlider from 'tdesign-uniapp/slider/slider.vue';
export default {
  components: {
    tSlider,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onDragstart(e) {
      console.log('dragstart', e);
    },
    onDragend(e) {
      console.log('dragend', e);
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
