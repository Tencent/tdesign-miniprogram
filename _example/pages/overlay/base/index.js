Component({
  data: {
    visible: false,
  },
  methods: {
    handleClick() {
      this.setData({ visible: true });
    },
    handleOverlayClick(e) {
      this.setData({
        visible: e.detail.visible,
      });
    },
  },
});
