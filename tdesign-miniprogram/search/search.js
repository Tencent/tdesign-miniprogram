var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
const { prefix } = config;
const name = `${prefix}-search`;
let Search = class Search extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [
            `${prefix}-class`,
            `${prefix}-class-input`,
            `${prefix}-class-cancel`,
            `${prefix}-class-left`,
            `${prefix}-class-right`,
        ];
        this.options = {
            multipleSlots: true,
        };
        this.properties = props;
        this.observers = {
            keyword(nextValue) {
                this.setData({ 'localValue.keyword': nextValue });
            },
            focus(nextValue) {
                this.setData({ 'localValue.focus': nextValue });
            },
            center(nextValue) {
                if (!nextValue) {
                    this.ignoreFocusEvtAfterBlurInCenterMode = false;
                }
            },
        };
        this.data = {
            classPrefix: name,
            prefix,
            localValue: {
                keyword: '',
                focus: false,
            },
        };
        /**
         * 场景：
         * 1. center模式启用
         * 2. 在点击激活input focus之后快速点击别的地方blur掉input
         * 3. 如果没有这个变量拦截，onFocus会被短时间后被调用，猜测是input的onFocus触发是非同步的
         */
        this.ignoreFocusEvtAfterBlurInCenterMode = false;
    }
    attached() {
        this.setData({
            'localValue.keyword': this.properties.keyword,
            'localValue.focus': this.properties.focus,
        });
    }
    onInput(e) {
        const { value } = e.detail;
        this.setData({ 'localValue.keyword': value });
        this.triggerEvent('change', { value });
    }
    onFocus() {
        if (this.ignoreFocusEvtAfterBlurInCenterMode) {
            this.ignoreFocusEvtAfterBlurInCenterMode = false;
            return;
        }
        this.setData({ 'localValue.focus': true });
        this.triggerEvent('focus');
    }
    onBlur() {
        this.setData({ 'localValue.focus': false });
        this.triggerEvent('blur');
        if (this.properties.center) {
            this.ignoreFocusEvtAfterBlurInCenterMode = true;
        }
    }
    onClear() {
        this.setData({ 'localValue.keyword': '' });
        this.triggerEvent('clear', { value: '' });
    }
    onConfirm(e) {
        const value = e.detail;
        this.triggerEvent('submit', value);
    }
    onCancel() {
        this.triggerEvent('cancel');
    }
    tapWhenCenterActiveHandle() {
        if (this.properties.center) {
            this.ignoreFocusEvtAfterBlurInCenterMode = false;
            this.onFocus();
        }
    }
};
Search = __decorate([
    wxComponent()
], Search);
export default Search;

//# sourceMappingURL=search.js.map
