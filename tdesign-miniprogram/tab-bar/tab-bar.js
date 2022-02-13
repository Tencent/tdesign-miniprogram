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
const classPrefix = `${prefix}-tab-bar`;
let Tabbar = class Tabbar extends SuperComponent {
    constructor() {
        super(...arguments);
        this.relations = {
            './tab-bar-item': {
                type: 'descendant',
            },
        };
        this.externalClasses = ['t-class'];
        this.data = {
            classPrefix,
            defaultNameIndex: -1,
        };
        this.properties = props;
        this.controlledProps = [
            {
                key: 'value',
                event: 'change',
            },
        ];
        this.observers = {
            value() {
                this.updateChildren();
            },
        };
        this.methods = {
            showChildren() {
                const items = this.getRelationNodes('./tab-bar-item');
                const len = items.length;
                const { value } = this.data;
                if (len > 0) {
                    items.forEach((item) => {
                        if (item.properties.currentName === value) {
                            item.showSpread();
                        }
                    });
                }
            },
            updateChildren() {
                const items = this.getRelationNodes('./tab-bar-item');
                const len = items.length;
                const { value } = this.data;
                if (len > 0) {
                    items.forEach((item) => {
                        item.checkActive(value);
                    });
                }
            },
            updateValue(value) {
                this._trigger('change', { value });
            },
            changeOtherSpread(value) {
                const items = this.getRelationNodes('./tab-bar-item');
                items.forEach((item) => {
                    if (item.properties.currentName !== value) {
                        item.closeSpread();
                    }
                });
            },
            /**
             * 对于没有 name 的 item 生成一个 name
             */
            initName() {
                const nameIndex = this.data.defaultNameIndex + 1;
                this.setData({
                    defaultNameIndex: nameIndex,
                });
                return nameIndex;
            },
        };
    }
    /**
     * value设置为多层级标签，需要展开
     */
    ready() {
        this.showChildren();
    }
};
Tabbar = __decorate([
    wxComponent()
], Tabbar);
export default Tabbar;

//# sourceMappingURL=tab-bar.js.map
