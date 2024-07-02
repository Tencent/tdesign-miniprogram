import { SuperComponent, wxComponent } from '../common/src/index';
import { getRect } from '../common/utils';
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
  };

  attached() {
    // 场景值为1177（视频号直播间）和1175 （视频号profile页）时，小程序禁用了 wx.getMenuButtonBoundingClientRect
    let rect = null;
    if (wx.getMenuButtonBoundingClientRect) {
      rect = wx.getMenuButtonBoundingClientRect();
    }
    if (!rect) return;
    wx.getSystemInfo({
      success: (res) => {
        const boxStyleList = [];
        boxStyleList.push(`--td-navbar-padding-top: ${res.statusBarHeight}px`);
        if (rect && res?.windowWidth) {
          boxStyleList.push(`--td-navbar-right: ${res.windowWidth - rect.left}px`); // 导航栏右侧小程序胶囊按钮宽度
        }
        boxStyleList.push(`--td-navbar-capsule-height: ${rect.height}px`); // 胶囊高度
        boxStyleList.push(`--td-navbar-capsule-width: ${rect.width}px`); // 胶囊宽度
        boxStyleList.push(`--td-navbar-height: ${(rect.top - res.statusBarHeight) * 2 + rect.height}px`);
        this.setData({
          boxStyle: `${boxStyleList.join('; ')}`,
        });
        // @ts-ignore
        if (wx.onMenuButtonBoundingClientRectWeightChange) {
          // fixme: 规避单元测试无法识别新api，更新后可删除
          // @ts-ignore
          wx.onMenuButtonBoundingClientRectWeightChange((res: object) => this.queryElements(res)); // 监听胶囊条长度变化，隐藏遮挡的内容
        }
      },
      fail: (err) => {
        console.error('navbar 获取系统信息失败', err);
      },
    });
  }

  detached() {
    // @ts-ignore
    if (wx.offMenuButtonBoundingClientRectWeightChange) {
      // fixme: 规避单元测试无法识别新api，更新后可删除
      // @ts-ignore
      wx.offMenuButtonBoundingClientRectWeightChange((res: object) => this.queryElements(res));
    }
  }

  methods = {
    /**
     * 比较胶囊条和navbar内容，决定是否隐藏
     * @param capsuleRect API返回值，胶囊条的位置信息
     */
    queryElements(capsuleRect) {
      Promise.all([
        getRect(this, `.${this.data.classPrefix}__left`),
        getRect(this, `.${this.data.classPrefix}__center`),
      ]).then(([leftRect, centerRect]) => {
        if (leftRect.right > capsuleRect.left) {
          this.setData({
            hideLeft: true,
            hideCenter: true,
          });
        } else if (centerRect.right > capsuleRect.left) {
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
