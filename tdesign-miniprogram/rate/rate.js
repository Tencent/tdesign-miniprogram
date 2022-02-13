var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * @Author: rileycai
 * @Date: 2021-09-21 19:01:54
 * @LastEditTime: 2021-11-10 14:30:02
 * @LastEditors: rileycai
 * @Description: Rate组件
 * @FilePath: /tdesign-miniprogram/src/rate/rate.ts
 */
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
const { prefix } = config;
const name = `${prefix}-rate`;
const rpx2px = (() => {
    let systemInfo = null;
    return (rpx) => {
        if (!systemInfo) {
            systemInfo = wx.getSystemInfoSync();
        }
        return (rpx * (systemInfo ? systemInfo.screenWidth : 750)) / 750;
    };
})();
let Rate = class Rate extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = ['t-class', 't-class-icon', 't-class-desc'];
        this.properties = props;
        this.controlledProps = [
            {
                key: 'value',
                event: 'change',
            },
        ];
        this.data = {
            classPrefix: name,
            icon: 'star-filled',
            halfIcon: 'star-filled',
            defaultTexts: ['极差', '失望', '一般', '满意', '惊喜'],
            disabledColor: '#999999',
        };
    }
    onTouch(e) {
        const { count, allowHalf, gap, value: currentValue } = this.properties;
        const [touch] = e.touches;
        const margin = rpx2px(gap);
        const selQuery = this.createSelectorQuery();
        selQuery
            .select(`.${name}__wrapper`)
            .boundingClientRect((rect) => {
            const { width, left } = rect;
            const starWidth = (width - (count - 1) * margin) / count;
            const offsetX = touch.pageX - left;
            const num = (offsetX + margin) / (starWidth + margin);
            const remainder = num % 1;
            const integral = num - remainder;
            let value = remainder <= 0.5 && allowHalf ? integral + 0.5 : integral + 1;
            if (value > count) {
                value = count;
            }
            else if (value < 0) {
                value = 0;
            }
            if (value !== currentValue) {
                this._trigger('change', { value });
            }
        })
            .exec();
    }
};
Rate = __decorate([
    wxComponent()
], Rate);
export default Rate;

//# sourceMappingURL=rate.js.map
