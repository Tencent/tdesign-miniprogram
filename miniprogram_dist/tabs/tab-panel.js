var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import props from './tab-panel-props';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-tab-panel`;
let TabPanel = class TabPanel extends SuperComponent {
    constructor() {
        super(...arguments);
        this.relations = {
            './tabs': {
                type: 'ancestor',
            },
        };
        this.properties = props;
        this.data = {
            prefix,
            classPrefix: name,
            active: false,
            hide: true,
        };
        this.observers = {
            label() {
                this.update();
            },
        };
    }
    getComputedName() {
        if (this.properties.value) {
            return `${this.properties.value}`;
        }
        return `${this.index}`;
    }
    update() {
        if (this.parent) {
            this.parent.updateTabs();
        }
    }
    render(active, parent) {
        this.setData({
            active,
            hide: !parent.animated && !active,
        });
    }
};
TabPanel = __decorate([
    wxComponent()
], TabPanel);
export default TabPanel;

//# sourceMappingURL=tab-panel.js.map
