<template>
  <view
    :class="tClass + ' ' + classPrefix"
    :style="tools._style([customStyle])"
    data-key="cell"
    :opened="state.opened"
    :left-width="state.leftWidth"
    :right-width="state.rightWidth"
    @click="onTap"
    @touchstart="parseEventDynamicCode($event, disabled || 'startDrag')"
    @touchmove="parseEventDynamicCode($event, skipMove ? '' : disabled || 'onDrag')"
    @touchend="parseEventDynamicCode($event, skipMove ? '' : disabled || 'endDrag')"
    @touchcancel="parseEventDynamicCode($event, disabled || 'endDrag')"
  >
    <view
      id="wrapper"
      ref="wrapper"
      :style="wrapperStyle"
    >
      <view
        :class="classPrefix + '__left'"
        data-key="left"
      >
        <slot name="left" />
        <view
          v-for="(item, index) in left"
          :key="index"
          :class="classPrefix + '__content ' + item.className"
          :style="item.style"
          :data-action="item"
          @click.stop="onActionTap(item, 'left')"
        >
          <block
            v-if="item.icon"
          >
            <t-icon
              :custom-style="item.icon.style || ''"
              :t-class="classPrefix + '__icon'"
              :prefix="item.icon.prefix"
              :name="item.icon.name || item.icon"
              :size="item.icon.size"
              :color="item.icon.color"
              :aria-hidden="!!item.icon.ariaHidden"
              :aria-label="item.icon.ariaLabel"
              :aria-role="item.icon.ariaRole"
            />
          </block>

          <text
            v-if="item.text"
            :class="classPrefix + '__text'"
          >
            {{ item.text }}
          </text>
        </view>
      </view>
      <slot />
      <view
        :class="classPrefix + '__right'"
        data-key="right"
      >
        <slot name="right" />
        <view
          v-for="(item, index) in right"
          :key="index"
          :class="classPrefix + '__content ' + item.className"
          :style="item.style"
          :data-action="item"
          @click.stop="onActionTap(item, 'right')"
        >
          <block
            v-if="item.icon"
          >
            <t-icon
              :custom-style="item.icon.style || ''"
              :t-class="classPrefix + '__icon'"
              :prefix="item.icon.prefix"
              :name="item.icon.name || item.icon"
              :size="item.icon.size"
              :color="item.icon.color"
              :aria-hidden="!!item.icon.ariaHidden"
              :aria-label="item.icon.ariaLabel"
              :aria-role="item.icon.ariaRole"
            />
          </block>

          <text
            v-if="item.text"
            :class="classPrefix + '__text'"
          >
            {{ item.text }}
          </text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import TIcon from '../icon/icon';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { getRect } from '../common/utils';
import { getObserver } from '../common/wechat';
import {
  initLeftWidth,
  initRightWidth,
  startDrag,
  onDrag,
  endDrag,
  onCloseChange,
  onOpenedChange,
} from './computed';
import tools from '../common/utils.wxs';
import { parseEventDynamicCode } from '../common/event/dynamic';

let ARRAY = [];


const name = `${prefix}-swipe-cell`;

const ContainerClass = `.${name}`;

const makeMethods = () => [
  [initLeftWidth, 'initLeftWidth'],
  [initRightWidth, 'initRightWidth'],
  [startDrag, 'startDrag'],
  [onDrag, 'onDrag'],
  [endDrag, 'endDrag'],
  [onCloseChange, 'onCloseChange'],
  [onOpenedChange, 'onOpenedChange'],
].reduce((acc, item) => {
  const func = item[0];
  return {
    ...acc,
    [item[1]](...args) {
      func.call(this, ...args);
    },
  };
}, {});


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
  emits: ['click', 'dragend', 'dragstart'],
  data() {
    return {
      prefix,
      wrapperStyle: '',
      closed: true,
      classPrefix: name,
      skipMove: false,
      tools,

      state: {
        leftWidth: 0,
        rightWidth: 0,
        offset: 0,
        startOffset: 0,
        opened: this.opened,
      },
    };
  },
  watch: {
    left: 'setSwipeWidth',
    right: 'setSwipeWidth',
    'state.leftWidth': 'initLeftWidth',
    'state.rightWidth': 'initRightWidth',
    'state.opened': 'onOpenedChange',
    opened: {
      handler(v) {
        this.state.opened = v;
      },
      immediate: true,
    },
  },
  mounted() {
    ARRAY.push(this);
    this.setSwipeWidth();
  },
  beforeUnMount() {
    ARRAY = ARRAY.filter(e => e !== this);
  },
  methods: {
    ...makeMethods(),
    parseEventDynamicCode,
    setSwipeWidth() {
      Promise.all([getRect(this, `${ContainerClass}__left`), getRect(this, `${ContainerClass}__right`)]).then(([leftRect, rightRect]) => {
        if (leftRect.width === 0 && rightRect.width === 0 && !this._hasObserved) {
          this._hasObserved = true;
          getObserver(this, `.${name}`).then(() => {
            this.setSwipeWidth();
          });
        }
        this.state.leftWidth = leftRect.width;
        this.state.rightWidth = rightRect.width;
      });
    },

    onSkipMove() {
      this.skipMove = true;
    },

    catchMove() {
      this.skipMove = false;
    },

    open() {
      this.state.opened = true;
    },

    close() {
      this.state.opened = false;
    },

    closeOther() {
      ARRAY.filter(item => item !== this).forEach(item => item.close());
    },

    onTap() {
      this.close();
    },

    onActionTap(action, source) {
      this.$emit('click', action, source);
    },
  },
});
</script>
<style scoped>
@import './swipe-cell.css';

</style>
