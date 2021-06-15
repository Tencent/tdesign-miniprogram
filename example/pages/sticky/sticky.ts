Page({
  data: {
    contentRef: null,
    container: null,
  },
  onLoad() {
    this.setData({
      // @ts-ignore
      contentRef: () => this.createSelectorQuery().select('.content'),
      // @ts-ignore
      container: () => wx.createSelectorQuery().select('.box-c'),
    });
  },
});
