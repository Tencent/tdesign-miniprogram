import Toast from 'tdesign-miniprogram/toast/index';

Page({
  data: {
    operList1: [
      {
        title: '基础提示',
        btns: [
          {
            type: 'pureText',
            text: '纯文本',
          },
          {
            type: 'withIconRow',
            text: '带图标-横向',
          },
          {
            type: 'withIconColumn',
            text: '带图标-竖向',
          },
          {
            type: 'pureTextMaxHeight',
            text: '纯文本最大高度',
          },
        ],
      },
      {
        title: '默认提示',
        btns: [
          {
            type: 'successRow',
            text: '成功-横向',
          },
          {
            type: 'warnRow',
            text: '警告-横向',
          },
          {
            type: 'successColumn',
            text: '成功-竖向',
          },
          {
            type: 'warnColumn',
            text: '警告-竖向',
          },
          {
            type: 'loading',
            text: '加载',
          },
        ],
      },
    ],
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
      case 'pureText': {
        this.handleToast({
          message: '轻提示文字内容',
        });
        break;
      }
      case 'withIconRow': {
        this.handleToast({
          message: '带图标横向',
          icon: 'check-circle',
        });
        break;
      }
      case 'withIconColumn': {
        this.handleToast({
          message: '带图标竖向',
          icon: 'star',
          direction: 'column',
        });
        break;
      }
      case 'pureTextMaxHeight': {
        this.handleToast({
          message: '最多一行展示十个汉字宽度限制最多不超过三行文字行文字行文字',
        });
        break;
      }
      case 'successRow': {
        this.handleToast({
          message: '成功文案',
          theme: 'success',
        });
        break;
      }
      case 'warnRow': {
        this.handleToast({
          message: '警告文案',
          theme: 'fail',
        });
        break;
      }
      case 'successColumn': {
        this.handleToast({
          message: '成功文案',
          theme: 'success',
          direction: 'column',
        });
        break;
      }
      case 'warnColumn': {
        this.handleToast({
          message: '警告文案',
          theme: 'fail',
          direction: 'column',
        });
        break;
      }
      case 'loading': {
        this.handleToast({
          message: '加载中...',
          theme: 'loading',
          direction: 'column',
        });
        break;
      }
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
