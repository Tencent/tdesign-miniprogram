const imageCdn = 'https://tdesign.gtimg.com/site/swiper';
const swiperList = [
  `${imageCdn}/01.png`,
  `${imageCdn}/02.png`,
  `${imageCdn}/03.png`,
  `${imageCdn}/04.png`,
  `${imageCdn}/05.png`,
];

const swiperList2 = [`${imageCdn}/01.png`, `${imageCdn}/02.png`];

Component({
  data: {
    current: 1,
    duration: 100,
    interval: 100,
    direction: 'horizontal',
    paginationPosition: 'bottom-right',
    navigation: { type: 'fraction' },
    autoplay: false,
    swiperList,
    swiperList2,
  },

  methods: {
    onChange(e) {
      const {
        detail: { current, source },
      } = e;
      this.setData({
        current,
        source,
      });
    },
  },
});
