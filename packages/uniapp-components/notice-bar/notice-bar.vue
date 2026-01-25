<template>
  <view
    v-if="visible"
    :style="tools._style([customStyle])"
    :class="[
      classPrefix + ' ' + classPrefix + '--' + theme,
      tClass
    ]"
  >
    <view
      :class="classPrefix + '__prefix-icon'"
      @click="clickPrefixIcon"
    >
      <slot name="prefix-icon" />
      <block
        v-if="_prefixIcon"
        name="icon"
      >
        <t-icon
          :custom-style="_prefixIcon.style || ''"
          :t-class="tClassPrefixIcon"
          :prefix="_prefixIcon.prefix"
          :name="_prefixIcon.name"
          :size="_prefixIcon.size"
          :color="_prefixIcon.color"
          :aria-hidden="!!_prefixIcon.ariaHidden"
          :aria-label="_prefixIcon.ariaLabel"
          :aria-role="_prefixIcon.ariaRole"
          @click="_prefixIcon.bindclick || ''"
        />
      </block>
    </view>
    <view
      :class="classPrefix + '__content-wrap'"
      @click="clickContent"
    >
      <view v-if="direction === 'vertical' && tools.isArray(content)">
        <swiper
          :autoplay="true"
          :vertical="true"
          :circular="true"
          :interval="interval"
          display-multiple-items="1"
          :class="classPrefix + '__content ' + classPrefix + '__content--vertical'"
          @change="onChange"
        >
          <block
            v-for="(item, index) in content"
            :key="index"
          >
            <swiper-item>
              <view :class="classPrefix + '__content--vertical-item'">
                {{ item }}
              </view>
            </swiper-item>
          </block>
        </swiper>
      </view>
      <view
        v-else
        :class="classPrefix + '__content ' + tClassContent + ' ' + (!marquee ? classPrefix + '__content-wrapable' : '')"
        :animation="animationData"
      >
        <block v-if="content">
          {{ content }}
        </block>
        <slot name="content" />
        <view
          :class="classPrefix + '__operation ' + tClassOperation"
          @click.stop.prevent="clickOperation"
        >
          <block v-if="operation">
            {{ operation }}
          </block>
          <slot name="operation" />
        </view>
      </view>
    </view>
    <view
      :class="classPrefix + '__suffix-icon'"
      @click="clickSuffixIcon"
    >
      <slot name="suffix-icon" />
      <block
        v-if="_suffixIcon"
        name="icon"
      >
        <t-icon
          :custom-style="_suffixIcon.style || ''"
          :t-class="tClassSuffixIcon"
          :prefix="_suffixIcon.prefix"
          :name="_suffixIcon.name"
          :size="_suffixIcon.size"
          :color="_suffixIcon.color"
          :aria-hidden="!!_suffixIcon.ariaHidden"
          :aria-label="_suffixIcon.ariaLabel"
          :aria-role="_suffixIcon.ariaRole"
          @click="_suffixIcon.bindclick || ''"
        />
      </block>
    </view>
  </view>
</template>
<script>
import TIcon from '../icon/icon.vue';
import { uniComponent } from '../common/src/index';
import { getRect, getAnimationFrame, calcIcon } from '../common/utils';
import props from './props';
import { prefix } from '../common/config';
import tools from '../common/utils.wxs';


