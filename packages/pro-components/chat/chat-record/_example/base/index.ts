Page({
  /**
   * 页面的初始数据
   */
  data: {
    query: '', // 输入框内容
    placeholder: '请输入内容', // 输入框占位符
    loading: false, // 发送按钮加载状态
    showVoice: false, // 是否显示语音输入组件
  },

  /**
   * 返回上一页
   */
  navigateBack() {
    wx.navigateBack({
      delta: 1,
    });
  },

  /**
   * 处理输入框内容变化
   */
  handleInput(e) {
    this.setData({
      query: e.detail.value,
    });
  },

  /**
   * 切换语音输入显示状态
   */
  handleVoice() {
    this.setData({
      showVoice: !this.data.showVoice,
    });
  },

  /**
   * 语音识别回调
   * @param {Object} e - 事件对象
   */
  handleRecognize(e) {
    const voiceMsg = e.detail.msg;
    console.log('语音识别结果:', voiceMsg);

    // 将语音识别结果设置到输入框中
    this.setData({
      query: voiceMsg,
      showVoice: false, // 识别完成后隐藏语音输入组件
    });

    // 提示用户
    wx.showToast({
      title: '识别成功',
      icon: 'success',
      duration: 1500,
    });
  },

  /**
   * 发送消息
   */
  handleSend() {
    const { query, loading } = this.data;

    // 如果正在加载或内容为空，不处理
    if (loading || !query.trim()) {
      if (!query.trim()) {
        wx.showToast({
          title: '请输入内容',
          icon: 'none',
          duration: 1500,
        });
      }
      return;
    }
    // 设置加载状态
    this.setData({
      loading: true,
    });

    // 模拟发送请求
    setTimeout(() => {
      this.setData({
        loading: false,
        query: '', // 清空输入框
      });

      wx.showToast({
        title: '发送成功',
        icon: 'success',
        duration: 1500,
      });
    }, 1000);
  },
});
