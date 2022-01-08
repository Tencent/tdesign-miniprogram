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
const name = `${prefix}-back-top`;
let BackTop = class BackTop extends SuperComponent {
    constructor() {
        super(...arguments);
        /**
         * Component properties
         */
        this.externalClasses = ['t-class', 't-class-icon', 't-class-text'];
        this.properties = props;
        /**
         * Component initial data
         */
        this.data = {
            prefix,
            classPrefix: name,
        };
    }
    /**
     * Component methods
     */
    toTop() {
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 300,
        });
    }
};
BackTop = __decorate([
    wxComponent()
], BackTop);
export default BackTop;

//# sourceMappingURL=back-top.js.map
