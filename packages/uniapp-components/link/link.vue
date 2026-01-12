<template>
  <view>
    <navigator
      :class="className + ' ' + tClass"
      :style="tools._style([customStyle])"
      :target="navigatorProps.target"
      :url="!disabled ? (navigatorProps.url || '') : ''"
      :open-type="navigatorProps.openType || 'navigate'"
      :delta="navigatorProps.delta"
      :app-id="navigatorProps.appId"
      :path="navigatorProps.path"
      :extra-data="navigatorProps.extraData"
      :version="navigatorProps.version"
      :short-link="navigatorProps.shortLink"
      :hover-class="(hover && !disabled && classPrefix + '--hover') + ' ' + tClassHover + ' ' + navigatorProps.hoverClass"
      :hover-stop-propagation="!!navigatorProps.hoverStopPropagation"
      :hover-start-time="navigatorProps.hoverStartTime"
      :hover-stay-time="navigatorProps.hoverStayTime"
      :aria-disabled="disabled"
      @success="onSuccess"
      @fail="onFail"
      @complete="onComplete"
    >
      <view :class="classPrefix + '__prefix-icon ' + tClassPrefixIcon">
        <slot name="prefix-icon" />
        <block
          v-if="_prefixIcon"
          name="icon"
        >
          <t-icon
            :custom-style="_prefixIcon.style || ''"
            :t-class="_prefixIcon.tClass"
            :prefix="_prefixIcon.prefix"
            :name="_prefixIcon.name"
            :size="_prefixIcon.size"
            :color="_prefixIcon.color"
            :aria-hidden="true"
            :aria-label="_prefixIcon.ariaLabel"
            :aria-role="_prefixIcon.arialRole"
            @click="_suffixIcon.click || ''"
          />
        </block>
      </view>
      <view :class="classPrefix + '__content ' + tClassContent">
        <block v-if="content">
          {{ content }}
        </block>
        <slot name="content" />
        <slot />
      </view>
      <view :class="classPrefix + '__suffix-icon ' + tClassSuffixIcon">
        <slot name="suffix-icon" />
        <block
          v-if="_suffixIcon"
          name="icon"
        >
          <t-icon
            :custom-style="_suffixIcon.style || ''"
            :t-class="_suffixIcon.tClass"
            :prefix="_suffixIcon.prefix || ''"
            :name="_suffixIcon.name"
            :size="_suffixIcon.size"
            :color="_suffixIcon.color"
            :aria-hidden="true"
            :aria-label="_suffixIcon.ariaLabel"
            :aria-role="_suffixIcon.arialRole"
            @click="_suffixIcon.click || ''"
          />
        </block>
      </view>
    </navigator>
  </view>
</template>
<script>
import tIcon from '../icon/icon';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { calcIcon, coalesce } from '../common/utils';
import tools from '../common/utils.wxs';


const name = `${prefix}-link`;

export default uniComponent({
  name,
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-hover`,
    `${prefix}-class-prefix-icon`,
    `${prefix}-class-content`,
    `${prefix}-class-suffix-icon`,
  ],
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tIcon,
  },
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      tools,
      _prefixIcon: null,
      _suffixIcon: null,
      className: '',
    };
  },
  watch: {
    prefixIcon: {
      handler(value) {
        this._prefixIcon = calcIcon(value);
      },
      immediate: true,
    },
    suffixIcon: {
      handler(value) {
        this._suffixIcon = calcIcon(value);
      },
      immediate: true,
    },
    theme: 'setClass',
    disabled: 'setClass',
    size: 'setClass',
    underline: 'setClass',
    navigatorProps: 'setClass',
  },
  mounted() {
    this.setClass();
  },
  methods: {
    setClass() {
      const { theme, size, underline, navigatorProps, disabled } = this;
      const classList = [name, `${name}--${theme}`, `${name}--${size}`];
      const { url, appId, shortLink, target, openType } = coalesce(navigatorProps, {});
      const condition = !(url || (target === 'miniProgram' && (appId || shortLink)));

      if (underline) {
        classList.push(`${name}--underline`);
      }
      if (
        (Object.keys(navigatorProps).length && condition && !['navigateBack', 'exit'].includes(openType))
        || disabled
      ) {
        classList.push(`${name}--disabled`);
      }

      this.className = classList.join(' ');
    },
    onSuccess(e) {
      this.$emit('success', e);
    },
    onFail(e) {
      this.$emit('fail', e);
    },
    onComplete(e) {
      this.$emit('complete', e);
    },
  },
});
</script>
<style scoped>
@import './link.css';

/* #ifdef H5 */
:deep(.navigator-wrap) {
  display: flex;
  align-items: center;
}
/* #endif */
</style>
