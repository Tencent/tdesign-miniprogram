const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
  {
    value: `${imageCdn}/swiper1.png`,
    ariaLabel: 'Picture 1',
  },
  {
    value: `${imageCdn}/swiper2.png`,
    ariaLabel: 'Picture 2',
  },
  {
    value: `${imageCdn}/swiper1.png`,
    ariaLabel: 'Picture 1',
  },
  {
    value: `${imageCdn}/swiper2.png`,
    ariaLabel: 'Picture 2',
  },
];

Component({
  data: {
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList,
  },
});
