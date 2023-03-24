const imageCdn = 'https://tdesign.gtimg.com/miniprogram/images';
const swiperList = [
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
];

Component({
  data: {
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList,
    navigation: { type: 'dots-bar' },
    paginationPosition: 'right',
  },

  methods: {
    onChange(e) {
      const {
        detail: { current, source },
      } = e;
      console.log(current, source);
    },
    onAutoplayChange(e) {
      this.setData({
        autoplay: e.detail.value,
      });
    },
    onIntervalChange(e) {
      this.setData({
        interval: e.detail.value,
      });
    },
    onDurationChange(e) {
      this.setData({
        duration: e.detail.value,
      });
    },
  },
});
