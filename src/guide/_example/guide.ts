Page({
  data: {
    visibleBasePopup: false,
    visibleBase: false,
    visibleNoMaskPopup: false,
    visibleNoMask: false,
  },
  handleBaseClick() {
    this.setData({ visibleBasePopup: true });
    setTimeout(() => {
      this.setData({ visibleBase: true });
    }, 300);
  },
  handleBaseClose() {
    this.setData({ visibleBasePopup: false });
    setTimeout(() => {
      this.setData({ visibleBase: false });
    }, 300);
  },
  handleNoMaskClick() {
    this.setData({ visibleNoMaskPopup: true });
    setTimeout(() => {
      this.setData({ visibleNoMask: true });
    }, 300);
  },
  handleNoMaskClose() {
    this.setData({ visibleNoMaskPopup: false });
    setTimeout(() => {
      this.setData({ visibleNoMask: false });
    }, 300);
  },
});