const name = `${prefix}-notice-bar`;
const THEME_ICON = {
  info: 'info-circle-filled',
  success: 'check-circle-filled',
  warning: 'error-circle-filled',
  error: 'error-circle-filled',
};

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-content`,
    `${prefix}-class-prefix-icon`,
    `${prefix}-class-operation`,
    `${prefix}-class-suffix-icon`,
  ],
  components: {
    TIcon,
  },
  props: {
    ...props,
  },
  emits: [
    'click',
    'change',
  ],
  data() {
    return {
      prefix,
      classPrefix: name,
      loop: -1,
      __ready: false,
      animationData: null,
      tools,
    };
  },
  watch: {
    marquee: {
      handler(val) {
        if (JSON.stringify(val) === '{}' || JSON.stringify(val) === 'true') {
          this.dataMarquee = {
            speed: 50,
            loop: -1,
            delay: 0,
          };
        }
      },
      immediate: true,
    },

    visible: {
      handler(visible) {
        if (!this.__ready) return;
        if (visible) {
          this.show();
        } else {
          this.clearNoticeBarAnimation();
        }
      },
      immediate: true,
    },

    prefixIcon: {
      handler(prefixIcon) {
        this.setPrefixIcon(prefixIcon);
      },
      immediate: true,
    },

    suffixIcon: {
      handler(v) {
        this._suffixIcon = calcIcon(v);
      },
      immediate: true,
    },

    content: {
      handler() {
        if (!this.__ready) return;
        this.clearNoticeBarAnimation();
        this.initAnimation();
      },
      immediate: true,
    },
  },
  created() {
    this.resetAnimation = uni.createAnimation({
      duration: 0,
      timingFunction: 'linear',
    });
  },
  mounted() {
    this.show();
    this.__ready = true;
  },
  beforeUnMount() {
    this.clearNoticeBarAnimation();
  },
  methods: {
    initAnimation() {
      // 获取外部容器和滚动内容的宽度
      const warpID = `.${name}__content-wrap`;
      const nodeID = `.${name}__content`;
      getAnimationFrame(this, () => {
        Promise.all([getRect(this, nodeID), getRect(this, warpID)])
          .then(([nodeRect, wrapRect]) => {
            const { marquee } = this;

            if (nodeRect == null || wrapRect == null || !nodeRect.width || !wrapRect.width || marquee === false) {
              return;
            }

            if (marquee || wrapRect.width < nodeRect.width) {
              const speeding = marquee.speed || 50;
              const delaying = marquee.delay || 0;
              const animationDuration = ((wrapRect.width + nodeRect.width) / speeding) * 1000;
              const firstAnimationDuration = (nodeRect.width / speeding) * 1000;

              this.wrapWidth = Number(wrapRect.width);
              this.nodeWidth = Number(nodeRect.width);
              this.animationDuration = animationDuration;
              this.delay = delaying;
              this.loop = marquee.loop - 1;
              this.firstAnimationDuration = firstAnimationDuration;
              marquee.loop !== 0 && this.startScrollAnimation(true);
            }
          })
          .catch(() => {});
      });
    },

    startScrollAnimation(isFirstScroll = false) {
      this.clearNoticeBarAnimation();

      const { wrapWidth, nodeWidth, firstAnimationDuration, animationDuration, delay } = this;
      const delayTime = isFirstScroll ? delay : 0;
      const durationTime = isFirstScroll ? firstAnimationDuration : animationDuration;
      // 滚动内容: 初始位置
      this.animationData = this.resetAnimation
        .translateX(isFirstScroll ? 0 : wrapWidth)
        .step()
        .export(),

      setTimeout(() => {
        // 滚动内容: 最终位置
        this.animationData = uni
          .createAnimation({ duration: durationTime, timingFunction: 'linear', delay: delayTime })
          .translateX(-nodeWidth)
          .step()
          .export();
      }, 20);

      // 滚动一次完成, 开启下一次的滚动
      this.nextAnimationContext = setTimeout(() => {
        if (this.loop > 0) {
          this.loop -= 1;
          this.startScrollAnimation();
        } else if (this.loop === 0) {
          // 动画回到初始位置
          this.animationData = this.resetAnimation.translateX(0).step()
            .export();
        } else if (this.loop < 0) {
          this.startScrollAnimation();
        }
      }, durationTime + delayTime);
    },

    show() {
      this.clearNoticeBarAnimation();
      this.setPrefixIcon(this.prefixIcon);
      this.initAnimation();
    },

    /** 清除动画 */
    clearNoticeBarAnimation() {
      this.nextAnimationContext && clearTimeout(this.nextAnimationContext);
      this.nextAnimationContext = null;
    },

    setPrefixIcon(v) {
      const { theme } = this;
      this._prefixIcon = calcIcon(v, THEME_ICON[theme]);
    },

    onChange(e) {
      const { current, source } = e.detail;
      this.$emit('change', { current, source });
    },

    clickPrefixIcon() {
      this.$emit('click', { trigger: 'prefix-icon' });
    },

    clickContent() {
      this.$emit('click', { trigger: 'content' });
    },

    clickSuffixIcon() {
      this.$emit('click', { trigger: 'suffix-icon' });
    },

    clickOperation() {
      this.$emit('click', { trigger: 'operation' });
    },
  },
});
</script>
<style scoped>
@import './notice-bar.css';
</style>
