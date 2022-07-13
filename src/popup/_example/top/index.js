Component({
  data: {
    visible: false,
  },
  methods: {
    handlePopup() {
      this.setData({
        visible: true,
      });
    },
    onVisibleChange(e) {
      this.setData({
        visible: e.detail.visible,
      });
    },
  },
});
