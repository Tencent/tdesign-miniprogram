Component({
  data: {
    imageIconList: [
      'https://tdesign.gtimg.com/miniprogram/images/icon1.png',
      'https://tdesign.gtimg.com/miniprogram/images/icon2.png',
    ],
  },

  methods: {
    onIconTap(event) {
      const { name, type } = event.currentTarget.dataset;
      if (type === 'prefix') {
        return;
      }
      wx.setClipboardData({
        data: name,
      });
    },
  },
});
