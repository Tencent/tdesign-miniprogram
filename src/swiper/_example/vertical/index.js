const imageCdn = 'https://tdesign.gtimg.com/site/swiper';
const swiperList = [
  `${imageCdn}/01.png`,
  `${imageCdn}/02.png`,
  `${imageCdn}/03.png`,
  `${imageCdn}/04.png`,
  `${imageCdn}/05.png`,
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
