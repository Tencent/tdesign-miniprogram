const backTopDemos = [
  { text: '顶部', type: 'round' },
  { text: '顶部', type: 'round-dark' },
  { text: '', type: 'round' },
  { text: '', type: 'round-dark' },
  { text: '返回顶部', type: 'half-round' },
  { text: '返回顶部', type: 'half-round-dark' },
];

Page({
  /**
   * 页面的初始数据
   */
  data: {
    backTopDemo: backTopDemos[0],
    showBackTop: false,
    skeleton: {
      rowWidth: ['340rpx', '340rpx', '218rpx', '190rpx'],
      rowHeight: ['342rpx', '32rpx', '32rpx', '32rpx'],
    },
  },

  windowHeight: null as null | number,

  onPageScroll(e) {
    if (!this.windowHeight) {
      this.windowHeight = wx.getSystemInfoSync().windowHeight;
    }
    const isShowBackTop = e.scrollTop > this.windowHeight;
    if (isShowBackTop !== this.data.showBackTop) {
      this.setData({ showBackTop: isShowBackTop });
    }
  },

  onBtnClick(e: any) {
    const index = e.currentTarget.dataset.index as number;
    switch (index) {
      case 0: {
        this.setData({ backTopDemo: backTopDemos[0] });
        break;
      }
      case 1: {
        this.setData({ backTopDemo: backTopDemos[1] });
        break;
      }
      case 2: {
        this.setData({ backTopDemo: backTopDemos[2] });
        break;
      }
      case 3: {
        this.setData({ backTopDemo: backTopDemos[3] });
        break;
      }
      case 4: {
        this.setData({ backTopDemo: backTopDemos[4] });
        break;
      }
      case 5: {
        this.setData({ backTopDemo: backTopDemos[5] });
        break;
      }
    }
    wx.pageScrollTo({ duration: 300, scrollTop: 1000 });
  },
});
