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
const classPrefix = `${prefix}-checkbox`;
let CheckBox = class CheckBox extends SuperComponent {
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
            '../checkbox-group/checkbox-group': {
                type: 'ancestor',
            },
        };
        this.options = {
            multipleSlots: true,
        };
        this.properties = Object.assign(Object.assign({}, Props), { defaultChecked: {
                type: null,
                value: undefined,
            } });
        // 组件的内部数据
        this.data = {
            classPrefix,
            prefix,
            active: false,
            halfChecked: false,
            optionLinked: false,
            canCancel: false,
        };
        this.lifetimes = {
            attached() {
                this.initStatus();
            },
        };
        this.observers = {
            checked: function (isChecked) {
                this.initStatus();
                this.setData({
                    active: isChecked,
                });
            },
        };
        this.controlledProps = [
            {
                key: 'checked',
                event: 'change',
            },
        ];
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
                const { value, active, checkAll, optionLinked, canCancel } = this.data;
                const item = { name: value, checked: !active, checkAll };
                const [parent] = this.getRelationNodes('../checkbox-group/checkbox-group');
                if (parent) {
                    if (checkAll || optionLinked) {
                        parent.handleCheckAll({
                            type: 'slot',
                            checked: !active || (this.data.halfChecked && !canCancel),
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
                        checked: !active || (this.data.halfChecked && !canCancel),
                        option: !checkAll,
                        name: value,
                    });
                }
                else {
                    this._trigger('change', { checked: !active });
                    // this.triggerEvent('change', !active);
                    // this.toggle();
                }
            },
            initStatus() {
                const { optionLinked, indeterminate } = this.data;
                if (!optionLinked) {
                    this.setData({
                        halfChecked: indeterminate,
                    });
                }
            },
            setCancel(cancel) {
                this.setData({
                    canCancel: cancel,
                });
            },
            setDisabled(disabled) {
                this.setData({
                    disabled: this.data.disabled || disabled,
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
