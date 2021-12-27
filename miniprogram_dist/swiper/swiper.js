var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/**
 * 轮播组件
 * 因原生swiper受限，基于wxs重新实现，后期可以扩展更多丰富的功能
 * todo：无限循环，3D动效等
 */
import { SuperComponent, wxComponent, useControl } from '../common/src/index';
import config from '../common/config';
import { DIRECTION } from './common/constants';
import props from './props';
const { prefix } = config;
const easings = {
    // 线性动画
    linear: 'linear',
    // 缓入动画
    // https://easings.net/#easeInCubic
    easeInCubic: 'cubic-bezier(0.32, 0, 0.67, 0)',
    // 缓出动画
    // https://easings.net/#easeOutCubic
    easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)',
    // 缓入缓出动画
    // https://easings.net/#easeInOutCubic
    easeInOutCubic: 'cubic-bezier(0.65, 0, 0.35, 1)',
};
const defaultNavigation = {
    type: "dots" /* dots */,
    minShowNum: 2,
    hasNavBtn: false,
};
let Swiper = class Swiper extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`];
        this.options = {
            multipleSlots: true,
        };
        this.properties = props;
        this.observers = {
            navigation(val) {
                this.setData({
                    _navigation: Object.assign(Object.assign({}, defaultNavigation), val),
                });
            },
            current(val) {
                this.update(+val);
            },
            autoplay(val) {
                if (val) {
                    this.play();
                }
                else {
                    this.pause();
                }
            },
            interval(val) {
                if (this._old_interval && this._old_interval !== val) {
                    this.replay();
                }
                this._old_interval = val;
            },
            direction(val) {
                // 属性变化时，重新初始化
                if (this._old_direction && this._old_direction !== val) {
                    this.initItem();
                }
                this._old_direction = val;
            },
        };
        this.children = null;
        this.$nav = null;
        this.timer = null;
        // 受控属性
        this.control = null;
        this.relations = {
            './swiper-item': {
                type: 'child',
            },
            './swiper-nav': {
                type: 'child',
            },
        };
        this.data = {
            // 内部状态：当前临时索引
            _current: 0,
            // 内部取默认值后的配置
            _navigation: null,
            // 容器宽
            _width: 0,
            // 容器高
            _height: 0,
            offsetX: 0,
            // todo
            offsetY: 0,
            // 列表项总数
            total: 0,
            easings,
            // js和wxs等初始化就绪
            inited: false,
            // current初始化的值就绪
            currentInited: false,
            prefix,
            classPrefix: `.${prefix}-swiper`,
        };
    }
    attached() {
        // 暂停完全受控模式，待TD全量支持受控后，再开启
        // this.control = useControl.call(this, {
        //   valueKey: 'current',
        //   defaultValueKey: 'defaultCurrent',
        // });
        // 启用半受控模式
        this.control = useControl.call(this, {
            valueKey: 'current',
            strict: false,
        });
        this.createSelectorQuery()
            .select('#swiper')
            .boundingClientRect((rect) => {
            this.setData({
                _width: rect.width,
                _height: rect.height,
            });
            this.initCurrent();
        })
            .exec();
    }
    detached() {
        this.pause();
    }
    ready() {
        this.initItem();
        this.initNav();
    }
    /**
     * 初始化 swiper-item
     */
    initItem() {
        const { direction } = this.properties;
        this.children = this.getRelationNodes('./swiper-item');
        this.children.forEach((item, index) => {
            item.setIndex(index, direction);
        });
        this.setData({
            total: this.children.length,
        });
    }
    /**
     * 初始化 swiper-nav
     */
    initNav() {
        var _a;
        const { _navigation } = this.data;
        if (_navigation) {
            // 启用内部导航器
            this.$nav = this.selectComponent('#swiperNav');
        }
        else {
            // 启用插槽嵌入的导航器
            this.$nav = (_a = this.getRelationNodes('./swiper-nav')) === null || _a === void 0 ? void 0 : _a[0];
        }
    }
    /**
     * 初始化也需要等待wxs完成，由wxs触发inited
     */
    inited() {
        this.updateNav(this.control.get());
        this.setData({
            inited: true,
        });
    }
    /**
     * 初始化current
     * 需要通过wxs更新位置，存在短暂延迟
     */
    initCurrent() {
        const index = this.control.initValue;
        this.control.set(index, Object.assign({ currentInited: true, 
            // 默认为0时，不需要等待wxs计算位置，可直接显示
            inited: index === 0 }, this.calcOffset(index)));
    }
    play() {
        this.pause();
        const { interval } = this.properties;
        this.timer = setInterval(() => {
            const { inited } = this.data;
            if (!inited)
                return;
            this.next({ cycle: true, source: 'autoplay' });
        }, interval);
    }
    replay() {
        const { autoplay } = this.properties;
        autoplay && this.play();
    }
    pause() {
        this.timer && clearInterval(this.timer);
        this.timer = null;
    }
    /**
     * 跳转目标页
     * @param index 目标页索引
     * @param source 来源标记
     * @returns
     */
    goto(index, source) {
        if (this.control.get() === index) {
            this.update(index);
            return;
        }
        this.control.change(index, {
            current: index,
            source,
        }, () => {
            this.update(index);
        });
    }
    /**
     * 更新目标页
     * @param index 目标页索引（一页可能有多个item）
     * @returns
     */
    update(index, finish) {
        if (!this.children)
            return;
        const len = this.children.length;
        let fixIndex = +index;
        if (Number.isNaN(fixIndex))
            return;
        if (fixIndex <= 0) {
            fixIndex = 0;
        }
        else if (fixIndex > len - 1) {
            fixIndex = len - 1;
        }
        this.updateNav(fixIndex);
        this.control.set(fixIndex, this.calcOffset(fixIndex), finish);
    }
    /**
     * 更新导航器
     * @param index
     */
    updateNav(index) {
        var _a;
        if (!this.$nav)
            return;
        const { direction } = this.properties;
        (_a = this.$nav) === null || _a === void 0 ? void 0 : _a.onChange({
            index,
            total: this.children.length,
            direction,
        });
    }
    calcOffset(index) {
        const { direction } = this.properties;
        const { _width, _height } = this.data;
        if (direction === DIRECTION.HOR) {
            return {
                offsetX: -index * _width,
            };
        }
        return {
            offsetY: -index * _height,
        };
    }
    /**
     * 下一页
     * @param opt
     */
    next(opt) {
        const innerVal = this.control.get();
        const len = this.children.length;
        let nextIndex = innerVal;
        if (opt.cycle && innerVal === len - 1) {
            // 最后一个时，跳转第一个
            nextIndex = 0;
        }
        else if (len - 1 > innerVal) {
            nextIndex += 1;
        }
        this.goto(nextIndex, opt.source);
    }
    /**
     * 上一页
     * @param opt
     */
    prev(opt) {
        const innerVal = this.control.get();
        const len = this.children.length;
        let nextIndex = innerVal;
        if (opt.cycle && innerVal === 0) {
            // 第一个时，跳转到最后一个
            nextIndex = len - 1;
        }
        else if (nextIndex > 0) {
            nextIndex -= 1;
        }
        this.goto(nextIndex, opt.source);
    }
    /**
     * 内置导航组件，监听按钮点击
     * @param e
     */
    onSwiperNavBtnChange(e) {
        const _a = e.detail, { dir } = _a, rest = __rest(_a, ["dir"]);
        this.pause();
        this === null || this === void 0 ? void 0 : this[dir](rest);
    }
};
Swiper = __decorate([
    wxComponent()
], Swiper);
export default Swiper;

//# sourceMappingURL=swiper.js.map
