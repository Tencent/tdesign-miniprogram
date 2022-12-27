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
    current: 2,
    autoplay: true,
    duration: 500,
    interval: 5000,
    paginationPosition: 'bottom-right',
    swiperList,
    navigation: { type: 'fraction' },
  },
});
