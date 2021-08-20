import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import { MessageProps } from './message.interface';
import props from './props';

const { prefix } = config;
const name = `${prefix}-message`;
@wxComponent()
export default class Message extends SuperComponent {
  externalClasses = [
    't-class',
    't-class-content',
    't-class-icon',
    't-class-action',
    't-class-close-btn',
  ];

  options = {
    styleIsolation: 'apply-shared' as const,
    multipleSlots: true,
  };
  // 组件的对外属性
  properties: MessageProps = { ...props } as unknown as MessageProps;

  // 组件的内部数据
  data = {
    classPrefix: name,
    visible: false,
    loop: -1,
    animation: [],
    iconName: '',
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
    this.setIcon();
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
  /** icon 值设置*/
  setIcon(icon = this.properties.icon) {
    // 使用空值
    if (!icon) {
      this.setData({ iconName: '' });
      return;
    }
    // 固定值
    if (icon === 'warning_fill' || icon === 'sound_fill') {
      this.setData({
        iconName: `${icon}`,
      });
      return;
    }

    // 使用默认值
    if (icon) {
      let nextValue = 'exclamation'; // exclamation-目前td没有这个icon
      const { theme } = this.properties;
      const themeMessage = {
        info: 'help_fill',
        success: 'tick_fill',
        warning: 'warning_fill',
        error: 'close_fill',
      };
      nextValue = themeMessage[theme];
      this.setData({ iconName: nextValue });
    }
  }

  /** 检查是否需要开启一个新的动画循环 */
  checkAnimation() {
    const speeding = this.properties.marquee.speed;

    if (!this.properties.marquee) {
      return;
    }

    if (this.data.loop > 0) {
      this.data.loop = this.data.loop - 1;
    } else if (this.data.loop === 0) {
      // 动画回到初始位置
      this.setData({ animation: this.resetAnimation.translateX(0).step().export() });
      return;
    }

    if (this.nextAnimationContext) {
      this.clearMessageAnimation();
    }

    const warpID = '#t-message--text-wrap';
    const nodeID = '#t-message--text';
    Promise.all([this.queryWidth(nodeID), this.queryWidth(warpID)]).then(
      ([nodeWidth, warpWidth]) => {
        this.setData(
          {
            animation: this.resetAnimation.translateX(warpWidth).step().export(),
          },
          () => {
            const durationTime = ((nodeWidth + warpWidth) / speeding) * 1000;
            const nextAnimation = wx
              .createAnimation({
                // 默认50px/s
                duration: durationTime,
              })
              .translateX(-nodeWidth)
              .step()
              .export();

            // 这里就只能用 setTimeout/20, nextTick 没用
            // 不用这个的话会出现reset动画没跑完就开始跑这个等的奇怪问题
            setTimeout(() => {
              this.nextAnimationContext = setTimeout(
                this.checkAnimation.bind(this),
                durationTime,
              ) as unknown as number;

              this.setData({ animation: nextAnimation });
            }, 20);
          },
        );
      },
    );
  }

  /** 获取元素长度 */
  queryWidth(queryName: string): Promise<number> {
    return new Promise((resolve) => {
      this.createSelectorQuery()
        .select(queryName)
        .boundingClientRect(({ width }) => {
          resolve(width);
        })
        .exec();
    });
  }

  /** 清理动画循环 */
  clearMessageAnimation() {
    clearTimeout(this.nextAnimationContext);
    this.nextAnimationContext = 0;
  }

  show() {
    const { duration, icon } = this.properties;
    this.setData({ visible: true, loop: this.properties.marquee.loop });
    this.setIcon(icon);
    this.checkAnimation();
    if (duration && duration > 0) {
      this.closeTimeoutContext = setTimeout(() => {
        this.hide();
        this.triggerEvent('durationEnd', { self: this });
      }, duration) as unknown as number;
    }
  }
  hide() {
    if (this.nextAnimationContext) {
      this.clearMessageAnimation();
    }
    clearTimeout(this.closeTimeoutContext);
    this.closeTimeoutContext = 0;
    this.setData({ visible: false, animation: [] });
  }

  handleClose() {
    this.hide();
    this.triggerEvent('closeBtnClick');
  }

  handleBtnClick() {
    this.triggerEvent('actionBtnClick', { self: this });
  }
}
