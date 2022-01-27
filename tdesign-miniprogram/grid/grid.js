var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { isObject, SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
const { prefix } = config;
const name = `${prefix}-grid`;
let Grid = class Grid extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = ['t-class'];
        this.relations = {
            './grid-item': {
                type: 'descendant',
            },
        };
        this.properties = props;
        this.data = {
            classPrefix: name,
            contentStyle: '',
        };
        this.observers = {
            'border,gutter,column,hover,align'() {
                this.updateContentStyle();
            },
        };
        this.lifetimes = {
            attached() {
                this.updateContentStyle();
            },
            detached() {
                this.destroyed();
            },
            created() {
                this.children = [];
            },
        };
    }
    updateContentStyle() {
        const contentStyles = [];
        const marginStyle = this.getContentMargin();
        marginStyle && contentStyles.push(marginStyle);
        this.setData({
            contentStyle: contentStyles.join(';'),
        });
    }
    // 判断需不需要在content上加负margin以实现gutter间距
    getContentMargin() {
        const { gutter = 0 } = this.properties;
        let { border } = this.properties;
        if (!border)
            return `margin-left:-${gutter}rpx; margin-top:-${gutter}rpx`;
        if (!isObject(border))
            border = {};
        const { width = 2 } = border;
        return `margin-left:-${width}rpx; margin-top:-${width}rpx`;
    }
    destroyed() {
        if (this.updateTimer) {
            clearTimeout(this.updateTimer);
            this.updateTimer = null;
        }
    }
};
Grid = __decorate([
    wxComponent()
], Grid);
export default Grid;

//# sourceMappingURL=grid.js.map
