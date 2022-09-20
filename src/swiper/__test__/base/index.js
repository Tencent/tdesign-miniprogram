const imageCdn = 'https://tdesign.gtimg.com/site/swiper';
const swiperList = [
  {
    image: `${imageCdn}/01.png`,
  },
  {
    image: `${imageCdn}/02.png`,
  },
  {
    image: `${imageCdn}/03.png`,
  },
  {
    image: `${imageCdn}/04.png`,
  },
  {
    image: `${imageCdn}/05.png`,
  },
];

const swiperList2 = [
  {
    image: `${imageCdn}/01.png`,
  },
  {
    image: `${imageCdn}/02.png`,
  },
];

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
