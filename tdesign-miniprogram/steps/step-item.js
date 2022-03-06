var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { wxComponent, SuperComponent } from '../common/src/index';
import config from '../common/config';
import props from './step-item-props';
const { prefix } = config;
let StepItem = class StepItem extends SuperComponent {
    constructor() {
        super(...arguments);
        this.options = {
            multipleSlots: true,
        };
        this.relations = {
            './steps': {
                type: 'ancestor',
            },
        };
        this.externalClasses = [
            `${prefix}-class`,
            `${prefix}-class-content`,
            `${prefix}-class-title`,
            `${prefix}-class-description`,
            `${prefix}-class-extra`,
        ];
        this.properties = props;
        // 组件的内部数据
        this.data = {
            classPrefix: `${prefix}-steps-item`,
            prefix,
            rootClassName: '',
            parent: null,
            index: 0,
            isDot: false,
            curStatus: '',
            layout: 'vertical',
            type: 'default',
            isLastChild: false,
            isLarge: false,
            readonly: false,
            computedIcon: '',
        };
        this.observers = {
            icon(val) {
                this.setData({
                    computedIcon: val,
                });
            },
            curStatus(val) {
                if (this.data.readonly) {
                    if (val === 'finish') {
                        this.setData({
                            computedIcon: 'check',
                        });
                    }
                    else if (val === 'error') {
                        this.setData({
                            computedIcon: 'close',
                        });
                    }
                }
            },
        };
        this.lifetimes = {
            ready() {
                const [parent] = this.getRelationNodes('./steps') || [];
                if (parent) {
                    this.setData({
                        parent,
                    });
                }
            },
        };
        this.methods = {
            updateStatus(current, index, theme, layout, steps, readonly) {
                const { status } = this.data;
                let newStatus = status;
                if (newStatus === 'default') {
                    if (index < current) {
                        // 1. 本步骤序号小于当前步骤并且没有设定任何步骤序号，设定状态为 finish
                        newStatus = 'finish';
                        // eslint-disable-next-line
                    }
                    else if (index == current) {
                        // 2. 本步骤序号等于当前步骤. 默认为process
                        newStatus = 'process';
                    }
                    else if (readonly) {
                        // 3. 本步骤序号大于当前步骤，默认为wait
                        newStatus = 'wait';
                    }
                }
                this.setData({
                    curStatus: newStatus,
                    index,
                    isDot: theme === 'dot' && layout === 'vertical',
                    layout,
                    theme,
                    isLastChild: steps.length - 1 === index,
                });
            },
            click() {
                this.data.parent.handleClick(this.data.index);
            },
        };
    }
};
StepItem = __decorate([
    wxComponent()
], StepItem);
export default StepItem;

//# sourceMappingURL=step-item.js.map
