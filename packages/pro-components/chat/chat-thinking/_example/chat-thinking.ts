Page({
  data: {
    thinking: true,
    fullText:
      '嗯，用户问牛顿第一定律是不是适用于所有参考系。首先，我得先回忆一下牛顿第一定律的内容。牛顿第一定律，也就是惯性定律，说物体在没有外力作用时会保持静止或匀速直线运动。也就是说，保持原来的运动状态。那问题来了，这个定律是否适用于所有参考系呢？记得以前学过的参考系分惯性系和非惯性系。惯性系里，牛顿定律成立；非惯性系里，可能需要引入惯性力之类的修正。所以牛顿第一定律应该只在惯性参考系中成立，而在非惯性系中不适用，比如加速的电梯或者旋转的参考系，这时候物体会有看似无外力下的加速度，所以必须引入假想的力来解释。',
    currentText: '',
    isTyping: true,
    content: {
      text: '',
      title: '思考过程',
    },
    typeSpeed: 50,
    status: "pending",
    startTime: 0,
  },

  onLoad() {
    this.setData({
      startTime: Date.now(),
    });
    this.startTyping();
  },

  onUnload() {
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
  },

  startTyping() {
    const { fullText, typeSpeed } = this.data;
    let currentIndex = 0;

    const typeNextChar = () => {
      if (currentIndex <= fullText.length) {
        const currentText = fullText.substring(0, currentIndex);

        // 检查是否已经完成打字
        if (currentIndex === fullText.length) {
          const endTime = Date.now();
          const duration = Math.round((endTime - this.data.startTime) / 1000);
          this.setData({
            currentText,
            content: {
              text: currentText,
              title: `已完成思考（耗时${duration}秒）`,
            },
            isTyping: false,
            status: "complete",
          });
          return; // 直接返回，不再继续执行
        }

        // 正常打字过程
        this.setData({
          currentText,
          content: {
            text: currentText,
            title: '思考过程',
          },
          isTyping: currentIndex < fullText.length,
        });

        if (currentIndex < fullText.length) {
          this.typingTimer = setTimeout(typeNextChar, typeSpeed);
        }
        currentIndex += 1;
      }
    };
    typeNextChar();
  },

  replayTyping() {
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }

    this.setData({
      currentText: '',
      content: {
        text: '',
        title: '思考过程',
      },
      isTyping: true,
      startTime: Date.now(),
    });

    this.startTyping();
  },

  onStop() {
    console.log('停止思考');
    this.setData({
      thinking: false,
    });

    wx.showToast({
      title: '已停止思考',
      icon: 'success',
    });
  },

  toggleThinking() {
    this.setData({
      thinking: !this.data.thinking,
    });
  },

  resetThinking() {
    this.setData({
      thinking: true,
    });

    wx.showToast({
      title: '已重置',
      icon: 'success',
    });
  },
});
