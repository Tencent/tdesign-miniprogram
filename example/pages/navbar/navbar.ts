Page({
  data: {
    demoType: 'base-default',
    normalOperList: [
      {
        title: '基础导航栏',
        btns: [
          {
            type: 'base-default',
            text: '基础导航栏',
          },
          {
            type: 'base-back',
            text: '带返回导航栏',
          },
          {
            type: 'base-back-home',
            text: '带返回、主页按钮导航栏',
          },
          {
            type: 'base-brand',
            text: '自定义品牌导航栏',
          },
          {
            type: 'base-img',
            text: '自定义图片导航栏',
          },
        ],
      },
    ],
    specialOperList: [
      {
        title: '品牌超长文字导航栏',
        btns: [
          {
            type: 'base-brand-long',
            text: '品牌超长文字导航栏',
          },
          {
            type: 'custom-capsule',
            text: '自定义导航胶囊',
          },
        ],
      },
    ],
  },

  onGoHome() {
    wx.navigateTo({
      url: '/pages/index',
    });
  },

  /** 切换 navbar 示例 */
  clickHandle(e) {
    const key = e.detail;
    this.setData({
      demoType: key,
    });
  },
});
