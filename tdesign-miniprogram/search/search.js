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
            `${prefix}-class-input-container`,
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
            focus(nextValue) {
                this.setData({ 'localValue.focus': nextValue });
            },
        };
        this.data = {
            classPrefix: name,
            prefix,
            localValue: {
                focus: false,
            },
        };
    }
    onInput(e) {
        const { value } = e.detail;
        this.setData({ value });
        this.triggerEvent('change', { value });
    }
    onFocus(e) {
        const { value } = e.detail;
        this.setData({ 'localValue.focus': true });
        this.triggerEvent('focus', { value });
    }
    onBlur(e) {
        const { value } = e.detail;
        this.setData({ 'localValue.focus': false });
        this.triggerEvent('blur', { value });
    }
    handleClear() {
        this.setData({ value: '' });
        this.triggerEvent('clear', { value: '' });
    }
    onConfirm(e) {
        const value = e.detail;
        this.triggerEvent('submit', { value });
    }
    onCancel() {
        this.triggerEvent('cancel');
    }
};
Search = __decorate([
    wxComponent()
], Search);
export default Search;

//# sourceMappingURL=search.js.map
