<template>
  <view>
    <view
      v-if="visible"
      :id="id || classPrefix"
      :ref="id || classPrefix"
      :class="classPrefix + ' ' + tClass + ' ' + classPrefix + '--' + theme + ' ' + fadeClass"
      :style="tools._style([getMessageStyles(zIndex, offset, wrapTop), customStyle])"
      :animation="showAnimation"
      aria-role="alert"
    >
      <view :class="classPrefix + '__icon--left'">
        <slot name="icon" />
        <block
          v-if="_icon"
          name="icon"
        >
          <t-icon
            :custom-style="_icon.style || ''"
            :t-class="tClassIcon"
            :prefix="_icon.prefix"
            :name="_icon.name"
            :size="_icon.size"
            :color="_icon.color"
            :aria-hidden="true"
            :aria-label="_icon.ariaLabel"
            :aria-role="_icon.ariaRole"
          />
        </block>
      </view>
      <view
        :id="classPrefix + '__text-wrap'"
        :ref="classPrefix + '__text-wrap'"
        :class="classPrefix + '__text-wrap ' + (marquee ? classPrefix + '__text-nowrap' : '')"
        :style="'text-align: ' + align"
      >
        <view
          :id="classPrefix + '__text'"
          :ref="classPrefix + '__text'"
          :class="classPrefix + '__text ' + tClassContent"
          :animation="animation"
        >
          <block v-if="content">
            {{ content }}
          </block>
          <slot name="content" />
          <slot />
        </view>
      </view>
      <t-link
        v-if="_link && _link.content"
        :t-class="classPrefix + '__link ' + tClassLink"
        :custom-style="tools._style([_link.style, _link.customStyle])"
        :disabled="_link.disabled || false"
        :hover="_link.hover || true"
        :theme="_link.theme || 'primary'"
        :size="_link.size || 'medium'"
        :prefix-icon="_link.prefixIcon || ''"
        :suffix-icon="_link.suffixIcon || ''"
        :underline="_link.underline || false"
        :content="_link.content || ''"
        :navigator-props="_link.navigatorProps || null"
        @complete="handleLinkClick"
      />
      <slot name="link" />
      <view
        :class="classPrefix + '__icon--right'"
        @click="handleClose"
      >
        <slot name="close-btn" />
        <block
          v-if="_closeBtn"
          name="icon"
        >
          <t-icon
            :custom-style="_closeBtn.style || ''"
            :t-class="tClassCloseBtn"
            :prefix="_closeBtn.prefix"
            :name="_closeBtn.name"
            :size="_closeBtn.size"
            :color="_closeBtn.color"
            :aria-hidden="false"
            :aria-label="_closeBtn.ariaLabel || '关闭'"
            :aria-role="_closeBtn.ariaRole || 'button'"
          />
        </block>
      </view>
    </view>
  </view>
</template>
<script>
import tIcon from '../icon/icon';
import tLink from '../link/link';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import { getRect, unitConvert, calcIcon } from '../common/utils';
import { isObject } from '../common/validator';
import tools from '../common/utils.wxs';
import { getMessageStyles } from './computed.js';
import { messageDefaultData } from '../message/config';


