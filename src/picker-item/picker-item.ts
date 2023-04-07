import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-picker-item`;

const itemHeight = 80;
const DefaultDuration = 240;

const { windowWidth } = wx.getSystemInfoSync();

const rpx2px = (rpx) => Math.floor((windowWidth * rpx) / 750);

const range = function (num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
};

@wxComponent()
export default class PickerItem extends SuperComponent {
  relations: RelationsOptions = {
    '../picker/picker': {
      type: 'parent',
      linked(parent) {
        if ('keys' in parent.data) {
          const { keys } = parent.data;

          this.setData({
            labelAlias: keys?.label || 'label',
            valueAlias: keys?.value || 'value',
          });
        }
      },
    },
  };

  externalClasses = [`${prefix}-class`];

  properties = props;

  observers = {
    options(this: PickerItem) {
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
    labelAlias: 'label',
    valueAlias: 'value',
  };

  methods = {
    onTouchStart(event) {
      this.StartY = event.touches[0].clientY;
      this.StartOffset = this.data.offset;
      this.setData({ duration: 0 });
    },

    onTouchMove(event) {
      const { StartY, StartOffset, itemHeight } = this;

      // touch偏移增量
      const touchDeltaY = event.touches[0].clientY - StartY;
      const deltaY = this.calculateViewDeltaY(touchDeltaY);

      this.setData({
        offset: range(StartOffset + deltaY, -(this.getCount() * itemHeight), 0),
        duration: DefaultDuration,
      });
    },

    onTouchEnd() {
      const { offset, labelAlias, valueAlias } = this.data;
      const { options } = this.properties;

      if (offset === this.StartOffset) {
        return;
      }
      // 调整偏移量
      const index = range(Math.round(-offset / this.itemHeight), 0, this.getCount() - 1);
      this.setData({
        curIndex: index,
        offset: -index * this.itemHeight,
      });

      if (index === this._selectedIndex) {
        return;
      }

      wx.nextTick(() => {
        this._selectedIndex = index;
        this._selectedValue = options[index]?.[valueAlias];
        this._selectedLabel = options[index]?.[labelAlias];
        this.$parent?.triggerColumnChange({
          index,
          column: this.columnIndex || 0,
        });
      });
    },

    // 刷新选中状态
    update() {
      const { options, value, labelAlias, valueAlias } = this.data;

      const index = options.findIndex((item) => item[valueAlias] === value);
      const selectedIndex = index > 0 ? index : 0;

      this.setData({
        offset: -selectedIndex * this.itemHeight,
        curIndex: selectedIndex,
      });

      this._selectedIndex = selectedIndex;
      this._selectedValue = options[selectedIndex]?.[valueAlias];
      this._selectedLabel = options[selectedIndex]?.[labelAlias];
    },

    resetOrigin() {
      this.update();
    },

    getCount() {
      return this.data?.options?.length;
    },
  };

  /**
   * 将屏幕滑动距离换算为视图偏移量 模拟渐进式滚动
   * @param touchDeltaY 屏幕滑动距离
   */
  calculateViewDeltaY(touchDeltaY: number): number {
    return Math.abs(touchDeltaY) > itemHeight ? 1.2 * touchDeltaY : touchDeltaY;
  }

  created() {
    this.StartY = 0;
    this.StartOffset = 0;
    this.itemHeight = rpx2px(itemHeight);
  }
}
