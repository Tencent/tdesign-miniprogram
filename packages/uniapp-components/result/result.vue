<template>
  <view
    :style="tools._style([customStyle])"
    :class="[
      classPrefix + ' ' + classPrefix + '--theme-' + theme,
      tClass
    ]"
  >
    <view
      :aria-hidden="true"
      :class="classPrefix + '__thumb'"
    >
      <t-image
        v-if="image"
        :t-class="tClassImage"
        :src="image"
        mode="aspectFit"
      />
      <block
        v-else-if="_icon"
        name="icon"
      >
        <t-icon
          :custom-style="_icon.style || ''"
          :t-class="classPrefix + '__icon ' + classPrefix + '__icon--' + (_icon.activeIdx == _icon.index ? 'active ' : ' ')"
          :prefix="_icon.prefix"
          :name="_icon.name"
          :size="_icon.size"
          :color="_icon.color"
          :aria-hidden="!!_icon.ariaHidden"
          :aria-label="_icon.ariaLabel"
          :aria-role="_icon.ariaRole"
        />
      </block>
      <slot name="image" />
    </view>
    <view
      :class="[
        classPrefix + '__title ',
        tClassTitle
      ]"
    >
      <block v-if="title">
        {{ title }}
      </block>
      <slot name="title" />
    </view>
    <view
      :class="[
        classPrefix + '__description ',
        tClassDescription
      ]"
    >
      <block v-if="description">
        {{ description }}
      </block>
      <slot name="description" />
    </view>
  </view>
</template>

<script>
import tIcon from '../icon/icon';
import tImage from '../image/image';
import { uniComponent } from '../common/src/index';
import props from './props';
import { prefix } from '../common/config';
import { calcIcon } from '../common/utils';
import tools from '../common/utils.wxs';


const name = `${prefix}-result`;
const THEME_ICON = {
  default: 'error-circle',
  success: 'check-circle',
  warning: 'error-circle',
  error: 'close-circle',
};


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-image`,
    `${prefix}-class-title`,
    `${prefix}-class-description`,
  ],
  components: {
    tIcon,
    tImage,
  },
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      tools,

      _icon: null,
    };
  },
  watch: {
    icon: 'initIcon',
    theme: 'initIcon',
  },
  mounted() {
    this.initIcon();
  },
  methods: {
    initIcon() {
      const {
        icon,
        theme,
      } = this;
      this._icon = calcIcon(icon, THEME_ICON[theme]);
    },
  },
});
</script>
<style scoped>
@import './result.css';
</style>
