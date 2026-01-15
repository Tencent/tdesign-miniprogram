<template>
  <view
    :style="tools._style([
      customStyle,
      show ? '' : 'display: none',
      inheritColor ? 'color: inherit' : ''
    ])"
    :class="[
      tClass,
      classPrefix +
        ' ' + (classPrefix + '--' + layout) +
        ' ' + (fullscreen ? classPrefix + '--fullscreen' : '')
    ]"
  >
    <view
      v-if="indicator"
      :class="[
        tClassIndicator,
        classPrefix + '__spinner ' +
          classPrefix + '__spinner--' + theme + ' ' + (reverse ? 'reverse' : '')
      ]"
      :style="
        'width: ' +tools.addUnit(size) +
          '; height: ' + tools.addUnit(size) +
          '; ' + (inheritColor ? 'color: inherit;' : '') +
          ' ' + (indicator ? '' : 'display: none;') +
          ' ' + (duration ? 'animation-duration: ' + duration / 1000 + 's;' : '') +
          ' animation-play-state: ' + (pause ? 'paused' : 'running') +
          ';'
      "
      :aria-role="ariaRole || 'img'"
      :aria-label="ariaLabel || text || '加载中'"
    >
      <template
        v-if="theme === 'spinner'"
      >
        <view
          v-for="(item, index) in 12"
          :key="index"
          :class="classPrefix + '__dot ' + classPrefix + '__dot-' + index"
        />
      </template>

      <view
        v-if="theme === 'circular'"
        :class="classPrefix + '__circular'"
      />
      <block v-if="theme === 'dots'">
        <view
          :class="classPrefix + '__dot'"
          :style="
            (duration ? 'animation-duration: ' + duration / 1000 + 's; animation-delay:' + 0 + 's;' : '') +
              ' animation-play-state: ' +
              (pause ? 'paused' : 'running') +
              ';'
          "
        />
        <view
          :class="classPrefix + '__dot'"
          :style="
            (duration ? 'animation-duration: ' + duration / 1000 + 's; animation-delay:' + (duration * 1) / 3000 + 's;' : '') +
              ' animation-play-state: ' +
              (pause ? 'paused' : 'running') +
              ';'
          "
        />
        <view
          :class="classPrefix + '__dot'"
          :style="
            (duration ? 'animation-duration: ' + duration / 1000 + 's; animation-delay:' + (duration * 2) / 3000 + 's;' : '') +
              ' animation-play-state: ' +
              (pause ? 'paused' : 'running') +
              ';'
          "
        />
      </block>
      <slot name="indicator" />
    </view>
    <view
      :class="[tools.cls(classPrefix + '__text', [layout]), tClassText]"
      :aria-hidden="indicator"
      :aria-label="ariaLabel || text"
    >
      <block v-if="text">
        {{ text }}
      </block>
      <slot name="text" />
      <slot />
    </view>
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import tools from '../common/utils.wxs';


const name = `${prefix}-loading`;


export default uniComponent({
  name,
  options: {
    multipleSlots: true,
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-text`,
    `${prefix}-class-indicator`,
  ],
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      show: true,
      tools,
    };
  },
  watch: {
    loading: {
      handler(value) {
        const {
          delay,
        } = this;
        if (this.timer) {
          clearTimeout(this.timer);
        }
        if (value && delay) {
          this.timer = setTimeout(() => {
            this.show = value;
            this.timer = null;
          }, delay);
        } else {
          this.show = value;
        }
      },
      immediate: true,
    },
  },
  beforeUnMount() {
    clearTimeout(this.timer);
  },
  methods: {
    refreshPage() {
      this.$emit('reload');
    },
  },
});

</script>
<style src="./loading.css"  scoped>
</style>
