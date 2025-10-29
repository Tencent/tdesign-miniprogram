import { SuperComponent, wxComponent, RelationsOptions, ComponentsOptionsType } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { PickerItemOption } from './type';

const { prefix } = config;
const name = `${prefix}-picker-item`;

// 动画持续时间
const ANIMATION_DURATION = 1000;
// 和上一次move事件间隔小于INERTIA_TIME
const INERTIA_TIME = 300;
// 且距离大于`MOMENTUM_DISTANCE`时，执行惯性滚动
const INERTIA_DISTANCE = 15;

// 虚拟滚动配置
const VIRTUAL_SCROLL_CONFIG = {
  ENABLE_THRESHOLD: 100, // 超过100个选项启用虚拟滚动
  VISIBLE_COUNT: 5, // 可见区域显示5个选项
  BUFFER_COUNT: 3, // 上下各缓冲3个选项
  THROTTLE_TIME: 32, // 节流时间（约30fps）
};

// 性能监控阈值
const PERFORMANCE_THRESHOLD = {
  RENDER_TIME: 500, // 渲染时间超过500ms警告
  OPTIONS_COUNT: 200, // 选项数量超过200警告
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
      linked(parent) {
        if ('keys' in parent.data) {
          const { keys } = parent.data;

          if (keys === null || JSON.stringify(this.data.pickerKeys) === JSON.stringify(keys)) return;

          this.setData({
            pickerKeys: { ...this.data.pickerKeys, ...keys },
          });
        }
      },
    },
  };

  options: ComponentsOptionsType = {
    multipleSlots: true,
  };

  externalClasses = [`${prefix}-class`];

  properties = props;

  observers = {
    'options, pickerKeys'() {
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
    pickerKeys: { value: 'value', label: 'label', icon: 'icon' },
    formatOptions: props.options.value,
    // 虚拟滚动相关
    enableVirtualScroll: false, // 是否启用虚拟滚动
    visibleOptions: [], // 可见的选项列表
    virtualStartIndex: 0, // 虚拟滚动起始索引
    virtualOffsetY: 0, // 虚拟滚动偏移量
    totalHeight: 0, // 总高度（用于占位）
  };

  lifetimes = {
    created() {
      this.StartY = 0;
      this.StartOffset = 0;
      this.startTime = 0;
      this._moveTimer = null;
      this._renderStartTime = 0; // 性能监控：渲染开始时间
    },
    attached() {
      // 性能监控：记录渲染开始时间
      this._renderStartTime = Date.now();
    },
    ready() {
      // 性能监控：计算渲染耗时
      const renderTime = Date.now() - this._renderStartTime;
      const optionsCount = this.getCount();

      if (renderTime > PERFORMANCE_THRESHOLD.RENDER_TIME) {
        console.warn(`[TDesign Picker] 渲染耗时过长: ${renderTime}ms, 选项数量: ${optionsCount}`);
      }

      if (optionsCount > PERFORMANCE_THRESHOLD.OPTIONS_COUNT) {
        console.warn(`[TDesign Picker] 选项数量过多 (${optionsCount})，已自动启用虚拟滚动优化`);
      }
    },
  };

  methods = {
    onClickItem(event: WechatMiniprogram.TouchEvent) {
      const { index: clickIndex } = event.currentTarget.dataset;
      const { pickItemHeight } = this.data;
      const index = range(clickIndex, 0, this.getCount() - 1);

      if (index !== this._selectedIndex) {
        this.setData({ offset: -index * pickItemHeight, curIndex: index, duration: 200 });
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
      const { pickItemHeight, enableVirtualScroll } = this.data;
      // 偏移增量
      const deltaY = event.touches[0].clientY - StartY;
      const newOffset = range(StartOffset + deltaY, -(this.getCount() * pickItemHeight), 0);

      // 优化节流策略：统一使用更激进的节流
      if (!this._moveTimer) {
        this.setData({ offset: newOffset });

        // 虚拟滚动：更新可见范围
        if (enableVirtualScroll) {
          this.updateVisibleOptions(newOffset);
        }

        this._moveTimer = setTimeout(() => {
          this._moveTimer = null;
        }, VIRTUAL_SCROLL_CONFIG.THROTTLE_TIME);
      }
    },

    onTouchEnd(event) {
      if (this._moveTimer) {
        clearTimeout(this._moveTimer);
        this._moveTimer = null;
      }

      const { offset, pickItemHeight } = this.data;
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
      this.setData({
        offset: -index * pickItemHeight,
        duration: ANIMATION_DURATION,
        curIndex: index,
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
      const { columnIndex, pickerKeys, formatOptions } = this.data;
      this._selectedIndex = index;
      this._selectedValue = formatOptions[index]?.[pickerKeys?.value];
      this._selectedLabel = formatOptions[index]?.[pickerKeys?.label];

      if (trigger) {
        this.$parent?.triggerColumnChange({
          index,
          column: columnIndex,
        });
      }
    },

    // 刷新选中状态
    update() {
      const { options, value, pickerKeys, pickItemHeight, format, columnIndex } = this.data;

      const formatOptions = this.formatOption(options, columnIndex, format);
      const optionsCount = formatOptions.length;

      // 判断是否启用虚拟滚动
      const enableVirtualScroll = optionsCount >= VIRTUAL_SCROLL_CONFIG.ENABLE_THRESHOLD;

      // 大数据量优化：使用 Map 快速查找索引
      let index: number = -1;
      if (optionsCount > 500) {
        // 构建临时 Map（只在查找时构建，不缓存）
        const valueMap = new Map<any, number>(formatOptions.map((item, idx) => [item[pickerKeys?.value], idx]));
        index = valueMap.get(value) ?? -1;
      } else {
        index = formatOptions.findIndex((item: PickerItemOption) => item[pickerKeys?.value] === value);
      }
      const selectedIndex = index > 0 ? index : 0;

      const updateData: any = {
        formatOptions,
        offset: -selectedIndex * pickItemHeight,
        curIndex: selectedIndex,
        enableVirtualScroll,
        totalHeight: optionsCount * pickItemHeight,
      };

      // 如果启用虚拟滚动，计算可见选项
      if (enableVirtualScroll) {
        const visibleRange = this.computeVirtualRange(-selectedIndex * pickItemHeight, optionsCount, pickItemHeight);
        updateData.visibleOptions = formatOptions.slice(visibleRange.startIndex, visibleRange.endIndex);
        updateData.virtualStartIndex = visibleRange.startIndex;
        updateData.virtualOffsetY = visibleRange.startIndex * pickItemHeight;
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
     */
    computeVirtualRange(offset: number, totalCount: number, itemHeight: number) {
      const scrollTop = Math.abs(offset);
      const { VISIBLE_COUNT, BUFFER_COUNT } = VIRTUAL_SCROLL_CONFIG;

      // 计算起始索引（减去缓冲区）
      const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - BUFFER_COUNT);
      // 计算结束索引（加上可见数量和缓冲区）
      const endIndex = Math.min(totalCount, startIndex + VISIBLE_COUNT + BUFFER_COUNT * 2);

      return { startIndex, endIndex };
    },

    /**
     * 更新虚拟滚动的可见选项
     * @param offset 当前滚动偏移量（可选，不传则使用 data.offset）
     */
    updateVisibleOptions(offset?: number) {
      const { formatOptions, pickItemHeight, enableVirtualScroll } = this.data;

      if (!enableVirtualScroll) return;

      const currentOffset = offset !== undefined ? offset : this.data.offset;
      const visibleRange = this.computeVirtualRange(currentOffset, formatOptions.length, pickItemHeight);

      // 只有当可见范围发生变化时才更新
      if (
        visibleRange.startIndex !== this.data.virtualStartIndex ||
        visibleRange.endIndex !== this.data.virtualStartIndex + this.data.visibleOptions.length
      ) {
        this.setData({
          visibleOptions: formatOptions.slice(visibleRange.startIndex, visibleRange.endIndex),
          virtualStartIndex: visibleRange.startIndex,
          virtualOffsetY: visibleRange.startIndex * pickItemHeight,
        });
      }
    },

    getCount() {
      return this.data?.options?.length;
    },

    getCurrentSelected() {
      const { offset, pickItemHeight, formatOptions, pickerKeys } = this.data;
      const currentIndex = Math.max(0, Math.min(Math.round(-offset / pickItemHeight), this.getCount() - 1));

      return {
        index: currentIndex,
        value: formatOptions[currentIndex]?.[pickerKeys?.value],
        label: formatOptions[currentIndex]?.[pickerKeys?.label],
      };
    },
  };
}
