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
      default: {
        this.handleToast({
          message: '未知点击事件',
        });
      }
    }
  },
});
