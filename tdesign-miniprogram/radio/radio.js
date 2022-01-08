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
        this.externalClasses = [`${prefix}-class`, `${prefix}-class-label`, `${prefix}-class-icon`, `${prefix}-class-content`];
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
                this.handleInitStatus();
            },
        };
        this.properties = Props;
        this.data = {
            prefix,
            active: false,
            classPrefix: name,
            classBasePrefix: prefix,
            customIcon: false,
            optionLinked: false,
            iconVal: [],
        };
        this.methods = {
            onChange(e) {
                if (this.data.disabled)
                    return;
                const { target } = e.currentTarget.dataset;
                const { contentDisabled } = this.data;
                if (target === 'text' && contentDisabled) {
                    return;
                }
                const { value, active, optionLinked } = this.data;
                const [parent] = this.getRelationNodes('../radio-group/radio-group');
                if (parent) {
                    parent.updateValue({ name: value });
                }
                else {
                    if (optionLinked) {
                        this.triggerEvent('toggleGroupSelect', { name: value });
                        return;
                    }
                    this.triggerEvent('change', !active);
                    this.toggle();
                }
            },
            handleInitStatus() {
                const { icon } = this.data;
                const isIdArr = Array.isArray(icon);
                this.setData({
                    customIcon: isIdArr,
                    iconVal: !isIdArr ? iconDefault[icon] : this.data.icon,
                });
                if (!this.data.optionLinked) {
                    this.setData({
                        active: this.data.checked,
                    });
                }
            },
            toggle() {
                const { active } = this.data;
                this.setData({
                    active: !active,
                });
            },
            changeActive(active) {
                this.setData({
                    active,
                });
            },
            setDisabled(disabled) {
                this.setData({
                    disabled: this.data.disabled || disabled,
                });
            },
            // 支持options
            setOptionLinked(linked) {
                this.setData({
                    optionLinked: linked,
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
