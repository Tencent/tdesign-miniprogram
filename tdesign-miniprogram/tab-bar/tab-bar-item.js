var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { wxComponent, SuperComponent } from '../common/src/index';
import config from '../common/config';
import props from './tab-bar-item-props';
const { prefix } = config;
const classPrefix = `${prefix}-tab-bar-item`;
let TabbarItem = class TabbarItem extends SuperComponent {
    constructor() {
        super(...arguments);
        this.relations = {
            './tab-bar': {
                type: 'ancestor',
                linked(parent) {
                    const [activeColor, color] = parent.data.color;
                    this.setData({
                        parent,
                        color,
                        activeColor,
                        split: parent.data.split,
                        currentName: this.properties.value ? this.properties.value : parent.initName(),
                    });
                    parent.updateChildren();
                },
            },
        };
        this.data = {
            prefix,
            classPrefix,
            isSpread: false,
            isChecked: false,
            parent: null,
            hasChildren: false,
            currentName: '',
            color: '',
            activeColor: '',
            split: true,
        };
        this.properties = props;
        this.observers = {
            subTabBar(value) {
                this.setData({
                    hasChildren: value.length > 0,
                });
            },
        };
        this.methods = {
            showSpread() {
                this.setData({
                    isSpread: true,
                });
            },
            toggle() {
                const { parent, currentName, hasChildren, isSpread } = this.data;
                if (hasChildren) {
                    this.setData({
                        isSpread: !isSpread,
                    });
                }
                parent.updateValue(currentName);
                parent.changeOtherSpread(currentName);
            },
            selectChild(event) {
                const { parent, currentName } = this.data;
                const childName = event.target.dataset.name;
                if (!(Array.isArray(parent.value) && parent.value[1] === childName)) {
                    parent.updateValue([currentName, childName]);
                }
                this.setData({
                    isSpread: false,
                });
            },
            checkActive(value) {
                const { currentName, hasChildren } = this.data;
                const isChecked = currentName === value;
                if (hasChildren && Array.isArray(value)) {
                    return value.indexOf(currentName) > -1;
                }
                this.setData({
                    isChecked,
                });
            },
            closeSpread() {
                this.setData({
                    isSpread: false,
                });
            },
        };
    }
};
TabbarItem = __decorate([
    wxComponent()
], TabbarItem);
export default TabbarItem;

//# sourceMappingURL=tab-bar-item.js.map
