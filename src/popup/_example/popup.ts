Page({
  placement: '',

  data: {
    bottom: false,
    center: false,
    left: false,
    right: false,
  },

  handlePopup(e) {
    const placement = e.currentTarget.dataset.type;

    this.placement = placement;

    this.setData({
      [placement]: true,
    });
  },

  onVisibleChange({ detail }) {
    const { visible } = detail;

    if (this.placement) {
      this.setData({
        [this.placement]: visible,
      });
    }
  },
});
