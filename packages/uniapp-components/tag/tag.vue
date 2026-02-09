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
        v-if="innerIcon"
        name="icon"
      >
        <t-icon
          :custom-style="innerIcon.style || ''"
          :t-class="prefix + '-icon'"
          :prefix="innerIcon.prefix"
          :name="innerIcon.name"
          :size="innerIcon.size"
          :color="innerIcon.color"
          :aria-hidden="!!innerIcon.ariaHidden"
          :aria-label="innerIcon.ariaLabel"
          :aria-role="innerIcon.ariaRole"
        />
      </block>
      <slot name="icon" />
    </view>
    <view :class="classPrefix + '__text'">
      <slot />
    </view>
    <block
      v-if="innerClosable"
      name="icon"
    >
      <t-icon
        :custom-style="innerClosable.style || ''"
        :t-class="classPrefix + '__icon-close ' + prefix + '-icon'"
        :prefix="innerClosable.prefix"
        :name="innerClosable.name"
        :size="innerClosable.size"
        :color="innerClosable.color"
        :aria-hidden="!!innerClosable.ariaHidden"
        :aria-label="innerClosable.ariaLabel || '关闭'"
        :aria-role="innerClosable.ariaRole"
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
import TIcon from '.././icon/icon';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { classNames, calcIcon } from '../common/utils';
import { isNumeric } from '../common/validator';
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
    TIcon,
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

      innerIcon: null,
      innerClosable: null,
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
        this.innerIcon = calcIcon(s);
      },
      immediate: true,
    },
    closable: {
      handler(s) {
        this.setClass();
        this.innerClosable = calcIcon(s, 'close');
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
      const width = isNumeric(maxWidth) ? `${maxWidth}px` : maxWidth;
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
<style scoped src="./tag.css"></style>
