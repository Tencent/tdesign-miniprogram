import { SuperComponent, wxComponent, ComponentsOptionsType } from '../common/src/index';
import config from '../common/config';
import { MessageProps } from './message.interface';
import props from './props';
import { getRect, unitConvert, setIcon } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-message`;

// 展示动画持续时间
const SHOW_DURATION = 500;
@wxComponent()
export default class Message extends SuperComponent {
  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-content`,
    `${prefix}-class-icon`,
    `${prefix}-class-action`,
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
    visible: false,
    loop: -1,
    animation: [],
    showAnimation: [],
    wrapTop: -999, // 初始定位，保证在可视区域外。
  };

  observers = {
    marquee(val) {
      if (JSON.stringify(val) === '{}') {
        this.setData({
          marquee: {
            speed: 50,
            loop: -1,
            delay: 5000,
          },
        });
      }
    },

    icon(icon) {
      const obj = setIcon('icon', icon, 'error-circle-filled');
      this.setData({
        ...obj,
      });
    },

    closeBtn(closeBtn) {
      const obj = setIcon('closeBtn', closeBtn, 'close');
      this.setData({
        ...obj,
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
    this.memoInitalData();
  }

  /** 记录组件设置的项目 */
  memoInitalData() {
    this.initalData = {
      ...this.properties,
      ...this.data,
    };
  }

  resetData(cb: () => void) {
    this.setData({ ...this.initalData }, cb);
  }

  detached() {
    this.clearMessageAnimation();
  }

  /** 检查是否需要开启一个新的动画循环 */
  checkAnimation() {
    if (!this.properties.marquee) {
      return;
    }

    const speeding = this.properties.marquee.speed;

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

  show() {
    const { duration, marquee, offset } = this.properties;
    this.setData({ visible: true, loop: marquee.loop });
    this.reset();
    this.checkAnimation();
    if (duration && duration > 0) {
      this.closeTimeoutContext = setTimeout(() => {
        this.hide();
        this.triggerEvent('durationEnd', { self: this });
      }, duration) as unknown as number;
    }

    const wrapID = `#${name}`;
    getRect(this, wrapID).then((wrapRect) => {
      // 入场动画。先根据 message 的实际高度设置绝对定位的 top 值，再开始显示动画
      this.setData({ wrapTop: -wrapRect.height }, () => {
        this.setData({
          showAnimation: wx
            .createAnimation({ duration: SHOW_DURATION, timingFunction: 'ease' })
            .translateY(wrapRect.height + unitConvert(offset[0]))
            .step()
            .export(),
        });
      });
    });
  }

  hide() {
    this.reset();
    this.setData({
      // 出场动画
      showAnimation: wx
        .createAnimation({ duration: SHOW_DURATION, timingFunction: 'ease' })
        .translateY(this.data.wrapTop)
        .step()
        .export(),
    });
    setTimeout(() => {
      this.setData({ visible: false, animation: [] });
    }, SHOW_DURATION);
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
    this.triggerEvent('closeBtnClick');
  }

  handleBtnClick() {
    this.triggerEvent('actionBtnClick', { self: this });
  }
}
