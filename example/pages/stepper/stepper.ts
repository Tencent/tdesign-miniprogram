Page({
  data: {
    value: 20,
  },

  stepperChangeHandler(e) {
    console.log(e);
    this.setData({
      value: e.detail.value,
    });
  },
});
