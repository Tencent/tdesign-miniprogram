Page({
  data: {
    show: [true, true],
    items: [
      {
        name: '选中',
        checked: true,
      },
      {
        name: '未选中',
        checked: false,
      },
      {
        name: '不可选',
        checked: false,
        disabled: true,
      },
    ],
  },
  handleCheckTagChange(e) {
    console.log(e.detail.checked);
  },
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
});
