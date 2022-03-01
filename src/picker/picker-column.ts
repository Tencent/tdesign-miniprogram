import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './picker-item-props';

const itemHeight = 80;
const DefaultDuration = 600;

const { windowWidth } = wx.getSystemInfoSync();

const rpx2px = (rpx) => Math.floor((windowWidth * rpx) / 750);

const range = function (num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
};

@wxComponent()
export default class PickerColumn extends SuperComponent {
  relations = {
    './picker': {
      type: 'parent' as 'parent',
    },
  };

  properties = props;

  observers = {
    value(this: PickerColumn) {
      this.updateColumns();
    },
    options(this: PickerColumn) {
      this.updateColumns();
    },
  };

  data = {
    prefix: `${config.prefix}-picker-column`,
    offset: 0, // 滚动偏移量
    duration: 0, // 滚动动画延迟
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
      const { offset } = this.data;
      const { options } = this.properties;

      if (offset === this.StartOffset) {
        return;
      }
      // 调整偏移量
      const index = range(Math.round(-offset / this.itemHeight), 0, this.getCount() - 1);
      this.setData({
        offset: -index * this.itemHeight,
      });

      if (index === this._selectedIndex) {
        return;
      }

      wx.nextTick(() => {
        const changeObj = {
          index,
          value: options[index],
        };

        this._selectedIndex = index;
        this._selectedValue = options[index];
        this.triggerEvent('change', changeObj);

        const picker = this.getRelationNodes('./picker')?.[0];
        if (picker) {
          picker.triggerChange({
            ...changeObj,
            column: this.columnIndex || 0,
          });
        }
      });
    },

    // 刷新选中状态
    updateColumns() {
      const { options, value } = this.properties;

      const index = options.findIndex((item) => item.value === value);
      const selectedIndex = index > 0 ? index : 0;

      this.setData({ offset: -selectedIndex * this.itemHeight });

      this._selectedIndex = selectedIndex;
      this._selectedValue = options[selectedIndex];
    },

    resetOrigin() {
      this.updateColumns();
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
    return Math.abs(touchDeltaY) > itemHeight ? 1.3 * touchDeltaY : touchDeltaY;
  }

  created() {
    this.StartY = 0;
    this.StartOffset = 0;
    this.itemHeight = rpx2px(itemHeight);
  }
}
