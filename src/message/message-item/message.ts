import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../common/src/index';
import config from '../../common/config';
import { MessageProps } from '../message.interface';
import props from '../props';
import { getRect, unitConvert, calcIcon, isObject } from '../../common/utils';

const { prefix } = config;
const name = `${prefix}-message`;

// 展示动画持续时间
const SHOW_DURATION = 500;

// 主题图标
const THEME_ICON = {
  info: 'info-circle-filled',
  success: 'check-circle-filled',
  warning: 'info-circle-filled',
  error: 'error-circle-filled',
};

@wxComponent()
export default class Message extends SuperComponent {
  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-content`,
    `${prefix}-class-icon`,
    `${prefix}-class-link`,
    `${prefix}-class-close-btn`,
  ];

  options: ComponentsOptionsType = {
    styleIsolation: 'apply-shared',
    multipleSlots: true,
  };

  // 组件的对外属性
  properties: MessageProps = { ...props } as unknown as MessageProps;

  // 组件的内部数据
  data = {
    prefix,
    classPrefix: name,
    loop: -1,
    animation: [],
    showAnimation: [],
    wrapTop: -999, // 初始定位，保证在可视区域外。
    fadeClass: '',
  };

  observers = {
    marquee(val) {
      if (JSON.stringify(val) === '{}' || JSON.stringify(val) === 'true') {
        this.setData({
          marquee: {
            speed: 50,
            loop: -1,
            delay: 0,
          },
        });
      }
    },

    'icon, theme'(icon, theme) {
      this.setData({
        _icon: calcIcon(icon, THEME_ICON[theme]),
      });
    },

    link(v) {
      const _link = isObject(v) ? { ...v } : { content: v };
      this.setData({ _link });
    },

    closeBtn(v) {
      this.setData({
        _closeBtn: calcIcon(v, 'close'),
      });
    },
  };

  /** 延时关闭句柄 */
  closeTimeoutContext = 0;

  /** 动画句柄 */
  nextAnimationContext = 0;

  resetAnimation = wx.createAnimation({
    duration: 0,
    timingFunction: 'linear',
  });

  ready() {
    this.memoInitialData();
  }

  /** 记录组件设置的项目 */
  memoInitialData() {
    this.initialData = {
      ...this.properties,
      ...this.data,
    };
  }

  resetData(cb: () => void) {
    this.setData({ ...this.initialData }, cb);
  }

  detached() {
    this.clearMessageAnimation();
  }

  /** 检查是否需要开启一个新的动画循环 */
  checkAnimation() {
    const { marquee } = this.properties;
    if (!marquee || marquee.loop === 0) {
      return;
    }

    const speeding = marquee.speed;

    if (this.data.loop > 0) {
      this.data.loop -= 1;
    } else if (this.data.loop === 0) {
      // 动画回到初始位置
      this.setData({ animation: this.resetAnimation.translateX(0).step().export() });
      return;
    }

    if (this.nextAnimationContext) {
      this.clearMessageAnimation();
    }

    const warpID = `#${name}__text-wrap`;
    const nodeID = `#${name}__text`;
    Promise.all([getRect(this, nodeID), getRect(this, warpID)]).then(([nodeRect, wrapRect]) => {
      this.setData(
        {
          animation: this.resetAnimation.translateX(wrapRect.width).step().export(),
        },
        () => {
          const durationTime = ((nodeRect.width + wrapRect.width) / speeding) * 1000;
          const nextAnimation = wx
            .createAnimation({
              // 默认50px/s
              duration: durationTime,
            })
            .translateX(-nodeRect.width)
            .step()
            .export();

          // 这里就只能用 setTimeout/20, nextTick 没用
          // 不用这个的话会出现reset动画没跑完就开始跑这个等的奇怪问题
          setTimeout(() => {
            this.nextAnimationContext = setTimeout(this.checkAnimation.bind(this), durationTime) as unknown as number;

            this.setData({ animation: nextAnimation });
          }, 20);
        },
      );
    });
  }

  /** 清理动画循环 */
  clearMessageAnimation() {
    clearTimeout(this.nextAnimationContext);
    this.nextAnimationContext = 0;
  }

  show(offsetHeight: number = 0) {
    const { duration, marquee, offset, id } = this.properties;
    this.setData({
      visible: true,
      loop: marquee.loop || this.data.loop,
      fadeClass: `${name}__fade`,
      wrapTop: unitConvert(offset[0]) + offsetHeight,
    });
    this.reset();
    this.checkAnimation();
    if (duration && duration > 0) {
      this.closeTimeoutContext = setTimeout(() => {
        this.hide();
        this.triggerEvent('duration-end', { self: this });
      }, duration) as unknown as number;
    }
    const wrapID = id ? `#${id}` : `#${name}`;
    getRect(this, wrapID).then((wrapRect) => {
      this.setData({ height: wrapRect.height }, () => {
        this.setData({
          fadeClass: ``,
        });
      });
    });
  }

  hide() {
    this.reset();
    this.setData({
      fadeClass: `${name}__fade`,
    });
    setTimeout(() => {
      this.setData({ visible: false, animation: [] });
    }, SHOW_DURATION);
    if (typeof this.onHide === 'function') {
      this.onHide();
    }
  }

  // 重置定时器
  reset() {
    if (this.nextAnimationContext) {
      this.clearMessageAnimation();
    }
    clearTimeout(this.closeTimeoutContext);
    this.closeTimeoutContext = 0;
  }

  handleClose() {
    this.hide();
    this.triggerEvent('close-btn-click');
  }

  handleLinkClick() {
    this.triggerEvent('link-click');
  }
}
