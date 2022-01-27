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
const name = `${prefix}-icon`;
const sizeKeywordMap = {
    xs: '24rpx',
    small: '28rpx',
    middle: '32rpx',
    large: '36rpx',
    xl: '40rpx',
};
let Icon = class Icon extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = ['t-class'];
        this.properties = props;
        this.data = {
            classPrefix: name,
            fontSize: '',
        };
        this.observers = {
            size(val) {
                let fontSize = val;
                if (Object.prototype.hasOwnProperty.call(sizeKeywordMap, val)) {
                    fontSize = sizeKeywordMap[val];
                }
                this.setData({ fontSize });
            },
        };
        this.methods = {
            onTap(event) {
                this.triggerEvent('click', event.detail);
            },
        };
    }
};
Icon = __decorate([
    wxComponent()
], Icon);
export default Icon;

//# sourceMappingURL=icon.js.map
