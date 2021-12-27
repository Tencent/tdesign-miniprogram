var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * 轮播条目组件
 */
import { SuperComponent, wxComponent } from '../common/src/index';
import { DIRECTION } from './common/constants';
import config from '../common/config';
const { prefix } = config;
let SwiperItem = class SwiperItem extends SuperComponent {
    constructor() {
        super(...arguments);
        this.relations = {
            './swiper': {
                type: 'parent',
            },
        };
        this.data = {
            index: 0,
            classPrefix: `.${prefix}-swiper-item`,
            translate: '',
        };
    }
    setIndex(index, direction) {
        const translate = direction === DIRECTION.HOR
            ? `translate(${100 * index}%, 0px)`
            : `translate(0px, ${100 * index}%)`;
        this.setData({
            index,
            direction,
            translate,
        });
    }
};
SwiperItem = __decorate([
    wxComponent()
], SwiperItem);
export default SwiperItem;

//# sourceMappingURL=swiper-item.js.map
