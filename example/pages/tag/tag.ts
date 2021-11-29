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
  handleClick(e: WechatMiniprogram.BaseEvent) {
    const { index } = e.currentTarget.dataset;
    const value = this.data.items[index].checked;
    this.setData({
      [`items[${index}].checked`]: !value,
    });
  },
  handleClose() {
    this.setData({
      show: false,
    });
  },
});
