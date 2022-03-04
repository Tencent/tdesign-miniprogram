var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './picker-item-props';
const itemHeight = 80;
const DefaultDuration = 600;
const { windowWidth } = wx.getSystemInfoSync();
const rpx2px = (rpx) => Math.floor((windowWidth * rpx) / 750);
const range = function (num, min, max) {
    return Math.min(Math.max(num, min), max);
};
let PickerColumn = class PickerColumn extends SuperComponent {
    constructor() {
        super(...arguments);
        this.relations = {
            './picker': {
                type: 'parent',
            },
        };
        this.properties = props;
        this.observers = {
            value() {
                this.updateColumns();
            },
            options() {
                this.updateColumns();
            },
        };
        this.data = {
            prefix: `${config.prefix}-picker-column`,
            offset: 0,
            duration: 0, // 滚动动画延迟
        };
        this.methods = {
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
                    var _a;
                    const changeObj = {
                        index,
                        value: options[index],
                    };
                    this._selectedIndex = index;
                    this._selectedValue = options[index];
                    this.triggerEvent('change', changeObj);
                    const picker = (_a = this.getRelationNodes('./picker')) === null || _a === void 0 ? void 0 : _a[0];
                    if (picker) {
                        picker.triggerChange(Object.assign(Object.assign({}, changeObj), { column: this.columnIndex || 0 }));
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
                var _a, _b;
                return (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.length;
            },
        };
    }
    /**
     * 将屏幕滑动距离换算为视图偏移量 模拟渐进式滚动
     * @param touchDeltaY 屏幕滑动距离
     */
    calculateViewDeltaY(touchDeltaY) {
        return Math.abs(touchDeltaY) > itemHeight ? 1.2 * touchDeltaY : touchDeltaY;
    }
    created() {
        this.StartY = 0;
        this.StartOffset = 0;
        this.itemHeight = rpx2px(itemHeight);
    }
};
PickerColumn = __decorate([
    wxComponent()
], PickerColumn);
export default PickerColumn;

//# sourceMappingURL=picker-column.js.map
