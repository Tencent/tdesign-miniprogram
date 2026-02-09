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
        v-if="innerIcon"
        name="icon"
      >
        <t-icon
          :custom-style="innerIcon.style || ''"
          :t-class="tClassIcon"
          :prefix="innerIcon.prefix"
          :name="innerIcon.name"
          :size="innerIcon.size"
          :color="innerIcon.color"
          :aria-hidden="!!innerIcon.ariaHidden"
          :aria-label="innerIcon.ariaLabel"
          :aria-role="innerIcon.ariaRole"
          @click="innerIcon.click || ''"
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
import TIcon from '../icon/icon';
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
    TIcon,
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
      this.innerIcon = calcIcon(v, 'backtop');
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
      innerIcon: null,
      hidden: true,
      tools,
    };
  },
});
</script>
<style scoped src="./back-top.css"></style>
