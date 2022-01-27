var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { wxComponent, SuperComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
const { prefix } = config;
const name = `${prefix}-switch`;
let Switch = class Switch extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = ['t-class', 't-class-label', 't-class-body', 't-class-dot'];
        this.properties = props;
        // 组件的内部数据
        this.data = {
            classPrefix: name,
            isActive: false,
            bodyStyle: '',
        };
        this.lifetimes = {
            attached() {
                const { value, customValue } = this.data;
                const [activeValue] = customValue;
                this.setData({
                    isActive: value === activeValue,
                });
                this.handleColorChange();
            },
        };
        this.methods = {
            switchChange() {
                const { disabled, value, customValue, isActive } = this.data;
                const [activeValue, inactiveValue] = customValue;
                if (disabled)
                    return;
                this.setData({
                    value: value === activeValue ? inactiveValue : activeValue,
                    isActive: !isActive,
                });
                this.triggerEvent('change', {
                    value: this.data.value,
                });
                this.handleColorChange();
            },
            handleColorChange() {
                const { disabled, colors = [] } = this.data;
                const [activedColor = '#0052d9', inactivedColor = 'rgba(0, 0, 0, .26)'] = colors;
                if (!disabled) {
                    this.setData({
                        bodyStyle: `background-color: ${this.data.isActive ? activedColor : inactivedColor}`,
                    });
                }
            },
            onTapBackground() {
                this.switchChange();
            },
            onTapDot() {
                this.switchChange();
            },
        };
    }
};
Switch = __decorate([
    wxComponent()
], Switch);
export default Switch;

//# sourceMappingURL=switch.js.map
