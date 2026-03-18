Component({
  data: {
    show: [true, true],
  },

  methods: {
    handleClose0() {
      this.setData({
        [`show[0]`]: false,
      });
    },
    handleClose1() {
      this.setData({
        [`show[1]`]: false,
      });
    },
  },
});
