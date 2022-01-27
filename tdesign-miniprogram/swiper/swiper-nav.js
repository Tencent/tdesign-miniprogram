var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * 轮播导航器
 * 同时支持两种方式
 * 1、swiper简易配置，参见swiper的navigation。提升易用性
 * 2、自定义组件插槽组合，slot=nav。提升灵活性，方便样式覆盖
 */
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import { DIRECTION } from './common/constants';
const { prefix } = config;
let SwiperNav = class SwiperNav extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`];
        this.properties = {
            // 页码导航类型
            type: {
                type: String,
                value: "dots" /* dots */,
            },
            // 最小显示数量，即小于这个数不会显示导航器
            minShowNum: {
                type: Number,
                value: 2,
            },
            /**
             * 是否开启导航按钮
             */
            hasNavBtn: {
                type: Boolean,
                value: false,
            },
        };
        this.relations = {
            './swiper': {
                type: 'parent',
            },
        };
        this.data = {
            index: 0,
            total: 0,
            direction: DIRECTION.HOR,
            prefix,
            classPrefix: `.${prefix}-swiper-nav`,
        };
    }
    ready() {
        var _a;
        this.$swiper = (_a = this.getRelationNodes('./swiper')) === null || _a === void 0 ? void 0 : _a[0];
    }
    onChange(opt) {
        this.setData(Object.assign({}, opt));
    }
    nav(e) {
        var _a, _b;
        const { dir } = e.target.dataset;
        const opt = { source: 'nav', cycle: true };
        // 触发导航按钮事件
        this.triggerEvent('navBtnChange', Object.assign(Object.assign({}, opt), { dir }));
        // 插槽嵌入时主动调用API
        if (this.$swiper) {
            (_a = this.$swiper) === null || _a === void 0 ? void 0 : _a.pause();
            (_b = this.$swiper) === null || _b === void 0 ? void 0 : _b[dir](opt);
        }
    }
};
SwiperNav = __decorate([
    wxComponent()
], SwiperNav);
export default SwiperNav;

//# sourceMappingURL=swiper-nav.js.map
