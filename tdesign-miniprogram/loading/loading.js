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
const name = `${prefix}-loading`;
let Loading = class Loading extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`, `${prefix}-class-text`, `${prefix}-class-indicator`];
        this.data = {
            prefix,
            classPrefix: name,
            show: false,
        };
        this.options = {
            multipleSlots: true,
        };
        this.properties = props;
        this.timer = null;
        this.observers = {
            loading(cur) {
                const { delay } = this.properties;
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                if (cur) {
                    if (delay) {
                        this.timer = setTimeout(() => {
                            this.setData({ show: cur });
                            this.timer = null;
                        }, delay);
                    }
                    else {
                        this.setData({ show: cur });
                    }
                }
                else {
                    this.setData({ show: cur });
                }
            },
        };
        this.lifetimes = {
            detached() {
                clearTimeout(this.timer);
            },
        };
    }
    refreshPage() {
        this.triggerEvent('reload');
    }
};
Loading = __decorate([
    wxComponent()
], Loading);
export default Loading;

//# sourceMappingURL=loading.js.map
