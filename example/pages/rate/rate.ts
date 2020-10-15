Page({
  data: {
    star1: 0,
    star2: 2,
    star3: 1,
    star4: 0,
    star5: 3,
    star6: 1,
  },

  resetStar() {
    this.setData({
      star1: 0,
      star2: 0,
      star3: 0,
      star4: 0,
      star5: 0,
      star6: 0,
    });
  },

  onChangeVal1(event) {
    const {
      detail: {
        val,
      },
    } = event;
    this.setData({
      star1: val,
    });
    wx.showToast({
      title: `当前评分：${this.data.star1}`,
      icon: 'none',
    });
  },

  onChangeVal2(event) {
    const {
      detail: {
        val,
      },
    } = event;
    this.setData({
      star2: val,
    });
  },

  onChangeVal3(event) {
    const {
      detail: {
        val,
      },
    } = event;
    this.setData({
      star3: val,
    });
  },

  onDisableVal3() {
    wx.showToast({
      title: '该组件为只读状态',
      icon: 'none',
    });
  },

  onChangeVal4(event) {
    const {
      detail: {
        val,
      },
    } = event;
    this.setData({
      star4: val,
    });
  },

  onChangeVal5(event) {
    const {
      detail: {
        val,
      },
    } = event;
    this.setData({
      star5: val,
    });
  },

  onChangeVal6(event) {
    const {
      detail: {
        val,
        text,
      },
    } = event;
    this.setData({
      star6: val,
    });

    wx.showToast({
      title: `当前评分：${val}(${text || '未选择'})`,
      icon: 'none',
    });
  },
});
