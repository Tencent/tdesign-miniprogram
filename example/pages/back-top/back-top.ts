const backTopDemos = [
  { text: '顶部', theme: 'round' },
  { text: '顶部', theme: 'round-dark' },
  { text: '', theme: 'round' },
  { text: '', theme: 'round-dark' },
  { text: '返回顶部', theme: 'half-round' },
  { text: '返回顶部', theme: 'half-round-dark' },
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
    this.setData({ backTopDemo: backTopDemos[index] });
    wx.pageScrollTo({ duration: 300, scrollTop: 1000 });
  },
});
