var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import config from '../common/config';
import { SuperComponent, wxComponent } from '../common/src/index';
import Props from '../radio/radio-group-props';
const { prefix } = config;
const name = `${prefix}-radio-group`;
let RadioGroup = class RadioGroup extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`];
        this.data = {
            prefix,
            classPrefix: name,
            radioOptions: [],
        };
        this.relations = {
            '../radio/radio': {
                type: 'descendant',
                linked() {
                    this.updateChildren();
                },
            },
        };
        this.properties = Props;
        this.lifetimes = {
            attached() {
                this.handleCreateMulRadio();
            },
        };
        this.observers = {
            value: function () {
                this.updateChildren();
            },
        };
        this.methods = {
            updateChildren() {
                let items = this.getRelationNodes('../radio/radio');
                if (!items.length) {
                    items = this.selectAllComponents(`.${prefix}-radio-option`);
                }
                const { value, disabled } = this.data;
                if (items.length > 0) {
                    items.forEach((item) => {
                        item.changeActive(value === item.data.value);
                        item.setDisabled(disabled);
                    });
                }
            },
            updateValue(item) {
                this.setData({
                    value: item.name,
                });
                this.updateChildren();
                this.triggerEvent('change', item.name);
            },
            // 处理 group选项
            handleGroupSelect(e) {
                const { name } = e.detail;
                this.setData({
                    value: name,
                });
                this.triggerEvent('change', name);
                const items = this.selectAllComponents(`.${prefix}-radio-option`);
                if (items.length > 0) {
                    items.forEach((item) => {
                        item.changeActive(name === item.data.value);
                    });
                }
            },
            // 设置option选项
            handleOptionLinked() {
                const items = this.selectAllComponents(`.${prefix}-radio-option`);
                if (this.data.radioOptions.length) {
                    items.forEach((item) => {
                        item.setOptionLinked(true);
                    });
                }
            },
            // 支持自定义options
            handleCreateMulRadio() {
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
                        radioOptions: optionsValue,
                    });
                    this.handleOptionLinked();
                    this.updateChildren();
                }
                catch (error) {
                    console.error('error', error);
                }
            },
        };
    }
};
RadioGroup = __decorate([
    wxComponent()
], RadioGroup);
export default RadioGroup;

//# sourceMappingURL=radio-group.js.map
