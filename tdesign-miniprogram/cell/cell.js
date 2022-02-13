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
const name = `${prefix}-cell`;
let Cell = class Cell extends SuperComponent {
    constructor() {
        super(...arguments);
        /**
         * Component properties
         */
        this.externalClasses = [
            `${prefix}-class`,
            `${prefix}-class-title`,
            `${prefix}-class-description`,
            `${prefix}-class-note`,
            `${prefix}-class-hover`,
            `${prefix}-class-image`,
            `${prefix}-class-left`,
            `${prefix}-class-right`,
        ];
        this.options = {
            multipleSlots: true,
        };
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
    onClick(e) {
        this.triggerEvent('click', e.detail);
        this.jumpLink();
    }
    jumpLink(urlKey = 'url', link = 'jumpType') {
        const url = this.data[urlKey];
        const jumpType = this.data[link];
        if (url) {
            wx[jumpType]({ url });
            // wx.navigateTo({ url });
        }
    }
};
Cell = __decorate([
    wxComponent()
], Cell);
export default Cell;

//# sourceMappingURL=cell.js.map
