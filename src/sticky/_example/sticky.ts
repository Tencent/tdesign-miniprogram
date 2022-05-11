Page({
  data: {
    container: null,
  },
  onLoad() {
    this.setData({
      // @ts-ignore
      container: () => wx.createSelectorQuery().select('.box-c'),
    });
  },
});
