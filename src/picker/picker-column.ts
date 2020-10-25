import TComponent from '../common/component';
import config from '../common/config';

const itemHeight = 40;
const DEFAULT_DURATION = 200;

const range = function (num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
};

TComponent({
  relations: {
    './picker': {
      type: 'parent',
    },
  },
  // options: {
  //   virtualHost: true,
  // },
  properties: {
    defaultIndex: {
      type: Number,
      value: 0,
    },
    options: {
      type: Array,
      value: [],
      observer(options) {
        const formatter = this.data.formatter || (val => val);
        const optionKey = this.data.optionKey || '';
        const optionList = Array.isArray(options)
          ? options.map(option => formatter(typeof option === 'object' && optionKey ? option[optionKey] : option))
          : [];
        this.setData({
          optionList,
          duration: 0,
          offset: 0,
        });
        // 重置选中的值与下标
        this._selectedIndex = 0;
        // eslint-disable-next-line prefer-destructuring
        this._selectedValue = optionList[0];
      },
    },
    optionKey: {
      type: String,
      value: '',
    },
    formatter: {
      // 无法限制 function ???? 小程序也太坑了吧
      type: null,
    },
  },
  created() {
    this._startY = 0; // touchStart 触摸位置 Y 坐标
    this._startOffset = 0; // touchStart 起始偏移量
  },
  attached() {
    const { defaultIndex, optionList } = this.data;
    this.setData({ offset: -defaultIndex * itemHeight });
    // 当前选中的值与下标
    this._selectedIndex = defaultIndex;
    this._selectedValue = optionList[defaultIndex];
  },
  data: {
    prefix: `${config.prefix}-picker-column`,
    optionList: [],
    offset: 0, // 滚动偏移量
    duration: 0, // 滚动动画延迟
  },
  methods: {
    onTouchStart(event) {
      this._startY = event.touches[0].clientY;
      this._startOffset = this.data.offset;
      this.setData({ duration: 0 });
    },

    onTouchMove(event) {
      const { _startY, _startOffset } = this;
      // 偏移增量
      const deltaY = event.touches[0].clientY - _startY;
      this.setData({
        offset: range(_startOffset + deltaY, -(this.getCount() * itemHeight), itemHeight),
      });
    },

    onTouchEnd() {
      const { _startOffset, _selectedIndex } = this;
      const { offset, optionList } = this.data;

      if (offset === _startOffset) {
        return;
      }
      // 调整偏移量
      const index = range(Math.round(-offset / itemHeight), 0, this.getCount() - 1);
      this.setData({
        duration: DEFAULT_DURATION,
        offset: -index * itemHeight,
      });

      if (index === _selectedIndex) {
        return;
      }
      wx.nextTick(() => {
        const changeObj = {
          index,
          value: optionList[index],
        };
        this._selectedIndex = index;
        this._selectedValue = optionList[index];
        this.triggerEvent('change', changeObj);
        const picker = this.getRelationNodes('./picker')?.[0];
        if (picker) {
          picker.triggerChange({
            ...changeObj,
            column: this.dataset.index || 0,
          });
        }
      });
    },

    getCount() {
      return this.data.options.length;
    },
  },
});
