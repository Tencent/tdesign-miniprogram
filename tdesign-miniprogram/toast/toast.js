var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import Props from './props';
const { prefix } = config;
const name = `${prefix}-toast`;
let Toast = class Toast extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = ['t-class'];
        this.options = {
            multipleSlots: true, // 在组件定义时的选项中启用多slot支持
        };
        this.hideTimer = null;
        this.removeTimer = null;
        this.typeMapIcon = {
            loading: 'loading',
            success: 'check-circle',
            fail: 'error-circle',
        };
        this.data = {
            inserted: false,
            show: false,
            classPrefix: name,
            typeMapIcon: '',
        };
        this.properties = Props;
    }
    show(options) {
        if (this.hideTimer)
            clearTimeout(this.hideTimer);
        if (this.removeTimer)
            clearTimeout(this.removeTimer);
        const typeMapIcon = Object.keys(this.typeMapIcon).indexOf(options === null || options === void 0 ? void 0 : options.theme) !== -1
            ? this.typeMapIcon[options === null || options === void 0 ? void 0 : options.theme]
            : '';
        const data = Object.assign(Object.assign({}, options), { show: true, typeMapIcon, inserted: true });
        const { duration } = data;
        this.setData(data);
        this.hideTimer = setTimeout(() => {
            this.clear();
        }, duration);
    }
    clear() {
        this.setData({ show: false });
        this.removeTimer = setTimeout(() => {
            this.setData({
                inserted: false,
            });
        }, 300);
    }
    detached() {
        this.destroyed();
    }
    destroyed() {
        if (this.removeTimer) {
            clearTimeout(this.removeTimer);
            this.removeTimer = null;
        }
        if (this.hideTimer) {
            clearTimeout(this.hideTimer);
            this.hideTimer = null;
        }
    }
};
Toast = __decorate([
    wxComponent()
], Toast);
export default Toast;

//# sourceMappingURL=toast.js.map
