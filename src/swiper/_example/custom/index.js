const imageCdn = 'https://tdesign.gtimg.com/miniprogram/images';
const swiperList = [
  {
    value: `${imageCdn}/swiper1.png`,
    ariaLabel: '跑跑1',
  },
  {
    value: `${imageCdn}/swiper2.png`,
    ariaLabel: '跑跑2',
  },
  {
    value: `${imageCdn}/swiper1.png`,
    ariaLabel: '跑跑1',
  },
  {
    value: `${imageCdn}/swiper2.png`,
    ariaLabel: '跑跑2',
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
