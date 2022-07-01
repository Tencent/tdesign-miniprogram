import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-navbar`;

@wxComponent()
export default class Navbar extends SuperComponent {
  externalClasses = [
    't-class',
    't-class-title',
    't-class-left',
    't-class-center',
    't-class-left-icon',
    't-class-home-icon',
    't-class-capsule',
    't-class-nav-btn',
  ];

  timer = null;

  options = {
    addGlobalClass: true,
    multipleSlots: true,
  };

  properties = props;

  observers = {
    visible(this: Navbar, visible) {
      const { animation } = this.properties;
      const visibleClass = `${name}${visible ? '--visible' : '--hide'}`;
      this.setData({
        visibleClass: `${visibleClass}${animation ? '-animation' : ''}`,
      });
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (animation) {
        this.timer = setTimeout(() => {
          this.setData({
            visibleClass,
          });
        }, 300);
      }
    },
    fixed(this: Navbar, fixed) {
      this.setData({
        fixedClass: fixed ? `${name}--fixed` : '',
      });
    },
    background(this: Navbar, background) {
      const list = [];
      if (background) list.push(`background: ${background}`);
      this.setData({
        contentStyle: list.join(';'),
      });
    },
    'homeIcon, leftIcon'(this: Navbar) {
      this.calcLeftBtn();
    },
    'title,titleMaxLength'(this: any) {
      const { title } = this.properties;
      const titleMaxLength = this.properties.titleMaxLength || Number.MAX_SAFE_INTEGER;
      let temp = title.slice(0, titleMaxLength);
      if (titleMaxLength < title.length) temp += '...';
      this.setData({
        showTitle: temp,
      });
    },
  };

  data = {
    hasHomeIcon: false,
    hasBackIcon: false,

    classPrefix: name,
    fixedClass: `${name}--fixed`,

    contentStyle: '',
    boxStyle: '',

    opacity: 0.1,
    ios: false,
    delta: 1,
    showTitle: '',
  };

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
        const navbarHeight = ios ? 44 : 48;
        const boxStyleList = [];
        boxStyleList.push(`--narbar-padding-top:${(rect.bottom + rect.top) / 2 - navbarHeight / 2}px;`);
        if (rect && res?.windowWidth) {
          boxStyleList.push(`--navbar-right:${res.windowWidth - rect.left}px;`); // 导航栏右侧小程序胶囊按钮宽度
        }
        boxStyleList.push(`--capsule-height:${rect.height}px;`); // 胶囊高度
        boxStyleList.push(`--capsule-width:${rect.width}px;`); // 胶囊宽度
        boxStyleList.push(`--navbar-height:${navbarHeight}px;`); // navbar高度
        this.setData({
          ios,
          boxStyle: boxStyleList.join(';'),
        });
      },
      fail: (err) => {
        console.error('navbar 获取系统信息失败', err);
      },
    });
  }

  calcLeftBtn() {
    const { homeIcon, leftIcon } = this.properties as any;

    let home = false;
    let back = false;

    if (homeIcon) home = true;

    if (leftIcon) back = true;
    this.setData({
      hasHomeIcon: home,
      hasBackIcon: back,
    });
  }

  goHome() {
    this.triggerEvent('go-home');
  }

  goBack() {
    const { delta } = this.data;
    // eslint-disable-next-line
    const that = this;
    this.triggerEvent('go-back');
    if (delta > 0) {
      wx.navigateBack({
        delta,
        fail(e) {
          that.triggerEvent('fail', e);
        },
        complete(e) {
          that.triggerEvent('complete', e);
        },
        success(e) {
          that.triggerEvent('success', e);
        },
      });
    }
  }
}
