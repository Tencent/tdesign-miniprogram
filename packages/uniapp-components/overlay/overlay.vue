<template>
  <view>
    <view
      v-if="realVisible && preventScrollThrough"
      :class="prefix + '-overlay ' + transitionClass"
      :style="tools._style([
        '--td-overlay-transition-duration:' + duration + 'ms',
        'z-index:' + _zIndex, 'top:' + distanceTop + 'px',
        computedStyle,
        customStyle
      ])"
      :aria-role="ariaRole || 'button'"
      :aria-label="ariaLabel || '关闭'"
      disable-scroll
      @click.stop="handleClick"
      @touchmove.stop.prevent="noop"
      @transitionend="onTransitionEnd"
    >
      <slot />
    </view>
    <view
      v-else-if="realVisible"
      :class="prefix + '-overlay ' + transitionClass "
      :style="tools._style([
        'z-index:' + _zIndex,
        'top:' + distanceTop + 'px',
        computedStyle,
        customStyle
      ])"
      :aria-role="ariaRole || 'button'"
      :aria-label="ariaLabel || '关闭'"
      @click.stop="handleClick"
      @transitionend="onTransitionEnd"
    >
      <slot />
    </view>
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import transition from '../mixins/transition';
import useCustomNavbar from '../mixins/using-custom-navbar';
import tools from '../common/utils.wxs';


const name = `${prefix}-overlay`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  mixins: [
    transition(),
    useCustomNavbar,
  ],
  props: {
    ...props,
  },
  emits: [
    'click',
    'leaved',
  ],
  data() {
    return {
      prefix,
      classPrefix: name,
      computedStyle: '',
      _zIndex: 11000,
      tools,
    };
  },
  watch: {
    backgroundColor: {
      handler(v) {
        this.computedStyle = v ? `background-color: ${v};` : '';
      },
      immediate: true,
    },
    zIndex: {
      handler(v) {
        if (v !== 0) {
          this._zIndex = v;
        }
      },
      immediate: true,

    },
  },
  methods: {
    handleClick() {
      this.$emit('click', {
        visible: !this.visible,
      });
    },
    noop() {},
  },
});
</script>
<style scoped>
@import './overlay.css';
</style>
