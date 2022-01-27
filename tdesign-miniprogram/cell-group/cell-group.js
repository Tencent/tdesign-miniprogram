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
const name = `${prefix}-cell-group`;
let CellGroup = class CellGroup extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = ['t-class'];
        this.options = {
            addGlobalClass: true,
        };
        /**
         * 组件的属性列表
         */
        this.properties = props;
        /**
         * 组件的初始数据
         */
        this.data = {
            classPrefix: name,
        };
    }
};
CellGroup = __decorate([
    wxComponent()
], CellGroup);
export default CellGroup;

//# sourceMappingURL=cell-group.js.map
