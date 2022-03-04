var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import Props from '../checkbox/checkbox-group-props';
const { prefix } = config;
const name = `${prefix}-checkbox-group`;
let CheckBoxGroup = class CheckBoxGroup extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = ['t-class'];
        this.relations = {
            '../checkbox/checkbox': {
                type: 'descendant',
                linked() {
                    this.updateChildren();
                },
            },
        };
        this.data = {
            classPrefix: name,
            checkboxOptions: [],
        };
        this.properties = Object.assign(Object.assign({}, Props), { defaultValue: {
                type: null,
                value: undefined,
            } });
        this.observers = {
            value: function () {
                this.updateChildren();
            },
        };
        this.lifetimes = {
            attached() {
                this.handleCreateMulCheckbox();
            },
        };
        this.controlledProps = [
            {
                key: 'value',
                event: 'change',
            },
        ];
        this.methods = {
            getChilds() {
                let items = this.getRelationNodes('../checkbox/checkbox');
                if (!items.length) {
                    items = this.selectAllComponents('.t-checkbox-option');
                }
                return items || [];
            },
            // slot插入选项
            updateChildren() {
                const items = this.getChilds();
                const { value, disabled } = this.data;
                if (items.length > 0) {
                    items.forEach((item) => {
                        !item.data.checkAll &&
                            item.setData({
                                checked: (value === null || value === void 0 ? void 0 : value.indexOf(item.data.value)) > -1,
                            });
                        item.setDisabled(disabled);
                    });
                    // 关联可全选项
                    if (items.findIndex((item) => item.data.checkAll) > -1) {
                        items.forEach((item) => {
                            item.setOptionLinked(true);
                        });
                        this.handleHalfCheck(items.length);
                    }
                }
            },
            updateValue({ name, checked }) {
                const { value, max } = this.data;
                let newValue = value;
                if (max && checked && newValue.length === max) {
                    return;
                }
                if (checked) {
                    newValue = newValue.concat(name);
                }
                else {
                    const index = newValue.findIndex((v) => v === name);
                    newValue.splice(index, 1);
                }
                this._trigger('change', { value: newValue });
            },
            // 支持自定义options
            handleCreateMulCheckbox() {
                const { options } = this.data;
                // 数字数组｜字符串数组｜对像数组
                if (!(options === null || options === void 0 ? void 0 : options.length) || !Array.isArray(options)) {
                    return;
                }
                const optionsValue = [];
                try {
                    options.forEach((element) => {
                        const typeName = typeof element;
                        if (typeName === 'number' || typeName === 'string') {
                            optionsValue.push({
                                label: `${element}`,
                                value: element,
                            });
                        }
                        else if (typeName === 'object') {
                            optionsValue.push(Object.assign({}, element));
                        }
                    });
                    this.setData({
                        checkboxOptions: optionsValue,
                    });
                    this.updateChildren();
                }
                catch (error) {
                    console.error('error', error);
                }
            },
            // 处理全选
            handleCheckAll(e) {
                const { checked, option, name } = e.detail || e;
                const items = this.getChilds();
                if (!option) {
                    if (!(items === null || items === void 0 ? void 0 : items.length)) {
                        return;
                    }
                    this._trigger('change', {
                        value: items
                            .map((item) => {
                            if (item.data.disabled) {
                                return this.data.value.includes(item.data.value) ? item.data.value : '';
                            }
                            return checked && !item.data.checkAll ? item.data.value : '';
                        })
                            .filter((val) => val),
                    });
                }
                else {
                    this.updateValue({ name, checked });
                }
            },
            // 处理options半选
            handleHalfCheck(len) {
                var _a;
                const items = this.getChilds();
                const checkboxOptions = items.filter((i) => !i.data.checkAll);
                const all = checkboxOptions.map((item) => item.data.value);
                const enableValue = checkboxOptions
                    .filter((i) => !i.data.disabled)
                    .map((item) => item.data.value);
                const currentVal = Array.from(new Set((_a = this.data.value) === null || _a === void 0 ? void 0 : _a.filter((i) => all.indexOf(i) > -1)));
                const element = items.find((item) => item.data.checkAll);
                if (currentVal.length) {
                    element === null || element === void 0 ? void 0 : element.setData({ checked: true });
                    element === null || element === void 0 ? void 0 : element.changeCheckAllHalfStatus(currentVal.length !== len - 1);
                    // 取消全选
                    element === null || element === void 0 ? void 0 : element.setCancel(enableValue.every((val) => currentVal.includes(val)));
                }
                else {
                    element === null || element === void 0 ? void 0 : element.setData({ checked: false });
                }
            },
            // 设置可全选option选项
            handleOptionLinked() {
                const items = this.selectAllComponents('.t-checkbox-option');
                if (this.data.checkboxOptions.length) {
                    items.forEach((item) => {
                        item.setOptionLinked(true);
                    });
                }
            },
        };
    }
};
CheckBoxGroup = __decorate([
    wxComponent()
], CheckBoxGroup);
export default CheckBoxGroup;

//# sourceMappingURL=checkbox-group.js.map
