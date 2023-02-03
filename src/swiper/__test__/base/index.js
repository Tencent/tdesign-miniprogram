const imageCdn = 'https://tdesign.gtimg.com/miniprogram/images/';
const swiperList = [
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper3.png`,
  `${imageCdn}/swiper4.png`,
  `${imageCdn}/swiper5.png`,
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
    style: 'color: red',
    customStyle: 'font-size: 9px',
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
