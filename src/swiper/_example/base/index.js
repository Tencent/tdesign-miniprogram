const imageCdn = 'https://tdesign.gtimg.com/site/swiper';
const swiperList = [
  {
    image: `${imageCdn}/01.png`,
    label: '光炫图案',
  },
  {
    image: `${imageCdn}/02.png`,
    label: '闹钟图案',
  },
  {
    image: `${imageCdn}/03.png`,
    label: '扇贝图案',
  },
  {
    image: `${imageCdn}/04.png`,
    label: '喵咪图案',
  },
  {
    image: `${imageCdn}/05.png`,
    label: '海滩图案',
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

  methods: {
    onChange(e) {
      const {
        detail: { current, source },
      } = e;
      console.log(current, source);
    },
  },
});
