<template>
  <view
    :style="tools._style([customStyle])"
    :class="tools.cls(classPrefix + '__group', []) + ' ' + tClass"
    @touchstart="onTouchStart"
    @touchmove.stop.prevent="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <view
      :class="classPrefix + '__wrapper'"
      :style="'transition: transform ' + duration + 'ms cubic-bezier(0.215, 0.61, 0.355, 1); transform: translate3d(0, ' + offset + 'px, 0)'"
    >
      <view
        v-for="(option, index) in formatOptions"
        :key="index"
        :class="tools.cls(classPrefix + '__item', [['active', curIndex == index]])"
        :style="'height: ' + pickItemHeight + 'px'"
        :data-index="index"
        @click="onClickItem"
      >
        <text :class="classPrefix + '__item-label'">
          {{ option[pickerKeys.label] }}
        </text>

        <slot :name="'label-suffix--' + index" />
      </view>
    </view>
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import tools from '../common/utils.wxs';
import { ChildrenMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-picker-item`;

// 动画持续时间
const ANIMATION_DURATION = 1000;
// 和上一次move事件间隔小于INERTIA_TIME
const INERTIA_TIME = 300;
// 且距离大于`MOMENTUM_DISTANCE`时，执行惯性滚动
const INERTIA_DISTANCE = 15;

const range = function (num, min, max) {
  return Math.min(Math.max(num, min), max);
};

const momentum = (distance, duration) => {
  let nDistance = distance;
  // 惯性滚动的速度
  const speed = Math.abs(nDistance / duration);
  // 加速度经验值: 0.005
  // 惯性滚动的距离
  nDistance = (speed / 0.005) * (nDistance < 0 ? -1 : 1);
  return nDistance;
};

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
    virtualHost: true,
  },
  externalClasses: [
    `${prefix}-class`,
  ],
  mixins: [
    ChildrenMixin(RELATION_MAP.PickerItem),
  ],
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      offset: 0, // 滚动偏移量
      duration: 0, // 滚动动画延迟
      value: '',
      curIndex: 0,
      columnIndex: 0,
      pickerKeys: { value: 'value', label: 'label', icon: 'icon' },
      formatOptions: props.options.value,
      tools,

      pickItemHeight: undefined,
    };
  },
  watch: {
    options: {
      handler() {
        this.update();
      },
      immediate: true,
    },
    pickerKeys: {
      handler() {
        this.update();
      },
      immediate: true,
    },
  },
  created() {
    this.StartY = 0;
    this.StartOffset = 0;
    this.startTime = 0;
  },
  mounted() {

  },
  methods: {
    innerAfterLinked() {
      const parent = this[RELATION_MAP.PickerItem];

      if ('keys' in parent) {
        const { keys } = parent;

        if (keys === null || JSON.stringify(this.pickerKeys) === JSON.stringify(keys)) return;

        this.pickerKeys = { ...this.pickerKeys, ...keys };
      }
    },
    onClickItem(event) {
      const { index: clickIndex } = event.currentTarget.dataset;
      const { pickItemHeight } = this;
      const index = range(clickIndex, 0, this.getCount() - 1);

      if (index !== this._selectedIndex) {
        this.offset = -index * pickItemHeight;
        this.curIndex = index;
        this.duration = 200;
      }

      this.updateSelected(index, true);
    },

    onTouchStart(event) {
      this.StartY = event.touches[0].clientY;
      this.StartOffset = this.offset;
      this.startTime = Date.now();

      this.duration =  0;
    },

    onTouchMove(event) {
      const { StartY, StartOffset } = this;
      const { pickItemHeight } = this;
      // 偏移增量
      const deltaY = event.touches[0].clientY - StartY;
      const newOffset = range(StartOffset + deltaY, -(this.getCount() * pickItemHeight), 0);

      this.offset = newOffset;
    },

    onTouchEnd(event) {
      const { offset, pickItemHeight } = this;
      const { startTime } = this;
      if (offset === this.StartOffset) {
        return;
      }

      // 判断是否需要惯性滚动
      let distance = 0;
      const move = event.changedTouches[0].clientY - this.StartY;
      const moveTime = Date.now() - startTime;
      if (moveTime < INERTIA_TIME && Math.abs(move) > INERTIA_DISTANCE) {
        distance = momentum(move, moveTime);
      }

      // 调整偏移量
      const newOffset = range(offset + distance, -this.getCount() * pickItemHeight, 0);
      const index = range(Math.round(-newOffset / pickItemHeight), 0, this.getCount() - 1);

      this.offset = -index * pickItemHeight;
      this.duration = ANIMATION_DURATION;
      this.curIndex = index;

      if (index === this._selectedIndex) return;
      this.updateSelected(index, true);
    },

    formatOption(options, columnIndex, format) {
      if (typeof format !== 'function') return options;

      return options.map(ele => format(ele, columnIndex));
    },

    updateSelected(index, trigger) {
      const { columnIndex, pickerKeys, formatOptions } = this;
      this._selectedIndex = index;
      this._selectedValue = formatOptions[index]?.[pickerKeys?.value];
      this._selectedLabel = formatOptions[index]?.[pickerKeys?.label];

      if (trigger) {
        this[RELATION_MAP.PickerItem]?.triggerColumnChange({
          index,
          column: columnIndex,
        });
      }
    },

    // 刷新选中状态
    update() {
      const { options, value, pickerKeys, pickItemHeight, format, columnIndex } = this;

      const formatOptions = this.formatOption(options, columnIndex, format);

      const index = formatOptions.findIndex(item => item[pickerKeys?.value] === value);
      const selectedIndex = index > 0 ? index : 0;

      this.formatOptions = formatOptions;
      this.offset = -selectedIndex * pickItemHeight;
      this.curIndex = selectedIndex;

      setTimeout(() => {
        this.updateSelected(selectedIndex, false);
      }, 20);
    },

    getCount() {
      return this?.options?.length;
    },
  },
});
</script>
<style scoped>
@import './picker-item.css';
</style>
