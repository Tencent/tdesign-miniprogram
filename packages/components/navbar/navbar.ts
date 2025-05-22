import { SuperComponent, wxComponent } from '../common/src/index';
import { getRect, systemInfo } from '../common/utils';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-navbar`;

@wxComponent()
export default class Navbar extends SuperComponent {
  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-placeholder`,
    `${prefix}-class-content`,
    `${prefix}-class-title`,
    `${prefix}-class-left`,
    `${prefix}-class-center`,
    `${prefix}-class-left-icon`,
    `${prefix}-class-home-icon`,
    `${prefix}-class-capsule`,
    `${prefix}-class-nav-btn`,
  ];

  timer = null;

  options = {
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
    prefix,
    classPrefix: name,
    boxStyle: '',
    showTitle: '',
    hideLeft: false, // 隐藏左侧内容
    hideCenter: false, // 隐藏中部内容
    _menuRect: null, // 胶囊按钮节点信息
    _leftRect: null, // 左侧节点信息
    _boxStyle: {}, // 记录样式
  };

  attached() {
    this.initStyle();
    this.getLeftRect();
    this.onMenuButtonBoundingClientRectWeightChange();
  }

  detached() {
    this.offMenuButtonBoundingClientRectWeightChange();
  }

  methods = {
    initStyle() {
      this.getMenuRect();

      const { _menuRect, _leftRect } = this.data;

      if (!_menuRect || !_leftRect || !systemInfo) return;

      const _boxStyle = {
        '--td-navbar-padding-top': `${systemInfo.statusBarHeight}px`,
        '--td-navbar-right': `${systemInfo.windowWidth - _menuRect.left}px`, // 导航栏右侧小程序胶囊按钮宽度
        '--td-navbar-left-max-width': `${_menuRect.left}px`, // 左侧内容最大宽度
        '--td-navbar-capsule-height': `${_menuRect.height}px`, // 胶囊高度
        '--td-navbar-capsule-width': `${_menuRect.width}px`, // 胶囊宽度
        '--td-navbar-height': `${(_menuRect.top - systemInfo.statusBarHeight) * 2 + _menuRect.height}px`,
      };

      this.calcCenterStyle(_leftRect, _menuRect, _boxStyle);
    },

    calcCenterStyle(
      leftRect: WechatMiniprogram.BoundingClientRectResult,
      menuRect: WechatMiniprogram.BoundingClientRectResult,
      defaultStyle: object,
    ) {
      const maxSpacing = Math.max(leftRect.right, systemInfo.windowWidth - menuRect.left);
      const _boxStyle = {
        ...defaultStyle,
        '--td-navbar-center-left': `${maxSpacing}px`, // 标题左侧距离
        '--td-navbar-center-width': `${Math.max(menuRect.left - maxSpacing, 0)}px`, // 标题宽度
      };

      const boxStyle = Object.entries(_boxStyle)
        .map(([k, v]) => `${k}: ${v}`)
        .join('; ');

      this.setData({
        boxStyle,
        _boxStyle,
      });
    },

    getLeftRect() {
      getRect(this, `.${name}__left`).then((res) => {
        if (res.right > this.data._leftRect.right) {
          this.calcCenterStyle(res, this.data._menuRect, this.data._boxStyle);
        }
      });
    },

    getMenuRect() {
      // 场景值为1177（视频号直播间）和1175 （视频号profile页）时，小程序禁用了 wx.getMenuButtonBoundingClientRect
      if (wx.getMenuButtonBoundingClientRect) {
        const rect = wx.getMenuButtonBoundingClientRect();
        this.setData({
          _menuRect: rect,
          _leftRect: {
            right: systemInfo.windowWidth - rect.left,
          },
        });
      }
    },

    onMenuButtonBoundingClientRectWeightChange() {
      if (wx.onMenuButtonBoundingClientRectWeightChange) {
        wx.onMenuButtonBoundingClientRectWeightChange((res: object) => this.queryElements(res)); // 监听胶囊条长度变化，隐藏遮挡的内容
      }
    },

    offMenuButtonBoundingClientRectWeightChange() {
      if (wx.offMenuButtonBoundingClientRectWeightChange) {
        wx.offMenuButtonBoundingClientRectWeightChange((res: object) => this.queryElements(res));
      }
    },

    /**
     * 比较胶囊条和navbar内容，决定是否隐藏
     * @param capsuleRect API返回值，胶囊条的位置信息
     */
    queryElements(capsuleRect) {
      Promise.all([
        getRect(this, `.${this.data.classPrefix}__left`),
        getRect(this, `.${this.data.classPrefix}__center`),
      ]).then(([leftRect, centerRect]) => {
        // 部分安卓机型中（目前仅在Magic6/7中复现），仍存在精度问题，暂使用 Math.round() 取整规避
        if (Math.round(leftRect.right) > capsuleRect.left) {
          this.setData({
            hideLeft: true,
            hideCenter: true,
          });
        } else if (Math.round(centerRect.right) > capsuleRect.left) {
          this.setData({
            hideLeft: false,
            hideCenter: true,
          });
        } else {
          this.setData({
            hideLeft: false,
            hideCenter: false,
          });
        }
      });
    },

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
    },
  };
}
