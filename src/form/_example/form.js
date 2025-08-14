Page({
  data: {
    isActive1: true,
    isActive2: false,
    switchValue: false,
  },

  onClick(e) {
    const { name } = e.currentTarget.dataset;
    const isActive = this.data[name];

    if (name === 'isActive1') {
      this.setData({
        isActive1: !isActive,
        isActive2: isActive,
      });
    } else {
      this.setData({
        isActive1: isActive,
        isActive2: !isActive,
      });
    }
  },

  onChangeSwitch(e) {
    this.setData({
      switchValue: e.detail.value,
    });
  },
});
