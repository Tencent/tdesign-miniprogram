<template>
  <view
    :style="tools._style([customStyle, 'height:' + itemHeight * visibleItemCount + 'px'])"
    :class="tools.cls(classPrefix + '__group', []) + ' ' + tClass"
    @touchstart="onTouchStart"
    @touchmove.stop.prevent="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <view
      :class="classPrefix + '__wrapper'"
      :style="
        'transition: transform ' + duration + 'ms cubic-bezier(0.215, 0.61, 0.355, 1); transform: translate3d(0, ' + offset + 'px, 0); padding: ' + wrapperPaddingY + 'px 0'
      "
    >
      <!-- 虚拟滚动：占位容器（撑开总高度） -->
      <view
        v-if="enableVirtualScroll"
        :style="'height: ' + totalHeight + 'px; position: relative;'"
      >
        <!-- 可见区域（绝对定位） -->
        <view :style="'position: absolute; top: ' + virtualOffsetY + 'px; left: 0; right: 0;'">
          <view
            v-for="(option, index) in visibleOptions"
            :key="index"
            :class="tools.cls(classPrefix + '__item', [['active', curIndex == virtualStartIndex + index]])"
            :style="'height: ' + itemHeight + 'px'"
            :data-index="virtualStartIndex + index"
            @tap="onClickItem"
          >
            <t-icon
              v-if="option[keys.icon]"
              :class="classPrefix + '__item-icon'"
              :name="option[keys.icon]"
            />
            <text :class="classPrefix + '__item-label'">
              {{ option[keys.label] }}
            </text>
            <slot
              v-if="useSlots"
              :name="'label-suffix--' + (virtualStartIndex + index)"
            />
          </view>
        </view>
      </view>

      <!-- 非虚拟滚动：原有实现 -->
      <template v-else>
        <view
          v-for="(option, index) in visibleOptions"
          :key="index"
          :class="tools.cls(classPrefix + '__item', [['active', curIndex == index]])"
          :style="'height: ' + itemHeight + 'px'"
          :data-index="index"
          @click="onClickItem"
        >
          <t-icon
            v-if="option[keys.icon]"
            :class="classPrefix + '__item-icon'"
            :name="option[keys.icon]"
          />
          <text :class="classPrefix + '__item-label'">
            {{ option[keys.label] }}
          </text>
          <slot
            v-if="useSlots"
            :name="'label-suffix--' + index"
          />
        </view>
      </template>
    </view>
  </view>
</template>

