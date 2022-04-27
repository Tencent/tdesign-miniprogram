Page({
  data: {
    visible: false,
    list: [
      {
        title: '基础遮罩层',
        btns: [
          {
            type: 'base',
            text: '基础用法',
          },
        ],
      },
    ],
  },
  handleClick() {
    this.setData({ visible: true });
  },
  handleOverlayClick(e) {
    this.setData({
      visible: e.detail.visible,
    });
  },
});
