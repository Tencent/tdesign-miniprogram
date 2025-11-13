Component({
  data: {
    visible: {
      topLeft: false,
      top: false,
      topRight: false,
      bottomLeft: false,
      bottom: false,
      bottomRight: false,
      leftTop: false,
      left: false,
      leftBottom: false,
      rightTop: false,
      right: false,
      rightBottom: false,
    },
  },
  methods: {
    showPopover(e) {
      const { target } = e.currentTarget.dataset;
      this.setData({
        [`visible.${target}`]: !this.data.visible[target],
      });
    },
    onVisibleChange(e) {
      this.setData({
        visible: e.detail.visible,
      });
    },
  },
});
