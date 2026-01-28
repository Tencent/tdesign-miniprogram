<template>
  <view>
    <view
      v-if="realVisible"
      :class="tools.cls(classPrefix, [dataDirection, dataTheme, ['with-text', dataMessage]]) + ' ' + tClass + ' ' + transitionClass"
      :style="tools._style(['top:' + (dataPlacement === 'top' ? '25%' : dataPlacement === 'bottom' ? '75%' : '45%'), customStyle])"
      @transitionend="onTransitionEnd"
      @touchstart.stop.prevent="loop"
    >
      <view :class="classPrefix + '__content ' + classPrefix + '__content--' + dataDirection">
        <t-loading
          v-if="isLoading"
          theme="circular"
          :size="dataDirection === 'row' ? '48rpx' : '64rpx'"
          loading
          inherit-color
          layout="vertical"
        />
        <block
          v-else-if="_icon"
          name="icon"
        >
          <t-icon
            :custom-style="_icon.style || ''"
            :t-class="iconTClass"
            :class="iconClass"
            :prefix="_icon.prefix"
            :name="_icon.name"
            :size="_icon.size"
            :color="_icon.color"
            :aria-hidden="true"
            :aria-label="_icon.ariaLabel"
            :aria-role="_icon.ariaRole"
          />
        </block>
        <slot name="icon" />
        <view
          aria-role="alert"
          :class="classPrefix + '__text ' + classPrefix + '__text--' + dataDirection"
        >
          {{ dataMessage }}
        </view>
        <slot name="message" />
      </view>
    </view>
    <t-overlay
      :custom-style="(overlayProps && overlayProps.style) || ''"
      :visible="visible && (showOverlay || dataPreventScrollThrough)"
      :z-index="(overlayProps && overlayProps.zIndex) || 11000"
      :duration="(overlayProps && overlayProps.duration) || 300"
      :using-custom-navbar="(overlayProps && overlayProps.usingCustomNavbar) || usingCustomNavbar"
      :custom-navbar-height="(overlayProps && overlayProps.customNavbarHeight) || customNavbarHeight"
      :background-color="!showOverlay && dataPreventScrollThrough ? 'transparent' : (overlayProps && overlayProps.backgroundColor) || ''"
      :prevent-scroll-through="dataPreventScrollThrough || (overlayProps && overlayProps.preventScrollThrough)"
    />
  </view>
</template>
<script>
import TIcon from '../icon/icon';
import TLoading from '../loading/loading';
import TOverlay from '../overlay/overlay';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { transitionMixins } from '../mixins/transition';
import { calcIcon, toCamel, coalesce } from '../common/utils';
import useCustomNavbar from '../mixins/using-custom-navbar';
import tools from '../common/utils.wxs';
import { canUseVirtualHost } from '../common/version';


const name = `${prefix}-toast`;
const needTransformKeys = [
  'direction',
  'duration',
  'icon',
  'message',
  'placement',
  'preventScrollThrough',
  'theme',
];

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
  ],
  mixins: [transitionMixins, useCustomNavbar],
  components: {
    TIcon,
    TLoading,
    TOverlay,
  },
  props: {
    ...props,
  },
  emits: [
    'leaved',
    'destory',
    'close',
  ],
  data() {
    const info = needTransformKeys.reduce((acc, key) => ({
      ...acc,
      [toCamel(`data-${key}`)]: props[key].default,
    }), {});

    return {
      prefix,
      classPrefix: name,
      _icon: null,
      ...info,

      isLoading: false,
      hideTimer: null,
      tools,
    };
  },

  computed: {
    iconTClass() {
      return canUseVirtualHost() ? this.iconRealClass : '';
    },
    iconClass() {
      return !canUseVirtualHost() ? this.iconRealClass : '';
    },
    iconRealClass() {
      const { classPrefix, dataDirection } = this;
      return `${classPrefix}__icon ${classPrefix}__icon--${dataDirection}`;
    },
  },

  pageLifetimes: {
    hide() {
      this.hide();
    },
  },

  beforeUnMount() {
    this.destroyed();
  },
  methods: {
    show(options) {
      if (this.hideTimer) clearTimeout(this.hideTimer);
      const iconMap = {
        loading: 'loading',
        success: 'check-circle',
        warning: 'error-circle',
        error: 'close-circle',
      };
      const typeMapIcon = iconMap[options?.theme];
      const defaultOptions = {
        direction: props.direction.default,
        duration: props.duration.default,
        icon: props.icon.default,
        message: props.message.default,
        placement: props.placement.default,
        preventScrollThrough: props.preventScrollThrough.default,
        theme: props.theme.default,
        close: null,
      };

      const data = {
        ...defaultOptions,
        ...options,
        realVisible: true,
        isLoading: options?.theme === 'loading',
        _icon: calcIcon(coalesce(typeMapIcon, options.icon)),
      };

      const { duration } = data;

      Object.keys(data).forEach((key) => {
        if (needTransformKeys.includes(key)) {
          this[toCamel(`data-${key}`)] = data[key];
        } else {
          this[key] = data[key];
        }
      });

      if (duration > 0) {
        this.hideTimer = setTimeout(() => {
          this.hide();
        }, duration);
      }
    },

    hide() {
      if (!this.realVisible) return; // 避免重复触发（页面关闭、定时关闭都会触发）
      this.realVisible = false;
      this?.close?.();
      this.$emit('close');
    },

    destroyed() {
      if (this.hideTimer) {
        clearTimeout(this.hideTimer);
        this.hideTimer = null;
      }
      this.$emit('destory');
    },

    loop() {},
  },
});

</script>
<style scoped>
@import './toast.css';
</style>
