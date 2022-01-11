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
const name = `${prefix}-steps`;
let Steps = class Steps extends SuperComponent {
    constructor() {
        super(...arguments);
        this.relations = {
            './step-item': {
                type: 'descendant',
                linked() {
                    this.updateChildren();
                },
            },
        };
        this.externalClasses = [`${prefix}-class`];
        this.properties = props;
        // 组件的内部数据
        this.data = {
            prefix,
            classPrefix: name,
        };
        this.methods = {
            updateChildren() {
                const items = this.getRelationNodes('./step-item');
                const len = items.length;
                const { current } = this.data;
                if (len > 0) {
                    items.forEach((item, index) => {
                        item.updateStatus(current, index, this.data.theme, this.data.layout, items);
                    });
                }
            },
            handleClick(index) {
                if (this.data.layout === 'vertical') {
                    return;
                }
                if (!this.data.readonly) {
                    const preIndex = this.data.current;
                    this.setData({
                        current: index,
                    }, () => {
                        this.updateChildren();
                    });
                    this.triggerEvent('change', {
                        previous: preIndex,
                        current: index,
                    });
                }
            },
        };
    }
};
Steps = __decorate([
    wxComponent()
], Steps);
export default Steps;

//# sourceMappingURL=steps.js.map
