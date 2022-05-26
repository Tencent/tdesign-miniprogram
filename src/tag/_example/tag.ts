Page({
  data: {
    show: true,
    items: [
      {
        name: '已点击',
        checked: true,
      },
      {
        name: '未点击',
        checked: false,
      },
      {
        name: '不可点击',
        checked: false,
        disabled: true,
      },
    ],
  },
  handleCheckTagChange(e) {
    console.log(e.detail.checked);
  },
  handleClose() {
    this.setData({
      show: false,
    });
  },
});
