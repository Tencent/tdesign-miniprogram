import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import { MessageType, MessageProps } from './message.interface';

const { prefix } = config;
const name = `${prefix}-message`;
@wxComponent()
export default class Message extends SuperComponent {
  externalClasses = ['t-class', 't-class-content'];
  options = {
    styleIsolation: 'apply-shared' as const,
    multipleSlots: true,
  };
  // 组件的对外属性
  properties: MessageProps = {
    visible: {
      type: Boolean,
      value: false,
    },
    theme: {
      type: String,
      value: MessageType.info, //  'info' | 'success' | 'warning' | 'error'|
    },
    icon: {
      type: String,
      optionalTypes: [Boolean],
      value: true,
    },
    closeBtn: {
      type: Boolean,
      value: false,
    },
    action: {
      type: String,
      value: '',
    },
    content: {
      type: String,
      value: 'info',
    },
    duration: {
      type: Number,
      value: 3000,
    },
    marquee: {
      type: Object,
      optionalTypes: [Boolean],
      value: false,
      observer(val: Object) {
        if (JSON.stringify(val) === '{}') {
          this.setData({
            marquee: {
              loop: -1,
              delay: 1,
              speed: 50,
            },
          });
        }
      },
    },
    offset: {
      type: Object,
      value: {
        top: 6,
        right: 16,
        left: 16,
      },
    },
    zIndex: {
      type: Number,
      value: 5000,
    },
  } as unknown as MessageProps;
  // 组件的内部数据
  data = {
    classPrefix: name,
    visible: false,
    animation: [],
    local: {
      icon: '',
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
  setIcon(icon = this.properties.icon!) {
    // 使用空值
    if (!icon) {
      this.setData({ 'local.icon': '' });
      return;
    }
    // 固定值
    if (icon === 'warning_fill' || icon === 'sound_fill') {
      this.setData({
        'local.icon': `${icon}`,
      });
      return;
    }

    // 使用默认值
    if (icon) {
      let nextValue = 'exclamation';
      const { theme } = this.properties;
      switch (theme) {
        case MessageType.info: {
          nextValue = 'help_fill';
          break;
        }
        case MessageType.success: {
          nextValue = 'tick_fill';
          break;
        }
        case MessageType.warning: {
          nextValue = 'warning_fill';
          break;
        }
        case MessageType.error: {
          nextValue = 'close_fill';
          break;
        }
      }
      this.setData({ 'local.icon': nextValue });
      return;
    }
  }

  /** 检查是否需要开启一个新的动画循环 */
  checkAnimation() {
    const speeding = this.properties.marquee.speed;
    const delayTime = this.properties.marquee.delay;

    if (!this.properties.marquee) {
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
    this.setData({ visible: true });
    this.setIcon(icon);
    this.checkAnimation();
    if (duration && duration > 0) {
      this.closeTimeoutContext = setTimeout(() => {
        this.hide();
        this.durationEnd();
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

  closeHandle() {
    this.hide();
    this.triggerEvent('closeBtnClick');
  }

  btnClickHandle() {
    this.triggerEvent('actionBtnClick', { self: this });
  }

  durationEnd() {
    this.triggerEvent('durationEnd', { self: this });
  }
}
