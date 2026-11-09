Component({
  data: {
    avatar: {
      shape: 'circle',
      size: '64rpx',
      image: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
    },
    images: ['https://tdesign.gtimg.com/mobile/demos/swiper1.png'],
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
