Page({
  data: {
    bottom: false,
    top: false,
    center: false,
    left: false,
    right: false,
    operList: [
      {
        title: '弹出层出现为止可能为顶部、底部、中部、左侧或右侧',
        btns: [
          {
            type: 'top',
            text: '顶部弹出',
          },
          {
            type: 'bottom',
            text: '底部弹出',
          },
          {
            type: 'center',
            text: '中部弹出',
          },
          {
            type: 'left',
            text: '左侧弹出',
          },
          {
            type: 'right',
            text: '右侧弹出',
          },
        ],
      },
    ],
  },

  clickHandle({ detail: placement }) {
    this.setData({
      [`${placement}`]: true,
    });
  },
  onTriggerClick() {
    this.setData({
      visible: !this.data.visible,
    });
  },

  onVisibleChange({ detail }) {
    const { visiable } = detail;
    this.setData({
      top: visiable,
      bottom: visiable,
      center: visiable,
      left: visiable,
      right: visiable,
    });
  },

  onClose() {
    this.setData({
      visible: false,
    });
  },
});
