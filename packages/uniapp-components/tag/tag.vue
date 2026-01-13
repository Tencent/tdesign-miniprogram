<template>
  <view
    :class="[className + ' ', tClass]"
    :style="tools._style([tagStyle, customStyle])"
    @click="handleClick"
  >
    <view
      :aria-hidden="true"
      :class="classPrefix + '__icon'"
    >
      <block
        v-if="_icon"
        name="icon"
      >
        <t-icon
          :custom-style="_icon.style || ''"
          :t-class="prefix + '-icon'"
          :prefix="_icon.prefix"
          :name="_icon.name"
          :size="_icon.size"
          :color="_icon.color"
          :aria-hidden="!!_icon.ariaHidden"
          :aria-label="_icon.ariaLabel"
          :aria-role="_icon.ariaRole"
        />
      </block>
      <slot name="icon" />
    </view>
    <view :class="classPrefix + '__text'">
      <slot />
    </view>
    <block
      v-if="_closable"
      name="icon"
    >
      <t-icon
        :custom-style="_closable.style || ''"
        :t-class="classPrefix + '__icon-close ' + prefix + '-icon'"
        :prefix="_closable.prefix"
        :name="_closable.name"
        :size="_closable.size"
        :color="_closable.color"
        :aria-hidden="!!_closable.ariaHidden"
        :aria-label="_closable.ariaLabel || '关闭'"
        :aria-role="_closable.ariaRole"
        @click="handleClose"
      />
    </block>
    <slot
      v-else
      name="closable"
    />
  </view>
</template>
<script>
import tIcon from '.././icon/icon';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { classNames, calcIcon } from '../common/utils';
import { isNumber } from '../common/validator';
import tools from '../common/utils.wxs';


const name = `${prefix}-tag`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
  ],
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
      className: '',
      tagStyle: '',
      tools,

      _icon: null,
      _closable: null,
    };
  },
  watch: {
    size: 'setClass',
    shape: 'setClass',
    theme: 'setClass',
    variant: 'setClass',
    disabled: 'setClass',
    maxWidth: 'setTagStyle',
    icon: {
      handler(s) {
        this._icon = calcIcon(s);
      },
      immediate: true,
    },
    closable: {
      handler(s) {
        this.setClass();
        this._closable = calcIcon(s, 'close');
      },
      immediate: true,
    },
  },
  mounted() {
    this.setClass();
    this.setTagStyle();
  },
  methods: {
    setClass() {
      const { prefix, classPrefix } = this;
      const { size, shape, theme, variant, closable, disabled } = this;
      const tagClass = [
        classPrefix,
        `${classPrefix}--${theme || 'default'}`,
        `${classPrefix}--${variant}`,
        closable ? `${classPrefix}--closable ${prefix}-is-closable` : '',
        disabled ? `${classPrefix}--disabled ${prefix}-is-disabled` : '',
        `${classPrefix}--${size}`,
        `${classPrefix}--${shape}`,
      ];
      const className = classNames(tagClass);
      this.className = className;
    },

    setTagStyle() {
      const { maxWidth } = this;
      if (!maxWidth) {
        return '';
      }
      const width = isNumber(maxWidth) ? `${maxWidth}px` : maxWidth;
      this.tagStyle = `max-width:${width};`;
    },

    handleClick(e) {
      if (this.disabled) return;
      this.$emit('click', { e });
    },

    handleClose(e) {
      if (this.disabled) return;
      this.$emit('close', { e });
    },
  },
});

</script>
<style scoped>
@import './tag.css';

</style>
