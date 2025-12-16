import { SuperComponent, wxComponent, RelationsOptions, ComponentsOptionsType } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { PickerItemOption } from './type';

const { prefix } = config;
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

const range = function (num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
};

const momentum = (distance: number, duration: number) => {
  let nDistance = distance;
  // 惯性滚动的速度
  const speed = Math.abs(nDistance / duration);
  // 加速度经验值: 0.005
  // 惯性滚动的距离
  nDistance = (speed / 0.005) * (nDistance < 0 ? -1 : 1);
  return nDistance;
};

@wxComponent()
export default class PickerItem extends SuperComponent {
  relations: RelationsOptions = {
    '../picker/picker': {
      type: 'parent',
    },
  };

  options: ComponentsOptionsType = {
    multipleSlots: true,
  };

  externalClasses = [`${prefix}-class`];

  properties = props;

  observers = {
    'options, keys'() {
      this.update();
    },
  };

  data = {
    prefix,
    classPrefix: name,
    offset: 0, // 滚动偏移量
    duration: 0, // 滚动动画延迟
    value: '',
    curIndex: 0,
    columnIndex: 0,
    keys: {},
    formatOptions: props.options.value,
    // 虚拟滚动相关
    enableVirtualScroll: false, // 是否启用虚拟滚动
    visibleOptions: [], // 可见的选项列表
    virtualStartIndex: 0, // 虚拟滚动起始索引
    virtualOffsetY: 0, // 虚拟滚动偏移量
    totalHeight: 0, // 总高度（用于占位）

    // 动态属性（由父组件传递）
    itemHeight: 40, // 单个选项高度
    visibleItemCount: 5, // 可视区域内的选项个数
    wrapperPaddingY: 72, // wrapper的上下padding
  };

  lifetimes = {
    created() {
      this.StartY = 0;
      this.StartOffset = 0;
      this.startTime = 0;
      this._moveTimer = null;
      this._animationTimer = null; // 动画期间更新虚拟滚动的定时器
      this._lastOffset = 0; // 上一次的偏移量（用于计算滑动速度）
      this._lastMoveTime = 0; // 上一次移动的时间
      this._scrollDirection = 0; // 滑动方向：1向下，-1向上，0静止
    },
    detached() {
      // 清理定时器，防止内存泄漏
      if (this._moveTimer) {
        clearTimeout(this._moveTimer);
        this._moveTimer = null;
      }
      if (this._animationTimer) {
        clearInterval(this._animationTimer);
        this._animationTimer = null;
      }
    },
  };

  methods = {
    onClickItem(event: WechatMiniprogram.TouchEvent) {
      const { index: clickIndex } = event.currentTarget.dataset;
      const { itemHeight } = this.data;
      const index = range(clickIndex, 0, this.getCount() - 1);

      if (index !== this._selectedIndex) {
        this.setData({ offset: -index * itemHeight, curIndex: index, duration: 200 });
      }

      this.updateSelected(index, true);
    },

    onTouchStart(event) {
      this.StartY = event.touches[0].clientY;
      this.StartOffset = this.data.offset;
      this.startTime = Date.now();
      this.setData({
        duration: 0,
      });
    },

    onTouchMove(event) {
      const { StartY, StartOffset } = this;
      const { itemHeight } = this.data;

      // 偏移增量
      const deltaY = event.touches[0].clientY - StartY;
      const newOffset = range(StartOffset + deltaY, -(this.getCount() - 1) * itemHeight, 0);

      // touchMove 期间只更新 offset，不更新虚拟滚动数据
      // 虚拟滚动数据在 touchEnd 时统一更新，避免频繁 setData 导致掉帧
      this.setData({ offset: newOffset });
    },

    onTouchEnd(event) {
      if (this._moveTimer) {
        clearTimeout(this._moveTimer);
        this._moveTimer = null;
      }

      const { offset, itemHeight, enableVirtualScroll, formatOptions } = this.data;
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

      // 性能优化：合并 setData 调用，一次性更新所有状态
      const updateData: any = {
        offset: finalOffset,
        duration: animationDuration,
        curIndex: index,
      };

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
        const animationEndIndex = Math.min(formatOptions.length, maxIndex + this.data.visibleItemCount + bufferCount);

        updateData.visibleOptions = formatOptions.slice(animationStartIndex, animationEndIndex);
        updateData.virtualStartIndex = animationStartIndex;
        updateData.virtualOffsetY = animationStartIndex * itemHeight;
      }

      this.setData(updateData, () => {
        // 动画结束后，精确更新虚拟滚动视图到最终位置
        if (enableVirtualScroll) {
          const visibleRange = this.computeVirtualRange(finalOffset, formatOptions.length, itemHeight, false);
          this.setData({
            visibleOptions: formatOptions.slice(visibleRange.startIndex, visibleRange.endIndex),
            virtualStartIndex: visibleRange.startIndex,
            virtualOffsetY: visibleRange.startIndex * itemHeight,
          });
        }
      });

      if (index === this._selectedIndex) return;
      this.updateSelected(index, true);
    },

    formatOption(options: PickerItemOption[], columnIndex: number, format: any) {
      if (typeof format !== 'function') return options;

      return options.map((ele: PickerItemOption) => {
        return format(ele, columnIndex);
      });
    },

