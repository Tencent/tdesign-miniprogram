<template>
  <view class="card-theme">
    <t-swiper
      :current="current"
      :autoplay="autoplay"
      :duration="duration"
      :interval="interval"
      :list="swiperList"
      :navigation="{ type: 'dots' }"
      :image-props="{ shape: 'round' }"
      previous-margin="34px"
      next-margin="34px"
      t-class-nav="card-theme-nav"
      @change="onChange"
    />

    <view
      class="box"
      style="height: 42px"
    />

    <t-swiper
      class="scale-card-theme"
      :current="current"
      :autoplay="autoplay"
      :duration="duration"
      :interval="interval"
      :list="swiperList"
      :navigation="{ type: 'dots' }"
      :image-props="{ shape: 'round' }"
      previous-margin="34px"
      next-margin="34px"
      t-class-nav="card-theme-nav"
      t-class-prev-image="scale-candidate"
      t-class-next-image="scale-candidate"
      @change="onChange"
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
      scale: 0,
      candidate: 0,
    };
  },
  created() {},
  methods: {
    onChange(e) {
      const { current, source } = e;
      console.log(current, source);
    },
  },
};
</script>
<style>
.card-theme {
    --td-swiper-radius: 0;
    --td-swiper-item-padding: 0 12rpx;
    --td-swiper-nav-dot-color: var(--td-bg-color-component, #e7e7e7);
    --td-swiper-nav-dot-active-color: var(--td-brand-color, #0052d9);

    padding-bottom: 18px;
}

.card-theme .card-theme-nav {
    bottom: -18px;
}

.scale-candidate {
    height: 126px !important;
}
</style>
