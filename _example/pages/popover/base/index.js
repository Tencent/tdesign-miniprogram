Component({
  data: {
    visible: {
      normal: false,
      noArrow: false,
      custom: false,
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
      const { target } = e.currentTarget.dataset;
      this.setData({
        [`visible.${target}`]: e.detail.visible,
      });
    },
  },
});
