Component({
  data: {
    currentAnimation: 'skeleton',
    loadingText: '',
    animations: [
      { key: 'moving', text: '正在理解中...' },
      { key: 'gradient', text: '深度思考中...' },
      { key: 'circle', text: '加载中...' },
      { key: 'skeleton', text: '' },
    ],
  },

  onLoad() {
    // 模拟动画切换
    this.startAnimationCycle();
  },

  startAnimationCycle() {
    let index = 0;
    this.animationTimer = setInterval(() => {
      const animation = this.data.animations[index];
      this.setData({
        currentAnimation: animation.key,
        loadingText: animation.text,
      });

      index = (index + 1) % this.data.animations.length;
    }, 2000); // 每2秒切换一次动画
  },

  onUnload() {
    // 清理定时器
    if (this.animationTimer) {
      clearInterval(this.animationTimer);
    }
  },

  // 手动切换动画类型
  switchAnimation(e) {
    const { animation } = e.currentTarget.dataset;
    const animationData = this.data.animations.find((item) => item.key === animation);

    if (animationData) {
      this.setData({
        currentAnimation: animationData.key,
        loadingText: animationData.text,
      });
    }
  },
});
