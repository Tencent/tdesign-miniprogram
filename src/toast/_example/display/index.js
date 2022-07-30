import Toast from 'tdesign-miniprogram/toast/index';

Page({
  data: {
    operList2: [
      {
        label: '02 展示位置和展示时间',
        title: '弹窗展示位置为顶部、中部、底部三种，展示时间可自定义',
        btns: [
          {
            type: 'topShow',
            text: '顶部展示1秒',
          },
          {
            type: 'middleShow',
            text: '中间展示2秒',
          },
          {
            type: 'bottomShow',
            text: '底部展示3秒',
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
      case 'topShow': {
        this.handleToast({
          message: '顶部-展示1秒',
          direction: 'column',
          placement: 'top',
          duration: 1000,
          icon: 'star',
        });
        break;
      }
      case 'middleShow': {
        this.handleToast({
          message: '中间-展示2秒',
          direction: 'column',
          duration: 2000,
          icon: 'star',
        });
        break;
      }
      case 'bottomShow': {
        this.handleToast({
          message: '底部-展示3秒',
          direction: 'column',
          placement: 'bottom',
          duration: 3000,
          icon: 'star',
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
