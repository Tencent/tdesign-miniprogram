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
    onTap(e) {
      const { index } = e.detail;

      console.log(index);
    },
    onChange(e) {
      const { current, source } = e.detail;

      console.log(current, source);
    },
  },
});
