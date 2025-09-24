Page({
  data: {
    thinking: true
  },

  onStop() {
    console.log('停止思考');
    this.setData({
      thinking: false
    });

    wx.showToast({
      title: '已停止思考',
      icon: 'success'
    });
  }
});
