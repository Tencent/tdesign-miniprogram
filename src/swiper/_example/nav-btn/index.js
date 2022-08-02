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

Component({
  data: {
    current: 3,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList,
    navigation: { type: '', hasNavBtn: true },
  },
});
