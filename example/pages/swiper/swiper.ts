const imageCdn = 'https://tdesign.gtimg.com/site/swiper';
const items = [
  {
    cls: 'item0',
    image: `${imageCdn}/01.png`,
  },
  {
    cls: 'item1',
    image: `${imageCdn}/02.png`,
  },
  {
    cls: 'item2',
    image: `${imageCdn}/03.png`,
  },
  {
    cls: 'item3',
    image: `${imageCdn}/04.png`,
  },
  {
    cls: 'item4',
    image: `${imageCdn}/05.png`,
  },
];

Page({
  data: {
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    items,
    navigation1: { type: 'dots-bar' },
    navigation2: { type: 'fraction' },
    navigation3: { type: '', hasNavBtn: true },
  },
  onChange(e) {
    const {
      detail: { current, source },
    } = e;
    console.log(current, source);
    // if (source === 'touch') {
    //   this.setData({
    //     current,
    //   });
    // }
  },
  onAutoplayChange(e) {
    this.setData({
      autoplay: e.detail.value,
    });
  },
  onIntervalChange(e) {
    this.setData({
      interval: e.detail.value,
    });
  },
  onDurationChange(e) {
    this.setData({
      duration: e.detail.value,
    });
  },
});
