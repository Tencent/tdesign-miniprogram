Page({
  data: {
    show: false,
    type: '',
    position: 'middle',
    message: '',
    icon: '',
    showOverlay: true,
    duration: 1000,
  },

  tapShowShortTip() {
    this.setData({
      show: true,
      message: '轻提示内容',
    });
  },

  tapShowLongTip() {
    this.setData({
      show: true,
      message: '这是一条很长的轻提示内容，这是一条很长的轻提示内容',
    });
  },

  tapShowSuccess() {
    this.setData({
      show: true,
      type: 'success',
    });
  },

  tapShowWarning() {
    this.setData({
      show: true,
      type: 'warning',
    });
  },

  tapShowLoading() {
    this.setData({
      show: true,
      type: 'loading',
    });
  },

  tapShowIcon() {
    this.setData({
      show: true,
      icon: 'https://act.weixin.qq.com/static/images/202004/886863be47be14cfb03e69615214b2ea.png',
    });
  },

  tapShowSuccessTip() {
    this.setData({
      show: true,
      type: 'success',
      message: '成功文案',
    });
  },

  tapShowWarningTip() {
    this.setData({
      show: true,
      type: 'warning',
      message: '警告文案',
    });
  },

  tapShowLoadingTip() {
    this.setData({
      show: true,
      type: 'loading',
      message: '加载文案',
    });
  },

  tapShowIconTip() {
    this.setData({
      show: true,
      icon: 'https://act.weixin.qq.com/static/images/202004/886863be47be14cfb03e69615214b2ea.png',
      message: 'icon文案',
    });
  },
});
