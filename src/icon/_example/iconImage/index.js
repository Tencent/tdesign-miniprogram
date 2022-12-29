Component({
  data: {
    imageIconList: [
      'https://oteam-tdesign-1258344706.cos.ap-guangzhou.tencentcos.cn/miniprogram/images/icon-image.png',
      'https://oteam-tdesign-1258344706.cos.ap-guangzhou.tencentcos.cn/miniprogram/images/icon-copy.png',
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
