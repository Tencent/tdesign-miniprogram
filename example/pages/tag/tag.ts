Page({
  data: {
    closableTags: [
      {
        name: '可关闭',
        size: 'large',
      },
      {
        name: '可关闭',
      },
      {
        name: '失效标签',
        disabled: true,
      },
    ],
    fruits: [
      {
        name: '苹果',
        checked: true,
      },
      {
        name: '香蕉',
        checked: false,
      },
      {
        name: '桃子',
        checked: false,
      },
      {
        name: '火龙果',
        checked: false,
        disabled: true,
      },
    ],
  },
  onClickClose(e: WechatMiniprogram.BaseEvent) {
    const { index } = e.currentTarget.dataset;
    const value = this.data.closableTags.splice(index, 1);
    this.setData({
      closableTags: value,
    });
  },
  onClickFruit(e: WechatMiniprogram.BaseEvent) {
    const { index } = e.currentTarget.dataset;
    const value = this.data.fruits[index].checked;
    this.setData({
      [`fruits[${index}].checked`]: !value,
    });
  },
});