<script>
import TIcon from '../icon/icon.vue';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import tools from '../common/utils.wxs';
import { nextTick } from '../common/utils';
import { ChildrenMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-picker-item`;

// 动画持续时间（优化：根据滑动距离动态计算，基础时长降低）
const ANIMATION_DURATION_BASE = 300; // 基础动画时长
const ANIMATION_DURATION_MAX = 600; // 最大动画时长
// 和上一次move事件间隔小于INERTIA_TIME
const INERTIA_TIME = 300;
// 且距离大于`MOMENTUM_DISTANCE`时，执行惯性滚动
const INERTIA_DISTANCE = 15;

// 虚拟滚动配置
const VIRTUAL_SCROLL_CONFIG = {
  ENABLE_THRESHOLD: 100, // 超过100个选项启用虚拟滚动
  // VISIBLE_COUNT: 5, // 可见区域显示5个选项，使用 visibleItemCount 属性代替
  BUFFER_COUNT: 8, // 上下各缓冲8个选项（增加缓冲区，防止快速滑动时空白）
  THROTTLE_TIME: 16, // 节流时间（60fps，提高更新频率）
  FAST_SCROLL_BUFFER: 12, // 快速滑动时的额外缓冲区
  FAST_SCROLL_THRESHOLD: 50, // 判定为快速滑动的速度阈值（px/frame）
};

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
  components: {
    TIcon,
  },
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
    useSlots: {
      type: Boolean,
      value: true,
    },
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
      keys: {},
      formatOptions: props.options.value,
      tools,

      enableVirtualScroll: false,
      visibleOptions: [],
      virtualStartIndex: 0,
      virtualOffsetY: 0,
      totalHeight: 0,
      itemHeight: 40,
      visibleItemCount: 5,
      wrapperPaddingY: 72,
    };
  },
  watch: {
    options: {
      handler() {
        this.update();
      },
      immediate: true,
    },
    keys: {
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
    this._animationTimer = null; // 动画期间更新虚拟滚动的定时器
  },
  mounted() {

  },

  beforeUnMount() {
    // 清理定时器，防止内存泄漏
    if (this._animationTimer) {
      clearInterval(this._animationTimer);
      this._animationTimer = null;
    }
  },

  methods: {
    onClickItem(event) {
      const { index: clickIndex } = event.currentTarget.dataset;
      const { itemHeight } = this;
      const index = range(clickIndex, 0, this.getCount() - 1);

      if (index !== this._selectedIndex) {
        this.offset = -index * itemHeight;
        this.curIndex = index;
        this.duration = 200;
      }

      this.updateSelected(index, true);
    },

    onTouchStart(event) {
      this.StartY = event.touches[0].clientY;
      this.StartOffset = this.offset;
      this.startTime = Date.now();
      this.duration = 0;
    },

    onTouchMove(event) {
      const { StartY, StartOffset } = this;
      const { itemHeight } = this;

      // 偏移增量
      const deltaY = event.touches[0].clientY - StartY;
      const newOffset = range(StartOffset + deltaY, -(this.getCount() - 1) * itemHeight, 0);

      // touchMove 期间只更新 offset，不更新虚拟滚动数据
      // 虚拟滚动数据在 touchEnd 时统一更新，避免频繁 setData 导致掉帧
      this.offset = newOffset;
    },

    onTouchEnd(event) {
      const { offset, itemHeight, enableVirtualScroll, formatOptions } = this;
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
      const newOffset = range(offset + distance, -this.getCount() * itemHeight, 0);
      const index = range(Math.round(-newOffset / itemHeight), 0, this.getCount() - 1);
      const finalOffset = -index * itemHeight;

      // 动态计算动画时长：根据滑动距离调整，距离越大时长越长，但有上限
      const scrollDistance = Math.abs(finalOffset - offset);
      const scrollItems = scrollDistance / itemHeight;
      const animationDuration = Math.min(
        ANIMATION_DURATION_MAX,
        ANIMATION_DURATION_BASE + scrollItems * 30, // 每滑动一个选项增加30ms
      );

      // 判断是否为快速惯性滚动（用于决定缓冲区大小）
      const isFastInertia = Math.abs(distance) > itemHeight * 3;
      // 根据是否快速惯性滚动选择缓冲区大小
      const bufferCount = isFastInertia ? VIRTUAL_SCROLL_CONFIG.FAST_SCROLL_BUFFER : VIRTUAL_SCROLL_CONFIG.BUFFER_COUNT;

      // 清除之前的动画更新定时器
      if (this._animationTimer) {
        clearInterval(this._animationTimer);
        this._animationTimer = null;
      }

      // 性能优化：直接赋值更新所有状态
      this.offset = finalOffset;
      this.duration = animationDuration;
      this.curIndex = index;

      // 虚拟滚动：预先计算覆盖动画全程的可见范围，避免动画期间频繁更新
      if (enableVirtualScroll) {
        // 计算当前位置和目标位置的索引范围
        const currentIndex = Math.floor(Math.abs(offset) / itemHeight);
        const targetIndex = index;

        // 计算覆盖动画全程的可见范围（从当前位置到目标位置）
        const minIndex = Math.min(currentIndex, targetIndex);
        const maxIndex = Math.max(currentIndex, targetIndex);

        // 使用缓冲区扩展范围，确保动画过程中不会出现空白
        const animationStartIndex = Math.max(0, minIndex - bufferCount);
        const animationEndIndex = Math.min(formatOptions.length, maxIndex + this.visibleItemCount + bufferCount);

        this.visibleOptions = formatOptions.slice(animationStartIndex, animationEndIndex);
        this.virtualStartIndex = animationStartIndex;
        this.virtualOffsetY = animationStartIndex * itemHeight;

        // 使用 nextTick 确保 DOM 更新后再执行后续操作
        nextTick().then(() => {
          // 动画结束后，精确更新虚拟滚动视图到最终位置
          const visibleRange = this.computeVirtualRange(finalOffset, formatOptions.length, itemHeight, false);
          this.visibleOptions = formatOptions.slice(visibleRange.startIndex, visibleRange.endIndex);
          this.virtualStartIndex = visibleRange.startIndex;
          this.virtualOffsetY = visibleRange.startIndex * itemHeight;
        });
      }

      if (index === this._selectedIndex) return;
      this.updateSelected(index, true);
    },

    formatOption(options, columnIndex, format) {
      if (typeof format !== 'function') return options;

      return options.map(ele => format(ele, columnIndex));
    },

    updateSelected(index, trigger) {
      const { columnIndex, keys, formatOptions } = this;
      this._selectedIndex = index;
      this._selectedValue = formatOptions[index]?.[keys?.value];
      this._selectedLabel = formatOptions[index]?.[keys?.label];

      if (trigger) {
        this[RELATION_MAP.PickerItem]?.triggerColumnChange({
          index,
          column: columnIndex,
        });
      }
    },

    // 刷新选中状态
    update() {
      const { options, value, keys, format, columnIndex, itemHeight, visibleItemCount } = this;

      const formatOptions = this.formatOption(options, columnIndex, format);
      const optionsCount = formatOptions.length;

      // 判断是否启用虚拟滚动
      const enableVirtualScroll = optionsCount >= VIRTUAL_SCROLL_CONFIG.ENABLE_THRESHOLD;

      // 大数据量优化：使用 Map 快速查找索引
      let index = -1;
      if (optionsCount > 500) {
        // 构建临时 Map（只在查找时构建，不缓存）
        const valueMap = new Map(formatOptions.map((item, idx) => [item[keys?.value], idx]));
        index = valueMap.get(value) ?? -1;
      } else {
        index = formatOptions.findIndex(item => item[keys?.value] === value);
      }
      const selectedIndex = index > 0 ? index : 0;

      // 计算wrapper的padding，确保选中项居中显示
      const wrapperPaddingY = ((visibleItemCount - 1) / 2) * itemHeight;

      // 直接赋值更新所有状态
      this.formatOptions = formatOptions;
      this.offset = -selectedIndex * itemHeight;
      this.curIndex = selectedIndex;
      this.enableVirtualScroll = enableVirtualScroll;
      this.totalHeight = optionsCount * itemHeight;
      this.wrapperPaddingY = wrapperPaddingY;

      // 如果启用虚拟滚动，计算可见选项
      if (enableVirtualScroll) {
        const visibleRange = this.computeVirtualRange(-selectedIndex * itemHeight, optionsCount, itemHeight);
        this.visibleOptions = formatOptions.slice(visibleRange.startIndex, visibleRange.endIndex);
        this.virtualStartIndex = visibleRange.startIndex;
        this.virtualOffsetY = visibleRange.startIndex * itemHeight;
      } else {
        // 不启用虚拟滚动时，visibleOptions 等于 formatOptions
        this.visibleOptions = formatOptions;
        this.virtualStartIndex = 0;
        this.virtualOffsetY = 0;
      }

      nextTick().then(() => {
        this.updateSelected(selectedIndex, false);
      });
    },

    /**
     * 计算虚拟滚动的可见范围
     * @param offset 当前滚动偏移量
     * @param totalCount 总选项数量
     * @param itemHeight 单个选项高度
     * @param isFastScroll 是否为快速滑动
     */
    computeVirtualRange(offset, totalCount, itemHeight, isFastScroll = false) {
      const scrollTop = Math.abs(offset);
      const { BUFFER_COUNT, FAST_SCROLL_BUFFER } = VIRTUAL_SCROLL_CONFIG;
      const { visibleItemCount } = this;

      // 根据滑动速度动态调整缓冲区大小
      const bufferCount = isFastScroll ? FAST_SCROLL_BUFFER : BUFFER_COUNT;

      // 计算当前可见区域的中心索引
      const centerIndex = Math.floor(scrollTop / itemHeight);

      // 计算起始索引（减去缓冲区）
      const startIndex = Math.max(0, centerIndex - bufferCount);
      // 计算结束索引（加上可见数量和缓冲区）
      const endIndex = Math.min(totalCount, centerIndex + visibleItemCount + bufferCount);

      return { startIndex, endIndex };
    },

    /**
     * 更新虚拟滚动的可见选项
     * @param offset 当前滚动偏移量（可选，不传则使用 data.offset）
     * @param isFastScroll 是否为快速滑动
     */
    updateVisibleOptions(offset, isFastScroll = false) {
      const { formatOptions, itemHeight, enableVirtualScroll } = this;

      if (!enableVirtualScroll) return;

      const currentOffset = offset !== undefined ? offset : this.offset;
      const visibleRange = this.computeVirtualRange(currentOffset, formatOptions.length, itemHeight, isFastScroll);

      // 只有当可见范围发生变化时才更新
      if (
        visibleRange.startIndex !== this.virtualStartIndex
        || visibleRange.endIndex !== this.virtualStartIndex + this.visibleOptions.length
      ) {
        this.visibleOptions = formatOptions.slice(visibleRange.startIndex, visibleRange.endIndex);
        this.virtualStartIndex = visibleRange.startIndex;
        this.virtualOffsetY = visibleRange.startIndex * itemHeight;
      }
    },

    getCount() {
      return this.options?.length;
    },

    getCurrentSelected() {
      const { offset, itemHeight, formatOptions, keys } = this;
      const currentIndex = Math.max(0, Math.min(Math.round(-offset / itemHeight), this.getCount() - 1));

      return {
        index: currentIndex,
        value: formatOptions[currentIndex]?.[keys?.value],
        label: formatOptions[currentIndex]?.[keys?.label],
      };
    },
  },
});
</script>
<style scoped>
@import './picker-item.css';
</style>
