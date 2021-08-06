import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-navbar`;

enum ButtonShow {
  auto = 'auto', // 自动处理，默认情况下，栈深度>1显示才back，不显示home
  always = 'always', // 总是显示
  none = 'none', // 不显示
}

@wxComponent()
export default class Navbar extends SuperComponent {
  options = {
    multipleSlots: true,
  };
  properties = {
    // 是否渲染
    visible: {
      type: Boolean,
      value: true,
    },
    // 是否 fixed 在在顶部
    fixed: {
      type: Boolean,
      value: true,
    },
    // 页面标题
    title: String,
    // 标题字号，默认为 36rpx
    titleSize: {
      type: String,
      value: '',
    },
    // 标题颜色
    titleColor: {
      type: String,
      value: '',
    },
    // 背景颜色
    backgroundColor: {
      type: String,
      value: '',
    },
    // back 按钮 icon
    backIcon: {
      type: String,
      value: 'arrow-left',
    },
    // home 按钮 icon
    homeIcon: {
      type: String,
      value: 'circle',
    },
    // 是否显示 back 按钮
    showBack: {
      type: String,
      value: ButtonShow.auto,
    },
    // 是否显示 home 按钮
    showHome: {
      type: String,
      value: ButtonShow.auto,
    },
    // 后退按钮后退层数 含义参考 wx.navigateBack，特殊的，传入 0 不会发生执行 wx.navigateBack，只会触发一个 goback 事件供自行处理
    delta: {
      type: Number,
      value: 1,
    },
    // home 按钮被点击后跳转的路径，如果不传入，则 home 被点击后不会发生任页面跳转，只会触发一个 gohome 事件供自行处理
    homePath: {
      type: String,
      value: '',
    },
    // homePath 是否是 tabbar 页面，如果是请传入 true，默认值为 false
    homeIsTabBar: Boolean,
    // 切换 visible 时使用动画
    animated: {
      type: Boolean,
      value: true,
    },
    // 只显示 back 或者 home 中的一个按钮时的 icon 字号，默认 48rpx
    singleIconSize: {
      type: String,
      value: '48rpx',
    },
    // 同时显示 back 或者 home 两个按钮时的 icon 字号，默认 40rpx
    capsuleIconSize: {
      type: String,
      value: '40rpx',
    },
    // 胶囊自定义样式，可在不同的主题下实现胶囊的边框、背景
    capsuleStyle: {
      type: String,
      value: '',
    },
  };

  observers = {
    visible(this: Navbar, visible) {
      const { animated } = this.properties;
      this.setData({
        visibleClass: `${name}${visible ? '--visible' : '--hide'}${animated ? '-animated' : ''}`,
      });
    },
    fixed(this: Navbar, fixed) {
      this.setData({
        fixedClass: fixed ? `${name}--fixed` : '',
      });
    },
    'titleSize, titleColor'(this: Navbar, titleSize, titleColor) {
      const list = [];
      if (titleSize) list.push(`font-size: ${titleSize}`);
      if (titleColor) list.push(`color: ${titleColor}`);
      this.setData({
        titleStyle: list.join(';'),
      });
    },
    backgroundColor(this: Navbar, backgroundColor) {
      const list = [];
      if (backgroundColor) list.push(`background: ${backgroundColor}`);
      this.setData({
        contentStyle: list.join(';'),
      });
    },
    'showHome, showBack'(this: Navbar) {
      this.calcLeftBtn();
    },
  };

  data = {
    _home: false,
    _back: false,

    classPrefix: name,
    fixedClass: `${name}--fixed`,

    systemClass: '',
    titleStyle: '',
    contentStyle: '',
    boxStyle: '',

    opacity: 0.1,
    ios: false,
    delta: 1,
    homePath: '',
  };

  pagesStackLength = 0; // 页面栈深度

  attached() {
    this.calcLeftBtn(); // 根据页面栈来决定展示返回按钮还是home按钮
    // 场景值为1177（视频号直播间）和1175 （视频号profile页）时，小程序禁用了 wx.getMenuButtonBoundingClientRect
    let rect = null;
    if (wx.getMenuButtonBoundingClientRect) {
      rect = wx.getMenuButtonBoundingClientRect();
    }
    wx.getSystemInfo({
      success: (res) => {
        const ios = !!(res.system.toLowerCase().search('ios') + 1);
        const boxStyleList = [];
        if (res?.statusBarHeight) {
          boxStyleList.push(`--status-bar-height:${res.statusBarHeight}px;`);
        }
        if (rect && res?.windowWidth) {
          boxStyleList.push(`--navbar-right:${res.windowWidth - rect.left}px;`); // 导航栏右侧小程序胶囊按钮宽度
        }
        this.setData({
          ios,
          systemClass: `${name}--${ios ? 'ios' : 'android'}`,
          boxStyle: boxStyleList.join(';'),
        });
      },
      fail: (err) => {
        console.error('navbar 获取系统信息失败', err);
      },
    });
  }

  calcLeftBtn() {
    const { showHome, showBack } = this.properties as any;
    if (this.pagesStackLength === 0) {
      this.pagesStackLength = getCurrentPages().length;
    }

    let home = false;
    let back = false;

    if (showHome === ButtonShow.always) home = true;
    else if (showHome === ButtonShow.none) home = false;

    if (showBack === ButtonShow.always) back = true;
    else if (showBack === ButtonShow.none) back = false;
    else if (this.pagesStackLength > 1) back = true;

    this.setData({
      _home: home,
      _back: back,
    });
  }

  goHome() {
    const { homePath } = this.data;
    const { homeIsTabBar } = this.properties;
    if (homePath) {
      if (homeIsTabBar) {
        wx.switchTab({
          url: homePath,
          fail() {},
        });
      } else {
        wx.navigateTo({
          url: homePath,
        });
      }
    }
    this.triggerEvent('gohome');
  }

  goBack() {
    const { delta } = this.data;
    if (delta > 0) {
      wx.navigateBack({
        delta,
      });
    }
    this.triggerEvent('goback');
  }
}
