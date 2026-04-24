Component({
  data: {
    avatar: {
      shape: 'circle',
      size: '64rpx',
      image: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
    },
    images: [
      'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
      'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
      'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
      'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
      'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
      'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
      'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
      'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
      'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
    ],
    maxShow: 3,
    showImages: [],
  },
  lifetimes: {
    attached() {
      this.setData({
        showImages: this.data.images.slice(0, this.data.maxShow),
      });
    },
  },
  methods: {
    onImageClick(e) {
      const { index } = e.currentTarget.dataset;
      wx.previewImage({
        current: this.data.images[index],
        urls: this.data.images,
      });
    },
    onAction(e) {
      const { action } = e.detail;
      console.log('action:', action);
    },
  },
});
