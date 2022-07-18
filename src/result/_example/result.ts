Page({
  data: {
    image: 'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/miniprogram/empty__demo-image.png',
    // image: '/Users/anlyyao/Documents/work/TDesigne/tdesign-miniprogram/example/assets/illustration@2x.png',

    resultList: [
      {
        title: '成功状态',
        theme: 'success',
        description: '描述文字',
      },
      {
        title: '失败状态',
        theme: 'error',
        description: '描述文字',
      },
      {
        title: '警示状态',
        theme: 'warning',
        description: '描述文字',
      },
      {
        title: '默认状态',
        theme: 'default',
        description: '描述文字',
      },
    ],
  },
  goResultPage() {
    wx.navigateTo({ url: './result-page' });
  },
});
