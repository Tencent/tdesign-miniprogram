<template>
  <view>
    <t-swiper
      :current="current"
      :autoplay="autoplay"
      :duration="duration"
      :interval="interval"
      :list="swiperList"
      :navigation="{ type: 'dots' }"
      @click="onTap"
      @change="onChange"
      @image-load="onImageLoad"
    />
  </view>
</template>

<script>
import TSwiper from 'tdesign-uniapp/swiper/swiper.vue';
const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [`${imageCdn}/swiper1.png`, `${imageCdn}/swiper2.png`, `${imageCdn}/swiper1.png`, `${imageCdn}/swiper2.png`, `${imageCdn}/swiper1.png`];
export default {
  components: {
    TSwiper,
  },
  data() {
    return {
      current: 0,
      autoplay: false,
      duration: 500,
      interval: 5000,
      swiperList,
    };
  },
  created() {},
  methods: {
    onTap(e) {
      const { index } = e;
      console.log(index);
    },
    onChange(e) {
      const { current, source } = e;
      console.log(current, source);
    },
    onImageLoad(e) {
      console.log(e.index);
    },
  },
};
</script>
<style>
</style>
