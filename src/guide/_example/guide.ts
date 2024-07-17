Page({
  data: {
    visible: false,
    visibleBase: false,
  },
  handleClick() {
    this.setData({ visible: true });
    setTimeout(() => {
      this.setData({ visibleBase: true });
    }, 300);
  },
});
