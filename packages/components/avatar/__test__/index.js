Component({
  data: {
    image: 'https://tdesign.gtimg.com/miniprogram/images/avatar1.png',
    pics: [
      'https://tdesign.gtimg.com/miniprogram/images/avatar1.png',
      'https://tdesign.gtimg.com/miniprogram/images/avatar2.png',
      'https://tdesign.gtimg.com/miniprogram/images/avatar3.png',
      'https://tdesign.gtimg.com/miniprogram/images/avatar4.png',
      'https://tdesign.gtimg.com/miniprogram/images/avatar5.png',
      'https://tdesign.gtimg.com/miniprogram/images/avatar1.png',
    ],
    errorImage: 'https://tdesign.gtimg.com/miniprogram/images/avatar1',
    text: '',
    hideOnLoadFailed: false,
  },

  methods: {
    onLoadError() {
      this.setData({
        text: 'image load error',
      });
    },
  },
});
