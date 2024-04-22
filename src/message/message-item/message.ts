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
    multipleSlots: true,
  };

  // 组件的对外属性
  properties: MessageProps = { ...props } as unknown as MessageProps;

  // 组件的内部数据
  data = {
    prefix,
    classPrefix: name,
    loop: -1,
    wrapTop: -999, // 初始定位，保证在可视区域外。
    fadeClass: '',
  };

  // 延时关闭句柄
  closeTimeoutContext = 0;

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

  lifetimes = {
    ready() {
      this.memoInitialData();
    },
  };

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

  show(offsetHeight: number = 0) {
    const { duration, marquee, offset, id } = this.properties;
    this.setData({
      visible: true,
      loop: marquee.loop || this.data.loop,
      fadeClass: `${name}__fade`,
      wrapTop: unitConvert(offset[0]) + offsetHeight,
    });
    this.reset();
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
      this.setData({ visible: false });
    }, SHOW_DURATION);
    if (typeof this.onHide === 'function') {
      this.onHide();
    }
  }

  // 重置定时器
  reset() {
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
