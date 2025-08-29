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
            pickerKeys: keys,
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
    pickerKeys: { value: 'value', label: 'label' },
    formatOptions: props.options.value,
  };

  lifetimes = {
    created() {
      this.StartY = 0;
      this.StartOffset = 0;
      this.startTime = 0;
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
      const { pickItemHeight } = this.data;
      // 偏移增量
      const deltaY = event.touches[0].clientY - StartY;
      const newOffset = range(StartOffset + deltaY, -(this.getCount() * pickItemHeight), 0);
      this.setData({
        offset: newOffset,
      });
    },

    onTouchEnd(event) {
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

      const index = formatOptions.findIndex((item: PickerItemOption) => item[pickerKeys?.value] === value);
      const selectedIndex = index > 0 ? index : 0;

      this.setData(
        {
          formatOptions,
          offset: -selectedIndex * pickItemHeight,
          curIndex: selectedIndex,
        },
        () => {
          this.updateSelected(selectedIndex, false);
        },
      );
    },

    getCount() {
      return this.data?.options?.length;
    },
  };
}
