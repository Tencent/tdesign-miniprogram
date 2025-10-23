Page({
  data: {
    loading: true,
    loadingText: "正在加载..."
  },

  toggleLoading() {
    this.setData({
      loading: !this.data.loading
    });
  },

  resetLoading() {
    this.setData({
      loading: true,
      loadingText: "正在加载..."
    });

    wx.showToast({
      title: '已重置',
      icon: 'success'
    });
  }
});
