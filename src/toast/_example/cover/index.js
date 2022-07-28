import Toast from 'tdesign-miniprogram/toast/index';

Page({
  data: {
    operList3: [
      {
        title: '弹窗可现实遮罩，禁止滑动和点击',
        btns: [
          {
            type: 'disableSlideAndClick',
            text: '禁止滑动和点击',
          },
        ],
      },
    ],
  },
  handleToast(option) {
    Toast({
      context: this,
      selector: '#t-toast',
      ...option,
    });
  },
  clickHandle(e) {
    switch (e.detail) {
      case 'disableSlideAndClick': {
        this.handleToast({
          message: '禁止滑动和点击',
          direction: 'column',
          placement: 'bottom',
          duration: 5000,
          preventScrollThrough: true,
          icon: 'poweroff',
        });
        break;
      }
      default: {
        this.handleToast({
          message: '未知点击事件',
        });
      }
    }
  },
});
