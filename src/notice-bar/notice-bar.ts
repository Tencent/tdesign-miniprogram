import { SuperComponent, wxComponent, ComponentsOptionsType } from '../common/src/index';
import { getRect, getAnimationFrame, calcIcon } from '../common/utils';
import props from './props';
import config from '../common/config';

const { prefix } = config;
const name = `${prefix}-notice-bar`;

// 主题图标
const THEME_ICON = {
  info: 'info-circle-filled',
  success: 'check-circle-filled',
  warning: 'info-circle-filled',
  error: 'error-circle-filled',
};

@wxComponent()
export default class NoticeBar extends SuperComponent {
  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-content`,
    `${prefix}-class-prefix-icon`,
    `${prefix}-class-operation`,
    `${prefix}-class-suffix-icon`,
  ];

  options: ComponentsOptionsType = {
    multipleSlots: true,
    pureDataPattern: /^__/,
  };

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    loop: -1,
    __ready: false,
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

    visible(visible) {
      if (!this.data.__ready) return;
      if (visible) {
        this.show();
      } else {
        this.clearNoticeBarAnimation();
      }
    },

    prefixIcon(prefixIcon) {
      this.setPrefixIcon(prefixIcon);
    },

    suffixIcon(v) {
      this.setData({
        _suffixIcon: calcIcon(v),
      });
    },

    content() {
      if (!this.data.__ready) return;
      this.clearNoticeBarAnimation();
      this.initAnimation();
    },
  };

  lifetimes = {
    created() {
      this.resetAnimation = wx.createAnimation({
        duration: 0,
        timingFunction: 'linear',
      });
    },

    detached() {
      this.clearNoticeBarAnimation();
    },

    ready() {
      this.show();
      this.setData({ __ready: true });
    },
  };

  methods = {
    initAnimation() {
      // 获取外部容器和滚动内容的宽度
      const warpID = `.${name}__content-wrap`;
      const nodeID = `.${name}__content`;
      getAnimationFrame(this, () => {
        Promise.all([getRect(this, nodeID), getRect(this, warpID)])
          .then(([nodeRect, wrapRect]) => {
            const { marquee } = this.properties;

            if (nodeRect == null || wrapRect == null || !nodeRect.width || !wrapRect.width) {
              return;
            }

            if (marquee || wrapRect.width < nodeRect.width) {
              const speeding = marquee.speed || 50;
              const delaying = marquee.delay || 0;
              const animationDuration = ((wrapRect.width + nodeRect.width) / speeding) * 1000;
              const firstAnimationDuration = (nodeRect.width / speeding) * 1000;
              this.setData({
                wrapWidth: Number(wrapRect.width),
                nodeWidth: Number(nodeRect.width),
                animationDuration: animationDuration,
                delay: delaying,
                loop: marquee.loop - 1,
                firstAnimationDuration: firstAnimationDuration,
              });
              marquee.loop !== 0 && this.startScrollAnimation(true);
            }
          })
          .catch(() => {});
      });
    },

    startScrollAnimation(isFirstScroll = false) {
      this.clearNoticeBarAnimation();

      const { wrapWidth, nodeWidth, firstAnimationDuration, animationDuration, delay } = this.data;
      const delayTime = isFirstScroll ? delay : 0;
      const durationTime = isFirstScroll ? firstAnimationDuration : animationDuration;

      // 滚动内容: 初始位置
      this.setData({
        animationData: this.resetAnimation
          .translateX(isFirstScroll ? 0 : wrapWidth)
          .step()
          .export(),
      });

      getAnimationFrame(this, () => {
        // 滚动内容: 最终位置
        this.setData({
          animationData: wx
            .createAnimation({ duration: durationTime, timingFunction: 'linear', delay: delayTime })
            .translateX(-nodeWidth)
            .step()
            .export(),
        });
      });

      // 滚动一次完成, 开启下一次的滚动
      this.nextAnimationContext = setTimeout(() => {
        if (this.data.loop > 0) {
          this.data.loop -= 1;
          this.startScrollAnimation();
        } else if (this.data.loop === 0) {
          // 动画回到初始位置
          this.setData({ animationData: this.resetAnimation.translateX(0).step().export() });
        } else if (this.data.loop < 0) {
          this.startScrollAnimation();
        }
      }, durationTime + delayTime);
    },

    show() {
      this.clearNoticeBarAnimation();
      this.setPrefixIcon(this.properties.prefixIcon);
      this.initAnimation();
    },

    /** 清除动画 */
    clearNoticeBarAnimation() {
      this.nextAnimationContext && clearTimeout(this.nextAnimationContext);
      this.nextAnimationContext = null;
    },

    setPrefixIcon(v) {
      const { theme } = this.properties;
      this.setData({
        _prefixIcon: calcIcon(v, THEME_ICON[theme]),
      });
    },

    onChange(e: WechatMiniprogram.SwiperChange) {
      const { current, source } = e.detail;
      this.triggerEvent('change', { current, source });
    },

    clickPrefixIcon() {
      this.triggerEvent('click', { trigger: 'prefix-icon' });
    },

    clickContent() {
      this.triggerEvent('click', { trigger: 'content' });
    },

    clickSuffixIcon() {
      this.triggerEvent('click', { trigger: 'suffix-icon' });
    },

    clickOperation() {
      this.triggerEvent('click', { trigger: 'operation' });
    },
  };
}