const SHOW_DURATION = 400;
const name = `${prefix}-message`;
const THEME_ICON = {
  info: 'info-circle-filled',
  success: 'check-circle-filled',
  warning: 'info-circle-filled',
  error: 'error-circle-filled',
};
const rawData = {
  prefix,
  classPrefix: name,
  loop: -1,
  animation: [],
  showAnimation: [],
  wrapTop: -999,
  fadeClass: '',

  closeTimeoutContext: 0,
  nextAnimationContext: 0,
  resetAnimation: uni.createAnimation({
    duration: 0,
    timingFunction: 'linear',
  }),
};

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-content`,
    `${prefix}-class-icon`,
    `${prefix}-class-link`,
    `${prefix}-class-close-btn`,
  ],
  components: {
    tIcon,
    tLink,
  },
  props: {
  },
  emits: [
    'duration-end',
    'close-btn-click',
    'link-click',
  ],
  data() {
    return {
      ...rawData,
      ...messageDefaultData,
      animation: [],

      tools,
    };
  },
  computed: {
    innerMarquee() {
      const { marquee } = this;
      if (JSON.stringify(marquee) === '{}' || JSON.stringify(marquee) === 'true') {
        return {
          speed: 50,
          loop: -1,
          delay: 0,
        };
      }
      return this.marquee;
    },
  },
  watch: {
    theme: {
      handler(theme) {
        this._icon = calcIcon(this.icon, THEME_ICON[theme]);
      },
      immediate: true,
    },
    icon: {
      handler(icon) {
        this._icon = calcIcon(icon, THEME_ICON[this.theme]);
      },
      immediate: true,
    },


    link: {
      handler(v) {
        const _link = isObject(v) ? { ...v } : { content: v };
        this._link = _link;
      },
      immediate: true,
    },

    closeBtn: {
      handler(v) {
        this._closeBtn = calcIcon(v, 'close');
      },
      immediate: true,
    },
  },
  mounted() {
    this.memoInitialData();
  },
  beforeUnMount() {
    this.clearMessageAnimation();
  },
  methods: {
    getMessageStyles,
    /** 记录组件设置的项目 */
    memoInitialData() {
      this.initialData = {
        ...rawData,
        ...messageDefaultData,
        animation: [],
      };
    },

    resetData(cb) {
      const { initialData = {} } = this;
      Object.keys(initialData).forEach((key) => {
        this[key] = initialData[key];
      });
      setTimeout(cb);
    },

    /** 检查是否需要开启一个新的动画循环 */
    checkAnimation() {
      const { innerMarquee } = this;
      if (!innerMarquee || innerMarquee.loop === 0) {
        return;
      }

      const speeding = innerMarquee.speed;

      if (this.loop > 0) {
        this.loop -= 1;
      } else if (this.loop === 0) {
      // 动画回到初始位置
        this.animation = this.resetAnimation
          .translateX(0)
          .step()
          .export();
        return;
      }

      if (this.nextAnimationContext) {
        this.clearMessageAnimation();
      }

      const warpID = `#${name}__text-wrap`;
      const nodeID = `#${name}__text`;
      Promise.all([getRect(this, nodeID), getRect(this, warpID)]).then(([nodeRect, wrapRect]) => {
        this.animation = this.resetAnimation.translateX(wrapRect.width).step()
          .export();

        setTimeout(() => {
          const durationTime = ((nodeRect.width + wrapRect.width) / speeding) * 1000;
          const nextAnimation = uni
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
            this.nextAnimationContext = setTimeout(this.checkAnimation.bind(this), durationTime);
            this.animation = nextAnimation;
          }, 20);
        });
      });
    },

    /** 清理动画循环 */
    clearMessageAnimation() {
      clearTimeout(this.nextAnimationContext);
      this.nextAnimationContext = 0;
    },

    show(offsetHeight = 0) {
      const { duration, innerMarquee, offset, id } = this;
      this.visible = true;
      this.loop = innerMarquee.loop || this.loop;
      this.fadeClass = `${name}__fade`;
      this.wrapTop = unitConvert(offset[0]) + offsetHeight;

      this.reset();
      setTimeout(() => {
        this.checkAnimation();
      });

      if (duration && duration > 0) {
        this.closeTimeoutContext = setTimeout(() => {
          this.hide();
          this.$emit('duration-end', { self: this });
        }, duration);
      }
      const wrapID = id ? `#${id}` : `#${name}`;

      setTimeout(() => {
        getRect(this, wrapID)
          .then((wrapRect) => {
            this.height = wrapRect.height;
            setTimeout(() => {
              this.fadeClass = '';
            });
          })
          .catch(() => {
          });
      });
    },

    hide() {
      this.reset();
      this.fadeClass = `${name}__fade`;

      setTimeout(() => {
        this.visible = false;
        this.animation = [];
      }, SHOW_DURATION);
      if (typeof this.onHide === 'function') {
        this.onHide();
      }
    },

    // 重置定时器
    reset() {
      if (this.nextAnimationContext) {
        this.clearMessageAnimation();
      }
      clearTimeout(this.closeTimeoutContext);
      this.closeTimeoutContext = 0;
    },

    handleClose() {
      this.hide();
      this.$emit('close-btn-click');
    },

    handleLinkClick() {
      this.$emit('link-click');
    },
  },
});
</script>
<style scoped>
@import './message-item.css';
</style>
