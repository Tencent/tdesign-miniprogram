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
let Stepper = class Stepper extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [
            `${prefix}-class`,
            `${prefix}-class-input`,
            `${prefix}-class-minus`,
            `${prefix}-class-plus`,
        ];
        this.options = {
            addGlobalClass: true,
        };
        this.properties = props;
        this.controlledProps = [
            {
                key: 'value',
                event: 'change',
            },
        ];
        this.observers = {
            value(v) {
                this.setData({
                    currentValue: Number(v),
                });
            },
        };
        this.data = {
            currentValue: 0,
            classPrefix: `${prefix}-stepper`,
            prefix,
        };
    }
    attached() {
        const { value, min } = this.properties;
        this.setData({
            currentValue: value ? Number(value) : min,
        });
    }
    isDisabled(type) {
        const { min, max, disabled } = this.properties;
        const { currentValue } = this.data;
        if (disabled) {
            return true;
        }
        if (type === 'minus' && currentValue <= min) {
            return true;
        }
        if (type === 'plus' && currentValue >= max) {
            return true;
        }
        return false;
    }
    format(value) {
        const { min, max } = this.properties;
        // 超过边界取边界值
        return Math.max(Math.min(max, value, Number.MAX_SAFE_INTEGER), min, Number.MIN_SAFE_INTEGER);
    }
    setValue(value) {
        this._trigger('change', { value });
    }
    minusValue() {
        if (this.isDisabled('minus')) {
            this.triggerEvent('overlimit', { type: 'minus' });
            return false;
        }
        const { currentValue, step } = this.data;
        this.setValue(this.format(currentValue - step));
    }
    plusValue() {
        if (this.isDisabled('plus')) {
            this.triggerEvent('overlimit', { type: 'plus' });
            return false;
        }
        const { currentValue, step } = this.data;
        this.setValue(this.format(currentValue + step));
    }
    changeValue(e) {
        const value = String(e.detail.value)
            .split('.')[0]
            .replace(/[^-0-9]/g, '') || 0;
        this.setValue(this.format(Number(value)));
        this.triggerEvent('blur', { value });
    }
    blurHandler(e) {
        this.changeValue(e);
    }
};
Stepper = __decorate([
    wxComponent()
], Stepper);
export default Stepper;

//# sourceMappingURL=stepper.js.map