    updateSelected(index: number, trigger: boolean) {
      const { columnIndex, keys, formatOptions } = this.data;
      this._selectedIndex = index;
      this._selectedValue = formatOptions[index]?.[keys?.value];
      this._selectedLabel = formatOptions[index]?.[keys?.label];

      if (trigger) {
        this.$parent?.triggerColumnChange({
          index,
          column: columnIndex,
        });
      }
    },

    // 刷新选中状态
    update() {
      const { options, value, keys, format, columnIndex, itemHeight, visibleItemCount } = this.data;

      const formatOptions = this.formatOption(options, columnIndex, format);
      const optionsCount = formatOptions.length;

      // 判断是否启用虚拟滚动
      const enableVirtualScroll = optionsCount >= VIRTUAL_SCROLL_CONFIG.ENABLE_THRESHOLD;

      // 大数据量优化：使用 Map 快速查找索引
      let index: number = -1;
      if (optionsCount > 500) {
        // 构建临时 Map（只在查找时构建，不缓存）
        const valueMap = new Map<any, number>(formatOptions.map((item, idx) => [item[keys?.value], idx]));
        index = valueMap.get(value) ?? -1;
      } else {
        index = formatOptions.findIndex((item: PickerItemOption) => item[keys?.value] === value);
      }
      const selectedIndex = index > 0 ? index : 0;

      // 计算wrapper的padding，确保选中项居中显示
      const wrapperPaddingY = ((visibleItemCount - 1) / 2) * itemHeight;

      const updateData: any = {
        formatOptions,
        offset: -selectedIndex * itemHeight,
        curIndex: selectedIndex,
        enableVirtualScroll,
        totalHeight: optionsCount * itemHeight,
        wrapperPaddingY,
      };

      // 如果启用虚拟滚动，计算可见选项
      if (enableVirtualScroll) {
        const visibleRange = this.computeVirtualRange(-selectedIndex * itemHeight, optionsCount, itemHeight);
        updateData.visibleOptions = formatOptions.slice(visibleRange.startIndex, visibleRange.endIndex);
        updateData.virtualStartIndex = visibleRange.startIndex;
        updateData.virtualOffsetY = visibleRange.startIndex * itemHeight;
      } else {
        // 不启用虚拟滚动时，visibleOptions 等于 formatOptions
        updateData.visibleOptions = formatOptions;
        updateData.virtualStartIndex = 0;
        updateData.virtualOffsetY = 0;
      }

      this.setData(updateData, () => {
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
    computeVirtualRange(offset: number, totalCount: number, itemHeight: number, isFastScroll = false) {
      const scrollTop = Math.abs(offset);
      const { BUFFER_COUNT, FAST_SCROLL_BUFFER } = VIRTUAL_SCROLL_CONFIG;
      const { visibleItemCount } = this.data;

      // 根据滑动速度动态调整缓冲区大小
      const dynamicBuffer = isFastScroll ? FAST_SCROLL_BUFFER : BUFFER_COUNT;

      // 根据滑动方向调整缓冲区分配
      // 向上滑动（_scrollDirection = -1）：增加顶部缓冲区
      // 向下滑动（_scrollDirection = 1）：增加底部缓冲区
      const topBuffer = this._scrollDirection === -1 ? dynamicBuffer + 2 : dynamicBuffer;
      const bottomBuffer = this._scrollDirection === 1 ? dynamicBuffer + 2 : dynamicBuffer;

      // 计算当前可见区域的中心索引
      const centerIndex = Math.floor(scrollTop / itemHeight);

      // 计算起始索引（减去顶部缓冲区）
      const startIndex = Math.max(0, centerIndex - topBuffer);
      // 计算结束索引（加上可见数量和底部缓冲区）
      const endIndex = Math.min(totalCount, centerIndex + visibleItemCount + bottomBuffer);

      return { startIndex, endIndex };
    },

    /**
     * 更新虚拟滚动的可见选项
     * @param offset 当前滚动偏移量（可选，不传则使用 data.offset）
     * @param isFastScroll 是否为快速滑动
     */
    updateVisibleOptions(offset?: number, isFastScroll = false) {
      const { formatOptions, itemHeight, enableVirtualScroll } = this.data;

      if (!enableVirtualScroll) return;

      const currentOffset = offset !== undefined ? offset : this.data.offset;
      const visibleRange = this.computeVirtualRange(currentOffset, formatOptions.length, itemHeight, isFastScroll);

      // 只有当可见范围发生变化时才更新
      if (
        visibleRange.startIndex !== this.data.virtualStartIndex ||
        visibleRange.endIndex !== this.data.virtualStartIndex + this.data.visibleOptions.length
      ) {
        this.setData({
          visibleOptions: formatOptions.slice(visibleRange.startIndex, visibleRange.endIndex),
          virtualStartIndex: visibleRange.startIndex,
          virtualOffsetY: visibleRange.startIndex * itemHeight,
        });
      }
    },

    getCount() {
      return this.data?.options?.length;
    },

    getCurrentSelected() {
      const { offset, itemHeight, formatOptions, keys } = this.data;
      const currentIndex = Math.max(0, Math.min(Math.round(-offset / itemHeight), this.getCount() - 1));

      return {
        index: currentIndex,
        value: formatOptions[currentIndex]?.[keys?.value],
        label: formatOptions[currentIndex]?.[keys?.label],
      };
    },
  };
}
