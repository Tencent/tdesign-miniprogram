Page({
  data: {
    currentTheme: 'light',
    loading: true,
    loadingText: "正在加载...",
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

  onTextChange(e) {
    this.setData({
      loadingText: e.detail.value
    });
  },

  toggleLoading() {
    this.setData({
      loading: !this.data.loading
    });
  }
});
