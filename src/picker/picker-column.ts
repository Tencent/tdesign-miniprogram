import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './picker-item-props';

const itemHeight = 40;
const DefaultDuration = 200;

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
      const { StartY, StartOffset } = this;
      // 偏移增量
      const deltaY = event.touches[0].clientY - StartY;
      this.setData({
        offset: range(StartOffset + deltaY, -(this.getCount() * itemHeight), 0),
      });
    },

    onTouchEnd() {
      const { offset } = this.data;
      const { options } = this.properties;

      if (offset === this.StartOffset) {
        return;
      }
      // 调整偏移量
      const index = range(Math.round(-offset / itemHeight), 0, this.getCount() - 1);
      this.setData({
        duration: DefaultDuration,
        offset: -index * itemHeight,
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

      this.setData({ offset: -selectedIndex * itemHeight });

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

  created() {
    this.StartY = 0;
    this.StartOffset = 0;
  }
}
