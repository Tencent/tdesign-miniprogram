Page({
  data: {
    currentTheme: 'light',
    thinking: true,
    animation: 'default',
    animationIndex: 0,
    animationOptions: ['默认', '脉冲', '旋转', '闪烁'],
    animationValues: ['default', 'pulse', 'rotate', 'blink']
  },

  toggleTheme() {
    const newTheme = this.data.currentTheme === 'light' ? 'dark' : 'light';
    this.setData({
      currentTheme: newTheme
    });
  },

  onAnimationChange(e) {
    const index = e.detail.value;
    this.setData({
      animationIndex: index,
      animation: this.data.animationValues[index]
    });
  },

  toggleThinking() {
    this.setData({
      thinking: !this.data.thinking
    });
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
