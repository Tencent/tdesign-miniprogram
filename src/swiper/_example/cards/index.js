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
    current: 0,
    autoplay: false,
    duration: 500,
    interval: 5000,
    swiperList,
  },

  methods: {
    onChange(e) {
      const {
        detail: { current, source },
      } = e;
      console.log(current, source);
    },
  },
});
