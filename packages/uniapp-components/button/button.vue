<template>
  <button
    :id="tId"
    :style="tools._style([customStyle])"
    :data-custom="customDataset"
    :class="className"
    :activity-type="activityType ? activityType : ''"
    :entrance-path="entrancePath"
    :form-type="disabled || loading ? '' : type"
    :open-type="disabled || loading ? '' : openType"
    :hover-stop-propagation="hoverStopPropagation"
    :hover-start-time="hoverStartTime"
    :hover-stay-time="hoverStayTime"
    :lang="lang"
    :need-show-entrance="needShowEntrance"
    :session-from="sessionFrom"
    :hover-class="disabled || loading ? '' : hoverClass || classPrefix + '--hover'"
    :send-message-title="sendMessageTitle"
    :send-message-path="sendMessagePath"
    :send-message-img="sendMessageImg"
    :app-parameter="appParameter"
    :show-message-card="showMessageCard"
    :aria-label="ariaLabel"
    @click.stop.prevent="handleTap"
    @getuserinfo="getuserinfo"
    @contact="contact"
    @getphonenumber="getphonenumber"
    @error="error"
    @opensetting="opensetting"
    @launchapp="launchapp"
    @chooseavatar="chooseavatar"
    @agreeprivacyauthorization="agreeprivacyauthorization"
  >
    <block
      v-if="_icon"
      name="icon"
    >
      <t-icon
        :custom-style="iconCustomStyle"
        :t-class="classPrefix + '__icon ' + classPrefix + '__icon--' + (_icon.activeIdx == _icon.index ? 'active ' : ' ') + tClassIcon"
        :prefix="_icon.prefix"
        :name="_icon.name || ''"
        :size="_icon.size"
        :color="_icon.color"
        @click="'handleClose' || ''"
      />
    </block>
    <t-loading
      v-if="loading"
      :delay="loadingProps.delay || 0"
      :duration="loadingProps.duration || 800"
      :indicator="loadingProps.indicator || true"
      :inherit-color="loadingProps.inheritColor || true"
      :layout="loadingProps.layout || 'horizontal'"
      :pause="loadingProps.pause || false"
      :progress="loadingProps.progress || 0"
      :reverse="loadingProps.reverse || false"
      :size="loadingProps.size || '40rpx'"
      :text="loadingProps.text || ''"
      :theme="loadingProps.theme || 'circular'"
      loading
      :t-class="classPrefix + '__loading ' + classPrefix + '__loading--wrapper'"
      :t-class-indicator="classPrefix + '__loading--indicator ' + tClassLoading"
      :custom-style="loadingCustomStyle"
    />
    <view
      :class="classPrefix + '__content '
        + ((_icon && _icon.name || loading) && content ? classPrefix + '__content--has-icon' : '')"
    >
      <slot name="content" />
      <block v-if="content">
        {{ content }}
      </block>
      <slot />
    </view>
    <slot name="suffix" />
  </button>
</template>
<script>
import TIcon from '../icon/icon';
import TLoading from '../loading/loading';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { calcIcon } from '../common/utils';
import tools from '../common/utils.wxs';


const name = `${prefix}-button`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-icon`,
    `${prefix}-class-loading`,
  ],
  components: {
    TIcon,
    TLoading,
  },
  props: {
    ...props,
  },
  emits: [
    'click',
  ],
  data() {
    return {
      tools,
      prefix,
      className: '',
      classPrefix: name,
      _icon: undefined,
    };
  },
  computed: {
    iconCustomStyle() {
      const fontSize = {
        'extra-small': 'var(--td-button-extra-small-icon-font-size, 18px)',
        small: 'var(--td-button-small-icon-font-size, 18px)',
        medium: 'var(--td-button-medium-icon-font-size, 20px)',
        large: 'var(--td-button-large-icon-font-size, 24px)',
      };

      return tools._style([
        {
          fontSize: fontSize[this.size || 'medium'],
          borderRadius: 'var(--td-button-icon-border-radius, 4px)',
        },
        this._icon.style || '',
      ]);
    },
    loadingCustomStyle() {
      return tools._style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      });
    },
  },
  watch: {
    icon: {
      handler(value) {
        this._icon = calcIcon(value, '');
      },
      immediate: true,
    },
    theme: 'setClass',
    size: 'setClass',
    plain: 'setClass',
    block: 'setClass',
    shape: 'setClass',
    disabled: 'setClass',
    loading: 'setClass',
    variant: 'setClass',
  },
  mounted() {
    this.setClass();
  },
  methods: {
    setClass() {
      const t = [
        name,
        this.tClass,
        `${name}--${this.variant || 'base'}`,
        `${name}--${this.theme || 'default'}`,
        `${name}--${this.shape || 'rectangle'}`,
        `${name}--size-${this.size || 'medium'}`,
      ];
      if (this.block) {
        t.push(`${name}--block`);
      }
      if (this.disabled) {
        t.push(`${name}--disabled`);
      }
      if (this.ghost) {
        t.push(`${name}--ghost`);
      }
      this.className = t.join(' ');
    },
    getuserinfo(t) {
      this.$emit('getuserinfo', t);
    },
    contact(t) {
      this.$emit('contact', t);
    },
    getphonenumber(t) {
      this.$emit('getphonenumber', t);
    },
    error(t) {
      this.$emit('error', t);
    },
    opensetting(t) {
      this.$emit('opensetting', t);
    },
    launchapp(t) {
      this.$emit('launchapp', t);
    },
    chooseavatar(t) {
      this.$emit('chooseavatar', t);
    },
    agreeprivacyauthorization(t) {
      this.$emit('agreeprivacyauthorization', t);
    },
    handleTap(t) {
      if (this.disabled || this.loading) return;
      this.$emit('click', t);
    },
  },
});
</script>
<style scoped>
@import './button.css';

/* #ifdef MP-QQ */
/* 适配 qq 小程序 */
.t-button--outline {
  border-style: solid;
  border-width: 1px;
}
.t-button--ghost {
  border-style: solid;
  border-width: 1px;
}
/* #endif */

/* #ifdef H5 || MP-WEIXIN */
:deep(.t-button__loading) + .t-button__content:not(:empty) {
  margin-left: 4px;
}
:deep(.t-button__icon) + .t-button__content:not(:empty) {
  margin-left: 4px;
}
/* #endif */


.t-button {
  /* support my-alipay */
  margin-left: auto;
  margin-right: auto;
}
</style>
