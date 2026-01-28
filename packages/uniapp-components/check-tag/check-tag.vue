<template>
  <view
    :style="tools._style([customStyle])"
    :class="className + ' ' + tClass"
    @click="onClick"
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
      <slot name="content" />
      <block v-if="tools.isArray(content) && content.length == 2">
        {{ dataChecked ? content[0] : content[1] }}
      </block>
      <block v-else>
        {{ content }}
      </block>
    </view>
    <t-icon
      v-if="closable"
      :class="classPrefix + '__icon-close'"
      :t-class="prefix + '-icon'"
      name="close"
      aria-role="button"
      aria-label="关闭"
      @click="onClose"
    />
  </view>
</template>
<script>
import TIcon from '../icon/icon';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { classNames, calcIcon, coalesce } from '../common/utils';
import tools from '../common/utils.wxs';


const name = `${prefix}-tag`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  controlledProps: [{
    key: 'checked',
    event: 'change',
  }],
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
      tools,
      _icon: null,

      dataChecked: coalesce(this.checked, this.defaultChecked),
    };
  },
  watch: {
    size: 'setClass',
    disabled: 'setClass',
    dataChecked: 'setClass',
    icon: {
      handler(e) {
        this._icon = calcIcon(e);
      },
      immediate: true,
    },
    checked: {
      handler(value) {
        this.dataChecked = value;
      },
      immediate: true,
    },
  },
  mounted() {
    this.setClass();
  },
  methods: {
    setClass() {
      const { classPrefix } = this;
      const { size, variant, disabled, dataChecked, shape } = this;
      const tagClass = [
        classPrefix,
        `${classPrefix}--checkable`,
        disabled ? `${classPrefix}--disabled` : '',
        dataChecked ? `${classPrefix}--checked` : '',
        `${classPrefix}--${dataChecked ? 'primary' : 'default'}`,
        `${classPrefix}--${size}`,
        `${classPrefix}--${variant}`,
        `${classPrefix}--${shape}`,
      ];
      const className = classNames(tagClass);
      this.className = className;
    },

    onClick() {
      if (this.disabled) return;
      const { dataChecked } = this;

      this._trigger('click');
      this._trigger('change', { checked: !dataChecked });
    },

    onClose(e) {
      if (this.disabled) return;
      this._trigger('close', e);
    },
  },
});

</script>
<style scoped>
@import './check-tag.css';

</style>
