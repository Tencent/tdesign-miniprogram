var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import config from '../common/config';
import { SuperComponent, wxComponent } from '../common/src/index';
import Props from './props';
const { prefix } = config;
const name = `${prefix}-radio`;
const iconDefault = {
    'fill-circle': ['check-circle-filled', 'circle'],
    'stroke-line': ['check', ''],
};
let Radio = class Radio extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [
            `${prefix}-class`,
            `${prefix}-class-label`,
            `${prefix}-class-icon`,
            `${prefix}-class-content`,
            `${prefix}-class-border`,
        ];
        this.relations = {
            '../radio-group/radio-group': {
                type: 'ancestor',
            },
        };
        this.options = {
            multipleSlots: true,
        };
        this.lifetimes = {
            attached() {
                this.initStatus();
            },
        };
        this.properties = Object.assign({}, Props);
        this.controlledProps = [
            {
                key: 'checked',
                event: 'change',
            },
        ];
        this.observers = {
            checked(isChecked) {
                this.setData({
                    active: isChecked,
                });
            },
        };
        this.data = {
            prefix,
            active: false,
            classPrefix: name,
            customIcon: false,
            optionLinked: false,
            iconVal: [],
        };
        this.methods = {
            handleTap(e) {
                if (this.data.disabled)
                    return;
                const { target } = e.currentTarget.dataset;
                if (target === 'text' && this.data.contentDisabled)
                    return;
                const { value, active } = this.data;
                const [parent] = this.getRelationNodes('../radio-group/radio-group');
                if (parent) {
                    parent.updateValue(value);
                }
                else {
                    this._trigger('change', { checked: !active });
                }
            },
            initStatus() {
                const { icon } = this.data;
                const isIdArr = Array.isArray(icon);
                this.setData({
                    customIcon: isIdArr,
                    iconVal: !isIdArr ? iconDefault[icon] : this.data.icon,
                });
            },
            setDisabled(disabled) {
                this.setData({
                    disabled: this.data.disabled || disabled,
                });
            },
        };
    }
};
Radio = __decorate([
    wxComponent()
], Radio);
export default Radio;

//# sourceMappingURL=radio.js.map
