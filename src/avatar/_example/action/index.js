Component({
  data: {
    pics: [
      'https://tdesign.gtimg.com/miniprogram/images/avatar1.png',
      'https://tdesign.gtimg.com/miniprogram/images/avatar2.png',
      'https://tdesign.gtimg.com/miniprogram/images/avatar3.png',
      'https://tdesign.gtimg.com/miniprogram/images/avatar4.png',
      'https://tdesign.gtimg.com/miniprogram/images/avatar5.png',
      'https://tdesign.gtimg.com/miniprogram/images/avatar1.png',
    ],
  },

  methods: {
    onAddTap() {
      wx.showToast({ title: '您按下了添加', icon: 'none', duration: 1000 });
    },
  },
});
