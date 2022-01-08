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
const currentComponent = `${prefix}-checkbox`;
let CheckBox = class CheckBox extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = ['t-class', 't-class-label', 't-class-icon', 't-class-content'];
        this.relations = {
            '../checkbox-group/checkbox-group': {
                type: 'ancestor',
            },
        };
        this.options = {
            multipleSlots: true,
        };
        this.properties = Props;
        // 组件的内部数据
        this.data = {
            classPrefix: currentComponent,
            classBasePrefix: prefix,
            active: false,
            halfChecked: false,
            optionLinked: false,
        };
        this.lifetimes = {
            attached() {
                this.initStatus();
            },
        };
        /* Methods */
        this.methods = {
            onChange(e) {
                const { disabled, readonly } = this.data;
                if (disabled || readonly)
                    return;
                const { target } = e.currentTarget.dataset;
                const { contentDisabled } = this.data;
                if (target === 'text' && contentDisabled) {
                    return;
                }
                const { value, active, checkAll, optionLinked } = this.data;
                const item = { name: value, checked: !active, checkAll };
                const [parent] = this.getRelationNodes('../checkbox-group/checkbox-group');
                if (parent) {
                    if (checkAll || optionLinked) {
                        parent.handleCheckAll({
                            type: 'slot',
                            checked: !active,
                            option: !checkAll,
                            name: value,
                        });
                    }
                    else {
                        parent.updateValue(item);
                    }
                }
                else if (checkAll || optionLinked) {
                    this.triggerEvent('toggleAll', {
                        type: 'not-slot',
                        checked: !active,
                        option: !checkAll,
                        name: value,
                    });
                }
                else {
                    this.triggerEvent('change', !active);
                    this.toggle();
                }
            },
            initStatus() {
                if (!this.data.optionLinked) {
                    if (this.data.indeterminate) {
                        this.setData({
                            active: true,
                            halfChecked: true,
                        });
                    }
                    else {
                        this.setData({
                            active: this.data.checked,
                            halfChecked: this.data.indeterminate,
                        });
                    }
                }
            },
            toggle() {
                const { active } = this.data;
                this.setData({
                    active: !active,
                });
            },
            setDisabled(disabled) {
                this.setData({
                    disabled: this.data.disabled || disabled,
                });
            },
            changeActive(active) {
                this.setData({
                    active,
                });
            },
            // 半选
            changeCheckAllHalfStatus(active) {
                this.setData({
                    halfChecked: active,
                });
            },
            // group option
            setOptionLinked(linked) {
                this.setData({
                    optionLinked: linked,
                });
            },
        };
    }
};
CheckBox = __decorate([
    wxComponent()
], CheckBox);
export default CheckBox;

//# sourceMappingURL=checkbox.js.map
