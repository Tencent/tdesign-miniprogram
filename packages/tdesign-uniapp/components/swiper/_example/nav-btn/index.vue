<template>
  <view>
    <t-swiper
      :current="current"
      :autoplay="autoplay"
      :duration="duration"
      :interval="interval"
      :navigation="navigation"
      :list="swiperList"
      :loop="false"
      @change="onChange"
    />
  </view>
</template>

<script>
import tSwiper from 'tdesign-uniapp/swiper/swiper.vue';
const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
  {
    value: `${imageCdn}/swiper1.png`,
    ariaLabel: '图片1',
  },
  {
    value: `${imageCdn}/swiper2.png`,
    ariaLabel: '图片2',
  },
  {
    value: `${imageCdn}/swiper1.png`,
    ariaLabel: '图片1',
  },
  {
    value: `${imageCdn}/swiper2.png`,
    ariaLabel: '图片2',
  },
];
export default {
  components: {
    tSwiper,
  },
  data() {
    return {
      current: 3,
      autoplay: true,
      duration: 500,
      interval: 5000,
      swiperList,
      navigation: {
        type: '',
        showControls: true,
      },
    };
  },
  created() {},
  methods: {
    onChange(e) {
      const { current } = e;
      this.current = current;
    },
  },
};
</script>
<style>
.img {
    width: 100%;
    height: 100%;
}
</style>
