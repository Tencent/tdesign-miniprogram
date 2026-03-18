Component({
  data: {
    visible: {
      dark: false,
      light: false,
      success: false,
      brand: false,
      warning: false,
      error: false,
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
