import Toast from '@tencent/tdesign-miniprogram/toast/index';

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
            text: '底部展示2秒',
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
        this.tapShowShortTip();
        break;
      }
      case 'withIconRow': {
        this.tapShowIconTip();
        break;
      }
      case 'withIconColumn': {
        this.tapShowIconTipColumn();
        break;
      }
      case 'pureTextMaxHeight': {
        this.tapShowMaxTip();
        break;
      }
      case 'successRow': {
        this.tapShowRowSuccessTip();
        break;
      }
      case 'warnRow': {
        this.tapShowRowFailTip();
        break;
      }
      case 'successColumn': {
        this.tapShowColumnSuccessTip();
        break;
      }
      case 'warnColumn': {
        this.tapShowColumnFailTip();
        break;
      }
      case 'loading': {
        this.tapShowLoadingTip();
        break;
      }
      case 'topShow': {
        this.tapShowTopTip();
        break;
      }
      case 'middleShow': {
        this.tapShowMiddleTip();
        break;
      }
      case 'bottomShow': {
        this.tapShowBottomTip();
        break;
      }
      case 'disableSlideAndClick': {
        this.tapShowOverlayTip();
        break;
      }
      default: {
        Toast({
          context: this,
          selector: '#t-toast',
          message: '未知点击事件',
        });
      }
    }
  },
  tapShowShortTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '轻提示文字内容',
      icon: '',
    });
  },
  tapShowIconTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '带图标横向',
      icon: 'check',
      direction: 'row',
    });
  },
  tapShowIconTipColumn() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '带图标竖向',
      icon: 'check',
      direction: 'column',
    });
  },
  tapShowMaxTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '最多一行展示十个汉字宽度限制最多不超过三行文字行文字行文字',
      icon: '',
    });
  },
  tapShowRowSuccessTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '成功文案',
      type: 'success',
      direction: 'row',
    });
  },
  tapShowRowFailTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '失败文案',
      type: 'fail',
      direction: 'row',
    });
  },
  tapShowColumnSuccessTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '成功文案',
      type: 'success',
      direction: 'column',
    });
  },
  tapShowColumnFailTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '失败文案',
      type: 'fail',
      direction: 'column',
    });
  },
  tapShowLoadingTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '加载中...',
      type: 'loading',
      direction: 'column',
    });
  },
  tapShowCustomTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '自定义图标自定义图标自定义图标自定义图标图标自定义图标自定义图标自定义图标',
      icon: 'star_fill',
      direction: 'column',
    });
  },
  tapShowTopTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '顶部-展示1秒',
      icon: 'star_fill',
      direction: 'column',
      position: 'top',
      duration: 1000,
    });
  },
  tapShowMiddleTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '中间-展示3秒',
      icon: 'star_fill',
      direction: 'column',
      position: 'middle',
      duration: 3000,
    });
  },
  tapShowBottomTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '底部-展示5秒',
      icon: 'star_fill',
      direction: 'column',
      position: 'bottom',
      duration: 5000,
    });
  },
  tapShowOverlayTip() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '禁止滑动和点击',
      icon: 'star_fill',
      direction: 'column',
      position: 'bottom',
      duration: 5000,
      showOverlay: true,
    });
  },
});
