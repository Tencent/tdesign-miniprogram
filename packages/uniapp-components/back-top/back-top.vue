<template>
  <view
    v-if="!hidden"
    :style="tools._style([customStyle])"
    :class="tClass + ' ' + tools.cls(classPrefix, [['fixed', fixed], theme])"
    aria-role="button"
    @click="toTop"
  >
    <view
      :class="classPrefix + '__icon'"
      aria-hidden
    >
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
          :aria-hidden="!!_icon.ariaHidden"
          :aria-label="_icon.ariaLabel"
          :aria-role="_icon.ariaRole"
          @click="_icon.click || ''"
        />
      </block>
    </view>
    <view
      v-if="!!text"
      :class="classPrefix + '__text--' + theme + ' ' + tClassText"
    >
      {{ text }}
    </view>
    <slot />
  </view>
</template>
<script>
import tIcon from '../icon/icon';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { calcIcon } from '../common/utils';
import tools from '../common/utils.wxs';
import { ChildrenMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-back-top`;

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-icon`,
    `${prefix}-class-text`,
  ],
  mixins: [
    ChildrenMixin(RELATION_MAP.BackTop),
  ],
  components: {
    tIcon,
  },
  props: {
    ...props,
  },
  emits: [
    'to-top',
  ],
  watch: {
    icon() {
      this.setIcon();
    },
    scrollTop: {
      handler(value) {
        const { visibilityHeight } = this;
        this.hidden = value < visibilityHeight;
      },
      immediate: true,
    },
  },
  mounted() {
    const { icon } = this;
    this.setIcon(icon);
  },
  methods: {
    setIcon(v) {
      this._icon = calcIcon(v, 'backtop');
    },

    toTop() {
      this.$emit('to-top');
      if (this[RELATION_MAP.BackTop]) {
        this[RELATION_MAP.BackTop]?.scrollToTop();
        this.hidden = true;
      } else {
        uni.pageScrollTo({
          scrollTop: 0,
          duration: 300,
        });
      }
    },
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      _icon: null,
      hidden: true,
      tools,
    };
  },
});
</script>
<style scoped>
@import './back-top.css';
</style>
