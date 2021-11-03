Page({
  data: {
    fruits: [
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
  onClickFruit(e: WechatMiniprogram.BaseEvent) {
    const { index } = e.currentTarget.dataset;
    const value = this.data.fruits[index].checked;
    this.setData({
      [`fruits[${index}].checked`]: !value,
    });
  },
});
